export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e2dd7d0666cd7e3f369f064',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-154rzvgn',
                  apiId: '4d060cfb-53a7-4c7a-ab18-e0f0717cb57c'
                },
                {
                  buildHookId: '5e2dd7d0e3ba01813d3b1eaf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n8fzy7zw',
                  apiId: '8552b298-b481-465d-bdb4-b0baefffbe7e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fadhlaouir/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n8fzy7zw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
