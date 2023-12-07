import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../../firebase/FirebaseInit';
import { Button } from './style';

const FirebaseSignIn = () => {
  const [userData, setUserData] = useState(null);
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
      })
      .catch((err) => alert('Login Error: ' + err));
  };
  return (
    <>
      <Button onClick={handleLogin}>구글로 로그인하기</Button>
    </>
  );
};

export default FirebaseSignIn;
