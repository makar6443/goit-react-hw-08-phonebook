import {
  Card,
  // CardHeader,
  CardBody,
  // Heading,
  Box,
  Text,CardFooter,Button
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';

const HomePage = () => {
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken);
  return (
    <Card
      textAlign='center'
      mt='80px'
      minW='300px'
      maxW='650px'
      ml='auto' mr='auto'
      alignItems='center'
      border={`1px solid`}
      borderColor={'grey.100'}
      _hover={{ borderColor: 'blue.400' }}
    >
      <CardBody>
        <Box>
          <Text pt="2" fontSize="22" fontWeight='500' >
            Welcome to Phonebook! Register and use for free!
          </Text>
        </Box>
      </CardBody>
      <CardFooter>
      <Button colorScheme='blue' onClick={()=>!token ? navigate('/login') : navigate('/contacts')} >
        Continue
      </Button>
  </CardFooter>
    </Card>
  );
};

export default HomePage;
