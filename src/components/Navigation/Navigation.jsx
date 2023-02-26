import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';
import { Link, Stack } from '@chakra-ui/react';

const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <nav>
      <Stack as="ul"  direction="raw" spacing={1} >
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            to={'/'}
            _hover={{ color: 'blue.500' }}
            _activeLink={{ color: 'blue.500' }}
          >
            Home
          </Link>
        </li>
        {token && (
          <li>
            <Link
              as={NavLink}
              fontSize="lg"
              fontWeight='500'
              p={2}
              mr={1}
              to={'contacts'}
              _hover={{ color: 'blue.500' }}
              _activeLink={{ color: 'blue.500' }}
            >
              Contacts
            </Link>
          </li>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
