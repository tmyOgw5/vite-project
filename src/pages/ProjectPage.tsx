import React, { CSSProperties } from 'react';
import { Flex, Box } from '@chakra-ui/react';

const ProjectPage = () => {
  const appStyle: CSSProperties = {
    backgroundColor: '#F8F8F4', // 好きな背景色を指定
    minHeight: '150vh', // 画面全体の高さを保証
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const boxStyle: CSSProperties = {
    backgroundColor: 'transparent',
    width: '90vw',
    height: '100vh',
    top: '80px',
    borderRadius: '20px',
    display: 'flex',
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle}>
          <h1>Project</h1>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default ProjectPage;
