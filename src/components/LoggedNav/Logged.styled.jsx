import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LoggedList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;

  margin-left: auto;
`;
export const LoggedItem = styled.li``;
export const LoggedLink = styled(NavLink)`
  list-style: none;
  display: block;
  font-weight: 600;
  font-size: 18px;

  padding: 22px 28px;

  color: #000000;
  background-color: cyan;

  border-radius: 14px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: orange;
  }
`;
