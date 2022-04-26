import Vue from 'vue'
import store from 'common/store/store'
import App from '@/App.vue'

Vue.config.productionTip = false;
Vue.config.performance = true;

console.log("NODE ENV", process.env.NODE_ENV);

new Vue({
    render: h => h(App),
    store: store
}).$mount('#app');
