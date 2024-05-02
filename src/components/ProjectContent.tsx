import React, { useState } from 'react';
import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  modalContent: string;
  link?: string;
}

const ProjectContent: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 選択したプロジェクトをセットし、モーダルを開く
  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        width={{ base: '100%', md: '100%', lg: '80%' }}
      >
        {projects.map((project) => (
          <Card key={project.id} boxShadow={'md'} _hover={{ shadow: 'lg' }}>
            <CardHeader>
              <Heading size="md">{project.title}</Heading>
            </CardHeader>
            <CardBody>
              <Image
                src={project.imageUrl}
                alt={project.title}
                borderRadius="lg"
                justifyContent="center"
                objectFit="cover"
              />
            </CardBody>

            <CardFooter>
              <Button onClick={() => handleViewDetails(project)}>View here</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      {/* ポップアップ（モーダル） */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedProject && (
              <>
                <Image src={selectedProject.imageUrl} alt={selectedProject.title} borderRadius="lg" />
                <Text marginTop={'1rem'}>{selectedProject.modalContent}</Text>
                {selectedProject.link && (
                  <Link href={selectedProject.link} isExternal color={'blue.400'}>
                    {selectedProject.link}
                  </Link>
                )}
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default ProjectContent;
