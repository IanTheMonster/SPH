import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/pages/Home/TypeNav/";
import {reqCategoryList} from "@/api";
import store from "@/store";

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);

new Vue({
    render: h => h(App),
    router,
    store,
    mounted() {
        let a = reqCategoryList();
        console.log(a.then((res) => {
            console.log(res.data);
        }, (reject) => {
            console.log(reject);
        }));
    }
}).$mount('#app')
