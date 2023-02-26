import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import { FormLabel, Input, Stack } from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Stack minW="300px" mr="auto" ml="auto">
      <FormLabel>
        Find contacts by name
        <Input
          minW='300px'
          pl="1.5rem"
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
          placeholder="Enter name"
        />
      </FormLabel>
    </Stack>
  );
};

export default Filter;
