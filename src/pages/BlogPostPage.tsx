// BlogPostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import BlogPostContent from '../components/BlogPostContent';

const BlogPostPage: React.FC = () => {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };

  const boxStyle = {
    backgroundColor: 'transparent',
    top: '80px',
    borderRadius: '20px',
    display: 'flex',
  };
  const { id } = useParams<{ id: string }>();

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box
          position="absolute"
          style={boxStyle}
          boxSize={{ base: '100%', sm: '100%', md: '70%' }}
          height={{ base: '100vh', sm: '230vh', md: '200vh', lg: '160vh' }}
        >
          {id && <BlogPostContent id={id} />}
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default BlogPostPage;
