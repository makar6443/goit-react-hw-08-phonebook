import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from 'constants/constants';
import { addContactsThunk } from 'redux/contacts.thunk';
import { selectStatus } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

import { FormLabel, Input, Button, Stack } from '@chakra-ui/react';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContactsThunk({ name, number }));
    setName('');
    setNumber('');
  };

  if (status === STATUS.idle || status === STATUS.success) {
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack minW='300px'  mr="auto" ml="auto">
          <FormLabel mr='0px'>
            Name
            <Input
            minW='300px'
              pl="1.5rem"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only  letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            Number
            <Input
            minW='300px'
              pl="1.5rem"
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <Button type="submit" colorScheme="blue" size="md" m={'auto'} >
            Add new contact
          </Button>
        </Stack>
      </form>
    );
  }
  if (status === STATUS.error) {
    return <p>Something went wrong ...</p>;
  }
  if (status === STATUS.loading) {
    return <Loader />;
  }
};
export default Form;
