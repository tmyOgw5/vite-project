import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const iconStyle = {
  fontSize: '40px', // アイコンの大きさを変更
  color: '#222222', // アイコンの色を変更
};

const SocialIcons = () => {
  return (
    <Flex justifyContent="center" mt={2}>
      <Link href="https://www.instagram.com/" target="_blank" pr={2}>
        <FaInstagram style={iconStyle} />
      </Link>
      <Link href="https://github.com/tmyOgw5" target="_blank">
        <FaGithub style={iconStyle} />
      </Link>
    </Flex>
  );
};

export default SocialIcons;
