import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshContactByIdThunk } from 'redux/contacts.thunk';
import { selectStatus } from 'redux/selectors';

import PropTypes from 'prop-types';

import { STATUS } from 'constants/constants';

import Loader from 'components/Loader/Loader';

import { Modal, ModalOverlay, ModalContent, Input, FormLabel, ModalHeader, FormControl, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

const EditContact = ({ id, name, number, onClose, isOpen, reset }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'newName':
        setNewName(value);
        break;
      case 'newNumber':
        setNewNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(refreshContactByIdThunk({ id, name: newName, number: newNumber }));
    onClose();
    reset();
  };
  const onCloseModal = () => {
    onClose();
    reset();
  };
  if (status === STATUS.success) {
    return (
      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center">
          <ModalHeader>Edit Contact</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>
                  Name
                  <Input
                    pl="1.5rem"
                    type="text"
                    name="newName"
                    value={newName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel>
                  Number
                  <Input
                    pl="1.5rem"
                    type="tel"
                    name="newNumber"
                    value={newNumber}
                    onChange={handleChange}
                    placeholder="Enter number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </FormLabel>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                size="md"
                colorScheme="blue"
                type="submit"
                ml="auto"
                mr={3}
              >
                OK
              </Button>
              <Button
                size="md"
                colorScheme="blue"
                mr="auto"
                type="button"
                onClick={onCloseModal}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    );
  }
  if (status === STATUS.error) {
    return <p>Something went wrong ...</p>;
  }
  if (status === STATUS.loading) {
    return <Loader />;
  }
};

EditContact.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  reset: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default EditContact;
