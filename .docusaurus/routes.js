
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','d4b'),
  exact: true,
},
{
  path: '/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/blog/2020/04/14/blog-plugin','9d6'),
  exact: true,
},
{
  path: '/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/blog/2020/04/14/large-blog-post','73c'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','a6c'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','c41'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','9a3'),
  exact: true,
},
{
  path: '/blog/tags/blog',
  component: ComponentCreator('/blog/tags/blog','36f'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','cba'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','940'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','df4'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','9d9'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','044'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','4df'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','c02'),
  exact: true,
},
{
  path: '/docs/gettingStarted',
  component: ComponentCreator('/docs/gettingStarted','ea2'),
  exact: true,
},
{
  path: '/docs/glossary/glossary',
  component: ComponentCreator('/docs/glossary/glossary','6cd'),
  exact: true,
},
{
  path: '/docs/health/fitness/workoutStructure',
  component: ComponentCreator('/docs/health/fitness/workoutStructure','138'),
  exact: true,
},
{
  path: '/docs/health/healthHome',
  component: ComponentCreator('/docs/health/healthHome','c5a'),
  exact: true,
},
{
  path: '/docs/templates/doc2',
  component: ComponentCreator('/docs/templates/doc2','6fb'),
  exact: true,
},
{
  path: '/docs/templates/mdx',
  component: ComponentCreator('/docs/templates/mdx','4fc'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
