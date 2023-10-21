import { useSelector } from 'react-redux';

import {
  selectContactsFilter,
  selectContactsList,
} from 'redux/constacts/selectors';

import { List } from './ContactList.styled';

import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectContactsList);
  const filter = useSelector(selectContactsFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {visibleContacts.map(({ name, phone, id }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
