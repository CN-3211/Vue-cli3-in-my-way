// element配置
import Vue from 'vue';
import ELEMENT from 'element-ui';

Vue.use(ELEMENT);

Vue.prototype.$notyfy = ELEMENT.Notification;
Vue.prototype.$message = ELEMENT.Message;
// Vue.prototype.$loading = ELEMENT.loading.service;
Vue.prototype.$confirm = ELEMENT.MessageBox.confirm;
Vue.prototype.$alert = ELEMENT.MessageBox.alert;
