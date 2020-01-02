import Vue from 'vue'
import store from "../store";
import VueRouter from 'vue-router'
import Admin from "../layout/Admin";
import Index from "../views/Index";
import Login from "../views/Login";
import SignInSignOut from "../views/SignInSignOut";
import SignRecord from "../views/SignRecord"
import SignSetting from "../views/SignSetting"
import PersonalNetDisk from "../views/PersonalNetDisk";
import CompanyNetDisk from "../views/CompanyNetDisk";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Admin,
        children: [
            {
                path: '',
                name: 'index',
                component: Index,
            },
            {
                path: '/sign',
                name: 'sign',
                component: SignInSignOut,
            },
            {
                path: '/sign-record',
                name: 'sign-record',
                component: SignRecord,
            },
            {
                path: '/sign-setting',
                name: 'sign-setting',
                component: SignSetting,
            },
            {
                path: '/personal-net-disk',
                name: 'personal-net-disk',
                component: PersonalNetDisk,
            },
            {
                path: '/company-net-disk',
                name: 'company-net-disk',
                component: CompanyNetDisk,
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.auth || to.name === 'login') {
        next();
    } else if (from.name === 'login' && to.name === 'index') {
        next();
    } else {
        router.push({name: 'login'})
    }
});

export default router
