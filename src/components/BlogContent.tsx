import React from "react";
import { Card, CardBody, CardFooter, Button, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";

const blog = [
    {
        title: 'DFKIへの留学',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
    {
        title: 'ハッカソン、機械学習コンペ',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
    {
        title: 'ChattyLibの開発',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
    {
    title: 'おすすめの本',
    description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
    {
        title: 'MlOpsチームでのアルバイト',
        description: 'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.',
    },
];

const BlogContent = () => {
    return (
        <React.Fragment>
            <VStack spacing={4}>
            {blog.map((blog) => (
                <Card direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'>
                  <Stack>
                    <CardBody>
                      <Heading size='md'> {blog.title}</Heading>
            
                      <Text py='2'>
                        {blog.description}
                      </Text>
                    </CardBody>
            
                    <CardFooter>
                      <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
            ))}
            </VStack>
        </React.Fragment>
    );
    }

export default BlogContent;