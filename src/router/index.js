import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddNote from '../views/AddNote.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddNote,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
