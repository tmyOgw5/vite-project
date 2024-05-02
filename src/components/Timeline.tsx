import { Box, Center, Flex, Text, VStack, Divider, useMediaQuery, Link } from '@chakra-ui/react';
import { FaSchool, FaGraduationCap, FaGlobeEurope } from 'react-icons/fa';

interface TimelineItemProps {
  title: string;
  date: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, date, icon, children }) => {
  const [isWideScreen] = useMediaQuery('(min-width: 900px)');
  return (
    <Box width="100%">
      <Flex align="center" w="100%">
        <Box>
          <Center height="90px">
            <Divider orientation="vertical" borderColor="#222222" />
          </Center>
          <Center
            w="40px"
            h="40px"
            bgGradient="linear(to-tl, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)"
            rounded="full"
            color="#F8F8F4"
          >
            {icon}
          </Center>
          <Center height="90px">
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
        <Text
          bgGradient={'linear(to-t, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)'}
          bgClip="text"
          fontSize="3xl"
          fontWeight="bold"
          mb="10px"
        >
          TimeLine
        </Text>
      </Box>
      <VStack spacing={0}>
        <TimelineItem title="大阪公立大学大学院 情報学研究科" date="2024 - 2026" icon={<FaGraduationCap />}>
          学部時代の医療AIモデル開発の研究に加え、ドイツで行った研究にも継続して取り組んでいます。
        </TimelineItem>
        <TimelineItem
          title="Research InternshipとしてDFKI(ドイツ人工知能研究センター)に留学"
          date="2024.2 - 2024.3"
          icon={<FaGlobeEurope />}
        >
          3週間留学し、医療分野における説明可能なAIの研究をグループで行いました。
        </TimelineItem>
        <TimelineItem
          title="大阪府立大学工学域電気電子系学類情報工学課程"
          date="2020 - 2024"
          icon={<FaGraduationCap />}
        >
          所属：
          <Link href="https://imlab.jp/" color="teal.500">
            知能メディア処理研究室
          </Link>
          <br />
          患者の状態を動的に予測する医療AIモデルを開発する研究をしていました。
        </TimelineItem>
        <TimelineItem title="兵庫県立星陵高等学校" date="2017 - 2020" icon={<FaSchool />}>
          バレーボール部に所属し、近畿大会に出場しました。
        </TimelineItem>
      </VStack>
    </>
  );
};

export default Timeline;
