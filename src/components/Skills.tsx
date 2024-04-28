import { Box, Text } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const Skills = () => {
  return (
    <Box margin="20px">
      <Text color={'#562B7C'} fontSize="3xl" fontWeight="bold" mb="10px">
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
