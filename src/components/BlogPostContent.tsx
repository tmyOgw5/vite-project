import React from 'react';
import { blogs } from '../data/blogs';
import MarkdownViewer from './MarkdownViewer';

export interface Blog {
  id: number;
  title: string;
  date: string;
}
const BlogPostContent = (props: { id: string }) => {
  const blog = blogs.find((blog) => blog.id === parseInt(props.id));

  if (!blog) {
    return <div>ブログが見つかりません。</div>;
  }

  return <MarkdownViewer blog={blog} />;
};

export default BlogPostContent;
