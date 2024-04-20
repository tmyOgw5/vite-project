import React, { CSSProperties } from 'react';
import ProjectContent from '../components/ProjectContent'
import { Flex, Box } from '@chakra-ui/react';

const ProjectPage = () => {
  const appStyle: CSSProperties = {
    backgroundColor: '#F8F8F4', // 好きな背景色を指定
    overflowY: 'auto', // overflow-yの代わりにoverflowYを使用
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const boxStyle: CSSProperties = {
    backgroundColor: 'transparent',
    width: '70vw',
    height: '100vh',
    top: '80px',
    borderRadius: '20px',
    display: 'flex',
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle}>
          <ProjectContent />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default ProjectPage;
