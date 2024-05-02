import { Box, Text } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const Skills = () => {
  return (
    <Box margin="20px">
      <Text
        bgGradient={'linear(to-t, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)'}
        bgClip="text"
        fontSize="3xl"
        fontWeight="bold"
        mb="10px"
      >
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
