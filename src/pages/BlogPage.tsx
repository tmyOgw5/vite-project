import React, { CSSProperties } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import BlogContent from '../components/BlogContent';

const BlogPage = () => {
  const appStyle: CSSProperties = {
    backgroundColor: '#F8F8F4', // 好きな背景色を指定
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const boxStyle: CSSProperties = {
    backgroundColor: 'transparent',
    top: '80px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '90vw',
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle}>
          <BlogContent />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default BlogPage;
