import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContactByIdThunk } from 'redux/contacts.thunk';
import { selectStatus } from 'redux/selectors';

import { STATUS } from 'constants/constants';

import Loader from 'components/Loader/Loader';

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, Button, Box } from '@chakra-ui/react';

const DeleteContact = ({ id, onClose, isOpen, reset }) => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const deleteContact = id => {
    dispatch(deleteContactByIdThunk(id));
    onClose();
    reset();
  };
  const onCloseModal = () => {
    onClose();
    reset();
  };
  if (status === STATUS.success) {
    return (
      <Modal size='xs' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display='flex' alignItems='center'>
          <ModalHeader>Delete the contact?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter   >
            <Box as='ul' display='flex' flexDirection='row'>
            <li>
              <Button size="md" colorScheme="blue" mr={5} onClick={() => deleteContact(id)}>OK</Button>
            </li>
            <li>
              <Button size="md" colorScheme="blue" onClick={onCloseModal}>Cancel</Button>
            </li>
            </Box>
          </ModalFooter>
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

DeleteContact.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  reset: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default DeleteContact;
