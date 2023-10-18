import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import { Li, ButtonList, Phone } from './ContactList.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <Li key={id}>
      {name}:<Phone>{phone}</Phone>
      <ButtonList onClick={() => handleDeleteContact(id)}>Delete</ButtonList>
    </Li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
