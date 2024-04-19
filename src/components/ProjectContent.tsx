import React, { CSSProperties } from 'react';
import { 
  Flex, 
  Box, 
  Card,CardHeader, 
  CardBody, 
  CardFooter,
  Heading, 
  Text,
  Button, 
  SimpleGrid,
  Image 
} from '@chakra-ui/react';



const project = [
    {
        title: 'Project 1',
        description: 'This is a project 1.',
    },
    {
    title: 'Project 2',
    description: 'This is a project 2.',
    },
    {
    title: 'Project 3',
    description: 'This is a project 3.',
    },
    {
    title: 'Project 4',
    description: 'This is a project 4.',
    }
];

const ProjectContent = () => {

  return (
    <React.Fragment>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
          {project.map((project) => (
            <Card>
              <CardHeader>
                <Heading size='md'> {project.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          ))}
          </SimpleGrid>
    </React.Fragment>
    );

};

export default ProjectContent;
