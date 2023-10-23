import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  .link {
    text-decoration: none;
  }
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-right: 114px;

  color: #000000;
  > span {
    color: cyan;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: cyan;
    > span {
      color: #000000;
    }
  }
`;

export const MainNav = styled.nav``;
export const MainNavList = styled.ul``;
export const MainNavItem = styled.li`
  list-style-type: none;
`;
export const MainNavLink = styled(NavLink)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  padding: 22px 28px;

  color: #000000;
  background-color: cyan;
  border-radius: 18px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    font-weight: 600;

    color: #ffffff;
    background-color: orange;
  }
`;
