import { useDispatch } from 'react-redux';
import { Image } from '@chakra-ui/image';
import {
  LogOutBtn,
  // UserAvatar,
  UserEmail,
  UserName,
  UserNavigarion,
  UserWrapper,
} from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavigarion>
      <UserWrapper>
        <div>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </div>
        {/* <UserAvatar> */}
        <Image
          borderRadius="full"
          boxSize="100px"
          src="https://eshulga.github.io/GoIT-Land/img/repeta2.jpg"
          alt="Alex Repeta"
        />
        {/* </UserAvatar> */}
      </UserWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </LogOutBtn>
    </UserNavigarion>
  );
};

export default UserMenu;
