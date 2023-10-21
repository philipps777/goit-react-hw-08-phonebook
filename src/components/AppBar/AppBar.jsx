import { useAuth } from 'hooks/useAuth';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoggedNav from 'components/LoggedNav/LoggedNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <LoggedNav />}
    </header>
  );
};

export default AppBar;
