import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import StarterHeader from "./layout/starter/StarterHeader";
import AppFooter from "./layout/AppFooter";
import Forums from "./views/Forums.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Projects from "./views/Projects.vue";
import ProjMates from "./views/ProjMates.vue";
import ProjMatesTemp from "./views/ProjMatesTemp.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
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
            path: "/dashboard",
            name: "dashboard",
            components: {
                header: StarterHeader,
                default: Dashboard,

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
            path: "/projmatestemp",
            name: "projmatestmep",
            components: {
                header: AppHeader,
                default: ProjMatesTemp,

            }
        },
        {
            path: "/forum",
            name: "forum",
            components: {
                header: AppHeader,
                default: Forums,

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