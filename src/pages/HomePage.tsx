import React, { CSSProperties } from 'react';
import HeaderContent from '../components/HeaderContent';
import { Flex, Box } from '@chakra-ui/react';

const HomePage = () => {
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
    width: '90vw',
    height: '100%',
    top: '80px',
    borderRadius: '20px',
    display: 'flex',
    margin: 'auto',
  };

  return (
    <React.Fragment>
      <Flex style={appStyle}>
        <Box position="absolute" style={boxStyle}>
          <HeaderContent />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default HomePage;
