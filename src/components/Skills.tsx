import React from 'react';
import { Box, Text, HStack, Flex } from '@chakra-ui/react';
import { FaPython, FaReact } from 'react-icons/fa'; // 必要なアイコンをインポート
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';
const iconStyle = {
  fontSize: '40px', // アイコンの大きさを変更
  color: '#ffffff', // アイコンの色を変更
  display: 'flex',
};

const Skills = () => {
  return (
    <Box margin="20px">
      <Text bgGradient="linear(to-tl, #7928CA, #FF0080)" bgClip="text" fontSize="3xl" fontWeight="bold" mb="10px">
        Skills
      </Text>
      <UnorderedList fontSize="xl">
        <ListItem>Python(Flask,FastAPI), React, JavaScript, TypeScript, C, C++, Java, Git, Docker</ListItem>
        <ListItem>TOEIC 860点</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Skills;
