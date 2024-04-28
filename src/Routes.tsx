import { RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

const routes: RouteObject[] = [
  {
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'project', element: <ProjectPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogPostPage /> },
    ],
  },
];

export default routes;
