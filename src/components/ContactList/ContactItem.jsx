import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/constacts/operations';

import { Li, ButtonList, Phone } from './ContactList.styled';
import { Notify } from 'notiflix';
export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
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
