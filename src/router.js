import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import StarterHeader from "./layout/starter/StarterHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
<<<<<<< HEAD
=======
import Forums from "./views/Forums.vue";
>>>>>>> a0123d225b31eef6d46ad5856ef65fc0dc6920ac
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Projects from "./views/Projects.vue";
import ProjMates from "./views/ProjMates.vue";
import Forum from "./views/Forum.vue"

Vue.use(Router);

export default new Router({
<<<<<<< HEAD
    linkExactActiveClass: "active",
    routes: [{
            path: "/",
            name: "login",
            components: {
                header: StarterHeader,
                default: Login,
                footer: AppFooter
            }
        },

        {
            path: "/login",
            name: "login",
            components: {
                header: StarterHeader,
                default: Login,

            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: StarterHeader,
                default: Register,
=======
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/forums",
      name: "forums",
      components: {
        header: AppHeader,
        default: Forums,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/form",
      name: "form",
      components: {
        header: AppHeader,
        default: Form,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
>>>>>>> a0123d225b31eef6d46ad5856ef65fc0dc6920ac

            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                header: AppHeader,
                default: Profile,

            }
        },
        {
            path: "/projects",
            name: "projects",
            components: {
                header: AppHeader,
                default: Projects,

            }
        },
        {
            path: "/projmates",
            name: "projmates",
            components: {
                header: AppHeader,
                default: ProjMates,

            }
        },
        {
            path: "/forum",
            name: "forum",
            components: {
                header: AppHeader,
                default: Forum,

            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});