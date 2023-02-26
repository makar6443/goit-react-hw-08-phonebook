import Form from 'components/Form';
import ContactsList from 'components/ContactsList';

import { Tabs, TabList, TabPanels, Tab, TabPanel, Container } from '@chakra-ui/react';

const ContactsPage = () => {
  return (
    <Container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      maxW="md"
      mr="auto"
      ml="auto"
      p={3}
    >
      <Tabs>
        <TabList>
          <Tab p={3}
            size="md"
            mr={1}
            borderRadius={'12px'}
            _selected={{ color: 'blue.500'}}
            _hover={{ color: 'blue.500' }}
            fontSize='md'
            fontWeight='500'>
            Add Contact
          </Tab>
          <Tab p={3}
            size="md"
            borderRadius={'12px'}
            _selected={{ color: 'blue.500'}}
            _hover={{ color: 'blue.500' }}
            fontSize='md'
            fontWeight='500'>
            All Contacts
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Form />
          </TabPanel>
          <TabPanel>
            <ContactsList />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default ContactsPage;
