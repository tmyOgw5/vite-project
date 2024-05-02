import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      textAlign="center"
      backgroundColor="gray.200"
      py="2"
    >
      <p>Footer</p>
    </Box>
  );
};

export default Footer;
