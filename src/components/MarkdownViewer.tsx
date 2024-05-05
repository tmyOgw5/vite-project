import { Card, CardBody, CardHeader, ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Blog } from './BlogPostContent';
import { extendTheme } from '@chakra-ui/react';

interface MarkdownViewerProps {
  blog: Blog;
}

const theme = extendTheme({
  styles: {
    global: {
      // Markdownの要素に適用するスタイル
      h1: {
        fontSize: '2xl',
        fontWeight: 'bold',
        marginBottom: '1rem',
      },
      h2: {
        fontSize: 'xl',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },
      h3: {
        fontSize: 'lg',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      },
      p: {
        marginBottom: '1rem',
      },
      ul: {
        paddingLeft: '1.5rem',
        marginBottom: '1rem',
      },
      li: {
        marginBottom: '0.25rem',
      },
      blockquote: {
        borderLeft: '4px solid #dfe2e5',
        paddingLeft: '1rem',
        marginLeft: '0',
        marginBottom: '1rem',
      },
      pre: {
        backgroundColor: '#f6f8fa',
        borderRadius: '0.375rem',
        padding: '1rem',
        marginBottom: '1rem',
      },
      code: {
        fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: '0.875rem',
        padding: '0.125rem 0.25rem',
        backgroundColor: '#f6f8fa',
        borderRadius: '0.25rem',
      },
      a: {
        color: '#0366d6',
        textDecoration: 'none',
        fontWeight: 'bold',
      },
      table: {
        width: '100%',
        marginBottom: '1rem',
        borderCollapse: 'collapse',
      },
      th: {
        padding: '0.5rem',
        borderBottom: '1px solid #dfe2e5',
        textAlign: 'left',
      },
      td: {
        padding: '0.5rem',
        borderBottom: '1px solid #dfe2e5',
      },
    },
  },
});

const MarkdownViewer = ({ blog }: MarkdownViewerProps) => {
  const [content, setContent] = useState<string>(''); // コンテンツを保持するstate

  useEffect(() => {
    // 外部のMarkdownファイルからコンテンツを取得する非同期関数
    const fetchMarkdownContent = async () => {
      try {
        const formattedFileName = `${blog.date}-${blog.id}`;
        // マークダウンファイルのパス
        const markdownFilePath = `../../articles/${formattedFileName}.md`;

        // ローカルのMarkdownファイルを取得
        const response = await fetch(markdownFilePath);
        const text = await response.text();
        setContent(text); // 取得したコンテンツをstateに設定
      } catch (error) {
        console.error('Error fetching markdown content:', error);
      }
    };

    fetchMarkdownContent(); // 非同期関数を実行
  }, [blog]); // blogが変更されるたびに再実行
  console.log(content);

  return (
    <Card
      backgroundColor="#f5f8f4"
      padding="5px"
      borderRadius="5px"
      width="100%"
      marginBottom={'50px'}
      boxShadow={'none'}
    >
      <CardHeader fontSize="2xl" fontWeight={'bold'} paddingX={'10px'} paddingBottom={'none'} paddingInlineEnd={'none'}>
        {blog.title}
      </CardHeader>
      <CardHeader fontSize="sm" paddingX={'10px'} paddingY={'none'} paddingInline={'none'}>
        {blog.date}
      </CardHeader>
      <CardBody paddingX="10px">
        <ChakraProvider theme={theme}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </ChakraProvider>
      </CardBody>
    </Card>
  );
};

export default MarkdownViewer;
