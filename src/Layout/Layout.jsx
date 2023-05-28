import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: ${props => props.theme.spacing(2, 0)};
  &.active {
    color: #28b48f;
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        <Container padding>
          <Suspense fallback={<div>Please wait. We are in a process...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;