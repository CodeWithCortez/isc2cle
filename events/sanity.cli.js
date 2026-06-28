import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '83et5su3',
    dataset: 'production'
  },
  deployment: {
    appId: 'w06zwf5t24ip17o2dx7dy973',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
