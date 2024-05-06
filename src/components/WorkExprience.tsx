import { Box, Text } from '@chakra-ui/react';
import {
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const works = [
  {
    work: 'アルバイト、NPO法人サイエンス・アクセシビリティネット',
    date: '2024.04-現在',
    description:
      '視覚障害者支援のために音声付き電子図書を提供するシステムの開発をしています。現在は深層学習モデルを用いてPDFのレイアウト解析や、システムの監視を行っています。',
  },
  {
    work: 'アルバイト、株式会社フューチャー',
    date: '2024.04-現在',
    description: 'MLOpsのチームで業務を行っています。',
  },
  {
    work: 'インターン、ドイツ人工知能研究センター',
    date: '2024.02-2024.03',
    description:
      'ドイツで行った研究では、精度評価実験のためにDockerで環境を構築し、深層学習のコードをPythonのPyTorchを用いて実装する部分を担当しました。',
  },
  {
    work: 'インターン、株式会社いい生活',
    date: '2023.09-2023.09',
    description:
      '5日間のサマーインターンでReact、TypeScript、いい生活の物件情報のAPIを用いてアプリを作成しました。要件定義を行い、Figmaで画面設計をし、それをもとにGitlabでissueを作成し、4人チームでチケット駆動開発を行いました。',
  },
  {
    work: 'サーバー管理者、知能メディア処理研究室',
    date: '2023.01-現在',
    description:
      '研究室のGPUサーバーの管理、研究室のネットワークへのデバイスの登録などを行っています。LinuxやDockerの知識が身につきました。',
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
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {work.work}
                      <Text fontSize="md" color="gray.600">
                        {work.date}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={'sm'}>
                  {work.description}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default WorkExperience;
