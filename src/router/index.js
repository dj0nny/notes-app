import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddNote from '../views/AddNote.vue';
import EditNote from '../views/EditNote.vue';

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
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
