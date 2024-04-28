import { Container, Flex, Box, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
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
          <ChakraLink as={ReactRouterLink} to="/" color="#222222" mr={4} fontWeight={'normal'}>
            <Text fontSize="2xl" color="#222222">
              Tomoya Ogawa
            </Text>
          </ChakraLink>
          {/* ナビゲーションメニュー */}
          <Flex>
            <ChakraLink as={ReactRouterLink} to="/" color="#222222" mr={4} fontWeight={'normal'}>
              <Text>Home</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/project" color="#222222" mr={4} fontWeight={'normal'}>
              <Text>Project</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/blog" color="#222222" mr={4} fontWeight={'normal'}>
              <Text>Blog</Text>
            </ChakraLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
