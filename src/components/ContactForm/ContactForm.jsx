import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContactsList } from 'redux/constacts/selectors';
import { addContact } from 'redux/constacts/operations';
import { Notify } from 'notiflix';
import { Form, FormWrapper, Button, Input } from './ContactForm.styled';

export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }
    if (contacts.some(({ phone }) => phone === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, phone: formNumber }));
    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    onCloseModal();
    form.reset();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={contacts.name}
        />

        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={contacts.phone}
        />

        <Button type="submit">Add contact</Button>
      </Form>
    </FormWrapper>
  );
};

ContactForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
