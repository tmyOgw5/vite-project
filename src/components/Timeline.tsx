import { Box, Center, Flex, Text, VStack, Divider, useMediaQuery } from '@chakra-ui/react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItemProps {
  title: string;
  date: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, icon, children }) => {
  const [isWideScreen] = useMediaQuery('(min-width: 900px)');
  return (
    <Box width="90%">
      <Flex align="center" w="100%">
        <Box>
          <Center height="50px">
            <Divider orientation="vertical" borderColor="#222222" />
          </Center>
          <Center w="40px" h="40px" bgGradient="linear(to-tl, #7928CA, #FF0080)" rounded="full" color="#F8F8F4">
            {icon}
          </Center>
          <Center height="70px">
            <Divider orientation="vertical" borderColor="#222222" />
          </Center>
        </Box>
        <Box flex="1" pl={4} bg={'transparent'} width="50%">
          <Text fontSize={isWideScreen ? '2xl' : 'xl'} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={isWideScreen ? 'xl' : 'lg'} color="gray.600">
            {date}
          </Text>
          <Text fontSize={isWideScreen ? 'xl' : 'lg'}>{children}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Timeline: React.FC = () => {
  return (
    <>
      <Box marginX="20px" marginBottom="40px">
        <Text bgGradient="linear(to-tl, #7928CA, #FF0080)" bgClip="text" fontSize="3xl" fontWeight="bold" mb="10px">
          TimeLine
        </Text>
      </Box>
      <VStack spacing={0}>
        <TimelineItem title="大阪公立大学大学院 情報学研究科" date="2024 - " icon={<FaBriefcase />}>
          進学予定
        </TimelineItem>

        <TimelineItem title="大阪公立大学工学部情報工学科" date="2020 - 2024" icon={<FaGraduationCap />}>
          知能メディア処理研究室に所属
          <br />
          患者の状態を動的に予測する医療AIモデルの開発を行っています
        </TimelineItem>
        <TimelineItem title="兵庫県立星陵高等学校" date="2017 - 2020" icon={<FaBriefcase />}>
          バレーボール部に所属し，近畿大会に出場しました
        </TimelineItem>
      </VStack>
    </>
  );
};

export default Timeline;
