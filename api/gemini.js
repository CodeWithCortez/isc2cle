// Vercel Serverless Function — proxies requests to the Google Gemini API.
// The API key stays server-side and is never sent to the browser.
// Configure GEMINI_API_KEY in the Vercel project's Environment Variables
// (Project → Settings → Environment Variables), and in .env for local `vercel dev`.

const GEMINI_MODEL = 'gemini-2.5-flash';

const SYSTEM_PROMPTS = {
    briefing: "You are a CISO advisor. Provide a high-level, 3-bullet point executive summary on the cybersecurity topic provided by the user. Focus on risks and mitigation strategies. Be professional, concise, and use formatting like **Bold** for emphasis.",
    phishing: "You are a security analyst training a user. Analyze the provided email text for phishing indicators (urgency, inconsistencies, suspicious requests, bad grammar). Provide a 'Risk Level' (Low, Medium, High) and 2-3 short reasons why. Keep it educational and concise."
};

const ALLOWED_ORIGINS = [
    'https://www.isc2chapter-cleveland.us',
    'https://isc2cle.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
];

export default async function handler(req, res) {
    // 1. CORS / Origin Verification
    const origin = req.headers.origin;
    if (origin && !ALLOWED_ORIGINS.includes(origin) && !origin.endsWith('.vercel.app')) {
        return res.status(403).json({ error: 'Unauthorized request origin.' });
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY configuration.' });
    }

    const { mode, userPrompt } = req.body || {};
    if (typeof userPrompt !== 'string' || !userPrompt.trim()) {
        return res.status(400).json({ error: 'userPrompt is required.' });
    }

    const systemPrompt = SYSTEM_PROMPTS[mode];
    if (!systemPrompt) {
        return res.status(400).json({ error: 'Invalid or missing API request mode.' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
    };

    try {
        const geminiRes = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!geminiRes.ok) {
            const errData = await geminiRes.json().catch(() => ({}));
            // Forward the upstream status so the client's 429/5xx backoff still works,
            // but only surface a sanitized message (never the key or raw internals).
            return res.status(geminiRes.status).json({
                error: errData?.error?.message || 'Gemini request failed.',
            });
        }

        const data = await geminiRes.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
        return res.status(200).json({ text });
    } catch (err) {
        return res.status(502).json({ error: 'Failed to reach the Gemini API.' });
    }
}
