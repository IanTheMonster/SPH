import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
Vue.use(VueRouter);
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true,
            }
        },
        {
            path:'/search',
            component:Search,
            meta: {
                show: true,
            },
            name:'search',
        },
        {
            path:'/register',
            component:Register,
            meta:{
                show:false,
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                show:false,
            }
        },
        {
            path:'*',
            redirect:'/home',
            meta:{
                show:true,
            }
        }
    ]
})//需要对外暴露默认路由