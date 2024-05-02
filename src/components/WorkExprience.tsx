import { Box, Text } from '@chakra-ui/react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

const works = [
  {
    work: 'アルバイト、NPO法人サイエンス・アクセシビリティネット',
    date: '2024.04-現在',
  },
  {
    work: 'アルバイト、株式会社フューチャー',
    date: '2024.04-現在',
  },
  {
    work: 'インターン、ドイツ人工知能研究センター',
    date: '2024.02-2024.03',
  },
  {
    work: 'インターン、株式会社いい生活',
    date: '2023.09-2023.09',
  },
  {
    work: 'サーバー管理者、知能メディア処理研究室',
    date: '2023.01-現在',
  },
];
const WorkExperience = () => {
  return (
    <Box margin="20px">
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb="10px"
        bgGradient={'linear(to-t, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)'}
        bgClip="text"
      >
        Work Experience
      </Text>
      <UnorderedList fontSize="xl">
        {works.map((work) => (
          <ListItem key={work.work} mb={5}>
            {work.work}
            <Text fontSize="lg" color="gray.600">
              {work.date}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default WorkExperience;
