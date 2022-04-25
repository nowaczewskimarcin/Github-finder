const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/FinderV3', props: false, name: 'FinderV3', component: () => import('pages/FinderV3.vue') },
      { path: '/user/:login/details', props: true, name: 'userDetails', component: () => import('pages/user/Details.vue') },
      { path: '/user/:login/repos/:repoName', props: true, name: 'repoDetails', component: () => import('pages/user/RepoDetails.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/test', component: () => import('pages/test.vue') },
    ]
  },

  // {
  //   path: '/login', // here it is, route /user/profile
  //   component: Login // we reference /src/pages/Profile.vue imported above
  // },
  // {
  //   path: '/repositories', // here it is, route /user/profile
  //   component: Repositories // we reference /src/pages/Profile.vue imported above
  // },
  // {
  //   path: '/searchuser', // here it is, route /user/profile
  //   component: SearchUser // we reference /src/pages/Profile.vue imported above
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes