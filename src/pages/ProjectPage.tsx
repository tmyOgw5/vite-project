import React, { CSSProperties } from 'react';
import ProjectContent from '../components/ProjectContent';
import { Flex, Box } from '@chakra-ui/react';
import { projects } from '../data/projects';

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
    justifyContent: 'center',
  };

  const projects_content = projects;

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle} boxSize={{ base: '70%', sm: '70%', md: '70%', lg: '50%' }}>
          <ProjectContent projects={projects_content} />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default ProjectPage;
