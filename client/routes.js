import Layout from './layout/Layout';

// Pages
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';

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
  }
];