const c1 = () => import(/* webpackChunkName: "page--src--templates--ghost-post-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/templates/GhostPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ghost--signin-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/pages/ghost/signin.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--ghost--posts-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/pages/ghost/posts.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--ghost-tag-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/templates/GhostTag.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--ghost--index-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/pages/ghost/index.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/pages/about.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/ars_systems_06/Desktop/ghost_dev/gridsome-ghost/src/pages/Index.vue")

export default [
  {
    path: "/:year/:month/:day/:slug/",
    component: c1
  },
  {
    path: "/ghost/signin/",
    component: c2
  },
  {
    path: "/ghost/posts/",
    component: c3
  },
  {
    path: "/tag/:slug/",
    component: c4
  },
  {
    path: "/ghost/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
