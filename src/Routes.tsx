import React from 'react';
import { RouteObject } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';

const routes: RouteObject[] = [
  {
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'project', element: <ProjectPage /> },
      { path: 'blog', element: <BlogPage /> },
    ],
  },
];

export default routes;
