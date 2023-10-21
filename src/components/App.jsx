import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

const HomePage = lazy(() => import('Pages/Home/Home'));
const RegisterPage = lazy(() => import('Pages/Register/Register'));
const LoginPage = lazy(() => import('Pages/Login/Login'));
const ContactsPage = lazy(() => import('Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/login" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { fetchContacts } from 'redux/operations';
// import { selectError, selectIsLoading } from 'redux/selectors';

// import { Wrapper } from 'components/App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from './ContactList/ContactList';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <Wrapper>
//       <h2>Phonebook</h2>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress</b>}
//       <ContactList />
//     </Wrapper>
//   );
// };
