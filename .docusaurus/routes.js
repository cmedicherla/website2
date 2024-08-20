import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website2/build/blog',
    component: ComponentCreator('/website2/build/blog', 'f77'),
    exact: true
  },
  {
    path: '/website2/build/blog/archive',
    component: ComponentCreator('/website2/build/blog/archive', '145'),
    exact: true
  },
  {
    path: '/website2/build/blog/authors',
    component: ComponentCreator('/website2/build/blog/authors', 'ee5'),
    exact: true
  },
  {
    path: '/website2/build/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/website2/build/blog/authors/all-sebastien-lorber-articles', '261'),
    exact: true
  },
  {
    path: '/website2/build/blog/authors/yangshun',
    component: ComponentCreator('/website2/build/blog/authors/yangshun', 'e61'),
    exact: true
  },
  {
    path: '/website2/build/blog/first-blog-post',
    component: ComponentCreator('/website2/build/blog/first-blog-post', 'bd9'),
    exact: true
  },
  {
    path: '/website2/build/blog/long-blog-post',
    component: ComponentCreator('/website2/build/blog/long-blog-post', 'bcb'),
    exact: true
  },
  {
    path: '/website2/build/blog/mdx-blog-post',
    component: ComponentCreator('/website2/build/blog/mdx-blog-post', 'c33'),
    exact: true
  },
  {
    path: '/website2/build/blog/tags',
    component: ComponentCreator('/website2/build/blog/tags', '1ef'),
    exact: true
  },
  {
    path: '/website2/build/blog/tags/docusaurus',
    component: ComponentCreator('/website2/build/blog/tags/docusaurus', '3f7'),
    exact: true
  },
  {
    path: '/website2/build/blog/tags/facebook',
    component: ComponentCreator('/website2/build/blog/tags/facebook', '55f'),
    exact: true
  },
  {
    path: '/website2/build/blog/tags/hello',
    component: ComponentCreator('/website2/build/blog/tags/hello', '470'),
    exact: true
  },
  {
    path: '/website2/build/blog/tags/hola',
    component: ComponentCreator('/website2/build/blog/tags/hola', '92a'),
    exact: true
  },
  {
    path: '/website2/build/blog/welcome',
    component: ComponentCreator('/website2/build/blog/welcome', '2eb'),
    exact: true
  },
  {
    path: '/website2/build/markdown-page',
    component: ComponentCreator('/website2/build/markdown-page', '5ca'),
    exact: true
  },
  {
    path: '/website2/build/docs',
    component: ComponentCreator('/website2/build/docs', '16e'),
    routes: [
      {
        path: '/website2/build/docs',
        component: ComponentCreator('/website2/build/docs', '312'),
        routes: [
          {
            path: '/website2/build/docs',
            component: ComponentCreator('/website2/build/docs', '2b9'),
            routes: [
              {
                path: '/website2/build/docs/category/tutorial---basics',
                component: ComponentCreator('/website2/build/docs/category/tutorial---basics', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/category/tutorial---extras',
                component: ComponentCreator('/website2/build/docs/category/tutorial---extras', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/intro',
                component: ComponentCreator('/website2/build/docs/intro', '2cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/congratulations', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/create-a-blog-post', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/create-a-document', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/create-a-page', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/deploy-your-site', '788'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/website2/build/docs/tutorial-basics/markdown-features', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/website2/build/docs/tutorial-extras/manage-docs-versions', '375'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website2/build/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/website2/build/docs/tutorial-extras/translate-your-site', '7e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/website2/build/',
    component: ComponentCreator('/website2/build/', '056'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
