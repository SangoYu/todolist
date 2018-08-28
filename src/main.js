import Vue from 'vue'
import {Input, Tabs, TabPane, Row, Card, Checkbox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false
Vue.use(VueCookies);

Vue.use(Input);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Row);
Vue.use(Card);
Vue.use(Checkbox);

new Vue({
  render: h => h(App)
}).$mount('#app')
