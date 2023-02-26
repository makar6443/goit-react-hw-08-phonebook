import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Container } from '@chakra-ui/react';
import { selectAuthToken } from 'redux/auth/auth.selectors';

import Navigation from 'components/Navigation';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';

const Layout = () => {
  const token = useSelector(selectAuthToken);
  return (
    <>
      <Box
        as="header"
        borderBottom={`2px solid`}
        borderColor={'gray.200'}
        fontSize={20}
        mb={5}
      >
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxW="4xl"
          p={2}
        >
          <Navigation />
          {!token ? <AuthNavigation /> : <UserMenu />}
        </Container>
      </Box>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
