import icon1 from '../assets/images/icon1.jpg';
import icon2 from '../assets/images/icon2.jpg';
import icon3 from '../assets/images/icon3.jpg';
import icon4 from '../assets/images/icon4.jpg';
import icon5 from '../assets/images/icon5.jpg';
export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  modalContent: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ドイツ人工知能研究センターでの医療AIの研究',
    imageUrl: icon1,
    modalContent:
      'DFKI(ドイツ人工知能研究センター)にResearch Internshipとして留学し、医療AIの研究を医学部と情報系の学生からなるグループで行いました。具体的には、医療画像における説明可能なAIの研究を行いました。DFKIでは、この分野を研究している現地の研究者とディスカッションすることで、説明可能なAIについての理解を深めました。',
    link: 'https://www.omu.ac.jp/info/news/entry-10852.html',
  },
  {
    id: 2,
    title: '造血幹細胞移植後合併症の予測モデルの研究',
    imageUrl: icon2,
    modalContent:
      '研究室では、白血病の治癒が目指せる造血幹細胞移植という手術後に起こる合併症による死亡を予測する機械学習モデルの研究をしています。',
  },
  {
    id: 3,
    title: 'React, TypeScriptを用いたチーム開発',
    imageUrl: icon3,
    modalContent:
      '株式会社いい生活の5日間のサマーインターンに参加し、React、TypeScript、いい生活の物件情報のAPIを用いてアプリを作成しました。その際、チームに分かれてスクラム開発を行いました。本インターンでは要件定義をし、Figmaで画面設計をするといった工程も経験しました。実装ではGitLabを用いてチケット駆動開発を行い、ソフトウェア開発の流れについて理解することができました。チームで協力して1つのソフトウェアを作る難しさと、要件通りにソフトウェアが動いた時の嬉しさの両方を学びました。',
    link: 'https://note.e-seikatsu.info/n/nea225701a76c',
  },
  {
    id: 4,
    title: 'ハッカソン',
    imageUrl: icon4,
    modalContent:
      'ChatGPTのAPIを用いてアニメーション(html,css,javascript)を生成するアプリをNext.js、PythonのFastAPIを用いて開発しました。研究室のメンバー3人で開発を行い、私はFastAPIでアニメーションを保存する機能の開発を行いました。ハッカソンに参加したことで、実際に社会で使われるソフトウェアを作るための技術力が不足していることがわかりました。そのため、機械学習に加えて、課題を解決する手段としてフロントエンド、バックエンドの知識をもっと習得したいと思うきっかけになりました。',
  },
  {
    id: 5,
    title: 'SIGNATE student cup 2023',
    imageUrl: icon5,
    modalContent:
      'SIGNATE student cup 2023に研究室のメンバーと参加し、チームで予測モデルを作成しました。研究では1人でモデルの作成を行っているので、チームでモデルを構築する難しさを学ぶことができました。コミュニケーションの重要性に加え、タスクを適切に割り振ってチームを引っ張っていくリーダシップの必要性を痛感しました。',
    link: 'https://signate.jp/competitions/1050',
  },
];
