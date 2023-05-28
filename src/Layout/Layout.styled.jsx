import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Nav = styled.nav`
  display: flex;align-items: baseline;
  gap: 30px;
`;
export const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: ${props => props.theme.spacing(2, 0)};
  transition: text-decoration 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover,
  :focus {
    text-decoration: underline overline #188064;
    text-underline-offset: 8px;
  }
  &.active {
    font-size: ${props => props.theme.fontSizes.large};
    color: #28b48f;
  }