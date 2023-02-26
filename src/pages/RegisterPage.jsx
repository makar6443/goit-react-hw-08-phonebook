import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authRegisterThunk } from 'redux/auth/auth.thunk';
import { FormLabel, Input, Button, Stack, Heading } from '@chakra-ui/react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authRegisterThunk(values));
  };
  return (
      <form onSubmit={handleSubmit}>
        <Heading mt='50px' textAlign='center'>Register</Heading>
        <Stack mt="30px" w="400px" mr="auto" ml="auto">
          <FormLabel>
            Name
            <Input
              minW='400px'
              pl="1.5rem"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Email
            <Input
              minW='400px'
              pl="1.5rem"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </FormLabel>
          <FormLabel>
            Password
            <Input
              minW='400px'
              pl="1.5rem"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </FormLabel>
        </Stack>
        <Button type='submit' ml='auto' mr='auto' display='flex' size="md" minW='100px' colorScheme="blue" mt={5}>Sign Up</Button>
      </form>
  );
};
export default RegisterPage;
