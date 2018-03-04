import Layout from './layout/Layout';

// Pages
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Todos from './pages/todos/Todos';

const commonOpts = {
  layout: Layout
};

export default [
  {
    ...commonOpts,
    component: Home,
    path: '/',
    exact: true,
  },
  {
    ...commonOpts,
    component: Posts,
    path: '/posts'
  },
  {
    ...commonOpts,
    component: Todos,
    path: '/todos'
  },
];