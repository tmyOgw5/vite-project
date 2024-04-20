import React from 'react';
import { Box, Text} from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';


const WorkExperience = () => {
  return (
    <Box margin="20px">
      <Text bgGradient="linear(to-tl, #7928CA, #FF0080)" bgClip="text" fontSize="3xl" fontWeight="bold" mb="10px">
        Work Experience
      </Text>
      <UnorderedList fontSize="xl">
        <ListItem>NPO法人</ListItem>
        <ListItem>future</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default WorkExperience;
