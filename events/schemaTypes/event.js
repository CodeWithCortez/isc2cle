export default {                                                                                                 
      name: 'event',                                                                                                 
      title: 'Event',                                                                                                
      type: 'document',                                                                                              
      fields: [                                                                                                      
        {                                                                                                            
          name: 'title',                                                                                             
          title: 'Title',                                                                                            
          type: 'string',                                                                                            
          validation: Rule => Rule.required()                                                                        
        },                                                                                                           
        {                                                                                                            
          name: 'eventType',                                                                                         
          title: 'Event Type',                                                                                       
          type: 'string',                                                                                            
          options: {                                                                                                 
            list: [                                                                                                  
              {title: 'Meetup', value: 'meetup'},                                                                    
              {title: 'Study Group', value: 'study-group'},                                                          
              {title: 'Community Service', value: 'community'},                                                      
              {title: 'Holiday Buffer', value: 'holiday'}                                                            
            ]                                                                                                        
          },                                                                                                         
          validation: Rule => Rule.required()                                                                        
        },                                                                                                           
        {                                                                                                            
          name: 'startDate',                                                                                         
          title: 'Start Date',                                                                                       
          type: 'date',                                                                                              
          validation: Rule => Rule.required()                                                                        
        },                                                                                                           
        {                                                                                                            
          name: 'endDate',                                                                                           
          title: 'End Date',                                                                                         
          type: 'date'                                                                                               
        },                                                                                                           
        {                                                                                                            
          name: 'startTime',                                                                                         
          title: 'Start Time',                                                                                       
          type: 'string',                                                                                            
          placeholder: 'e.g. 5:30 PM'                                                                                
        },                                                                                                           
        {                                                                                                            
          name: 'endTime',                                                                                           
          title: 'End Time',                                                                                         
          type: 'string',                                                                                            
          placeholder: 'e.g. 8:00 PM'                                                                                
        },                                                                                                           
        {                                                                                                            
          name: 'location',                                                                                          
          title: 'Location',                                                                                         
          type: 'string',                                                                                            
          placeholder: 'e.g. TrustedSec, Fairlawn, OH'                                                               
        },                                                                                                           
        {                                                                                                            
          name: 'speakerName',                                                                                       
          title: 'Speaker Name',                                                                                     
          type: 'string'                                                                                             
        },                                                                                                           
        {                                                                                                            
          name: 'speakerLinkedIn',                                                                                   
          title: 'Speaker LinkedIn URL',                                                                             
          type: 'url'                                                                                                
        },                                                                                                           
        {                                                                                                            
          name: 'topic',                                                                                             
          title: 'Topic',                                                                                            
          type: 'string',                                                                                            
          placeholder: 'e.g. "State of the Threat"'                                                                  
        },                                                                                                           
        {                                                                                                            
          name: 'description',                                                                                       
          title: 'Description',                                                                                      
          type: 'text'                                                                                               
        },                                                                                                           
        {                                                                                                            
          name: 'link',                                                                                              
          title: 'RSVP / Tickets Link',                                                                              
          type: 'url'                                                                                                
        },                                                                                                           
        {                                                                                                            
          name: 'image',                                                                                             
          title: 'Event Image / Sponsor Logo',                                                                       
          type: 'image',                                                                                             
          options: {                                                                                                 
            hotspot: true                                                                                            
          }                                                                                                          
        }                                                                                                            
      ]                                                                                                              
    }