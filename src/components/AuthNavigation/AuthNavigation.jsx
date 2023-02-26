import { NavLink } from 'react-router-dom';
import { Link, Stack } from '@chakra-ui/react';

const AuthNavigation = () => {
  return (
    <nav>
      <Stack as="ul" direction="raw" spacing={1} p={1}>
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            to={'login'}
            _hover={{ color: 'blue.500' }}
            _activeLink={{ color: 'blue.500' }}
          >
            Log In
          </Link>
        </li>
        <li>
          <Link
            as={NavLink}
            fontSize="lg"
            fontWeight='500'
            p={2}
            mr={1}
            to={'register'}
            _hover={{ color: 'blue.500' }}
            _activeLink={{ color: 'blue.500' }}
          >
            Sign In
          </Link>
        </li>
      </Stack>
    </nav>
  );
};

export default AuthNavigation;
