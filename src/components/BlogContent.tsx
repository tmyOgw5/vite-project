import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, Stack, Heading, Text, Card, CardBody } from '@chakra-ui/react';
import { blogs } from '../data/blogs';

const BlogContent = () => {
  return (
    <React.Fragment>
      <VStack spacing={4} align="stretch">
        {blogs
          .slice()
          .reverse()
          .map((blogPost, index) => (
            <Link key={index} to={`/blog/${blogPost.id}`}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                boxSize={{ base: '100%', sm: '100%' }}
                boxShadow={'md'}
                _hover={{ shadow: 'lg' }}
                minWidth={{ base: '100vw', sm: '90vw', md: '70vw' }}
              >
                <Stack>
                  <CardBody>
                    <Heading size="md">{blogPost.title}</Heading>
                    <Text py="2">{blogPost.date}</Text>
                  </CardBody>
                </Stack>
              </Card>
            </Link>
          ))}
      </VStack>
    </React.Fragment>
  );
};

export default BlogContent;
