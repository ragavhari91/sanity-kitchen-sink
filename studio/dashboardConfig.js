export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601a3fcd4239f194fad66133',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5wd8t742',
                  apiId: 'da8ad725-4324-43bc-91b6-62397ed7d797'
                },
                {
                  buildHookId: '601a3fcdce9ffbab270a52fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hmkpncwx',
                  apiId: '072e6536-bf92-40ec-8824-fbf4c510130f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ragavhari91/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hmkpncwx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
