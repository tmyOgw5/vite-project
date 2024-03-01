import { Box, Flex, Image, Text, useMediaQuery, Divider } from '@chakra-ui/react';

import SocialIcons from './SocialIcons';
import Timeline from './Timeline';
import Skills from './Skills';
import icon from '../assets/images/icon.jpg';

const HeaderContent = () => {
  // メディアクエリの定義
  const [isWideScreen] = useMediaQuery('(min-width: 900px)');
  const img = icon;

  return (
    <Box m="auto" mt="20px">
      {isWideScreen ? (
        <Flex>
          <Box>
            <Image borderRadius="full" boxSize="200px" src={img} />
            <Text textAlign="center" fontSize="3xl" fontWeight="bold" margin="20px">
              小川 智也
            </Text>
            <SocialIcons />
          </Box>
          <Box marginX="50px" display="flex" flexDirection="column" justifyContent="center">
            <Text fontSize="2xl" fontWeight="bold">
              大阪公立大学 工学部情報工学科 4年
            </Text>
            <Text fontSize="xl">趣味: バレーボール，フットサル </Text>
          </Box>
        </Flex>
      ) : (
        <Flex flexDirection="column">
          <Image borderRadius="full" boxSize="200px" mx="auto" src={img} />
          <Text textAlign="center" fontSize="3xl" fontWeight="bold" margin="20px">
            小川 智也
          </Text>
          <SocialIcons />
          <Box marginX="50px" marginY="20px">
            <Text fontSize="2xl" fontWeight="bold">
              大阪公立大学
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              工学部情報工学科 4年
            </Text>
            <Text fontSize="xl">趣味: バレーボール，フットサル </Text>
          </Box>
        </Flex>
      )}
      <Skills />
      <Box position="relative" padding="5">
        <Divider borderColor="#222222" />
      </Box>
      <Timeline />
      <Box padding="5" marginY="40px">
        <Divider borderColor="#222222" />
      </Box>
    </Box>
  );
};

export default HeaderContent;
