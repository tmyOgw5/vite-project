import React from 'react';
import { chakra, Container, Flex, Box, Link, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

const Header = () => {
  return (
    <chakra.header
      py={4}
      bgColor="transparent"
      position="fixed" // ヘッダーを上部に固定
      top={0} // 画面上部に固定
      left={0}
      right={0}
      width="100vw" // 幅を100%に設定
      zIndex="999" // 必要に応じてz-indexを設定
    >
      <Container maxW="100vw">
        <Flex justify="space-between" align="center">
          {/* ロゴ */}
          <Text fontSize="2xl" color="#222222">
            Tomoya Ogawa
          </Text>
          {/* ナビゲーションメニュー */}
          <Box>
            <ChakraLink as={ReactRouterLink} to="/" color="#222222" mr={4}>
              Home
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/project" color="#222222" mr={4}>
              Project
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/blog" color="#222222">
              Blog
            </ChakraLink>
          </Box>
        </Flex>
      </Container>
    </chakra.header>
  );
};

export default Header;
