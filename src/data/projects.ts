export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  modalContent: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '医療XAIプロジェクトでドイツ人工知能研究センターへの留学',
    description: 'This is a project 1.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 1.',
  },
  {
    id: 2,
    title: '造血幹細胞移植後合併症の予測モデルの開発',
    description: 'This is a project 2.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 2.',
  },
  {
    id: 3,
    title: 'サマーインターンでのReact, TypeScriptを用いたチーム開発',
    description: 'This is a project 3.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 3.',
  },
  {
    id: 4,
    title: 'ハッカソン',
    description: 'This is a project 4.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 4.',
  },
  {
    id: 5,
    title: '機械学習コンペ',
    description: 'This is a project 5.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 5.',
  },
  {
    id: 6,
    title: 'ChattyLibの開発',
    description: 'This is a project 6.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 6.',
  },
  {
    id: 7,
    title: 'MlOpsチームでのアルバイト',
    description: 'This is a project 8.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 8.',
  },
  {
    id: 8,
    title: '研究室のサーバー管理',
    description: 'This is a project 9.',
    imageUrl: 'https://source.unsplash.com/random/800x600',
    modalContent: 'This is a modal content 9.',
  },
];
