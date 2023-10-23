import styled from '@emotion/styled';
import { FaUser, FaPhoneAlt, FaUserMinus } from 'react-icons/fa';

export const UserIcon = styled(FaUser)`
  padding: 8px;

  width: 20px;
  height: 20px;

  fill: #fabb18;

  border-radius: 12px;

  background-color: cyan;
`;

export const PhoneIcon = styled(FaPhoneAlt)`
  padding: 8px;

  width: 20px;
  height: 20px;

  fill: #fabb18;

  border-radius: 12px;

  background-color: cyan;
`;

export const UserDeletedIcon = styled(FaUserMinus)`
  width: 20px;
  height: 20px;

  fill: #fabb18;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  padding: 20px 20px;
  background-color: #f9c5f3;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);

  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4), 0 28px 30px rgba(0, 0, 0, 0.3);
`;

export const ContactName = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.p`
  display: flex;
  align-items: center;
  gap: 14px;

  margin: 0;
  /* margin-left: 10px; */
`;

export const Button = styled.button`
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0.563em 1em;
  background-color: cyan;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: orange;
    border: 1px solid #000000;

    > svg {
      fill: #000000;
    }
  }
`;
