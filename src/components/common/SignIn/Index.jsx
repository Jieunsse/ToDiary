import React, { useState } from 'react';
import {
  Body,
  Frame,
  Box,
  ImgLogo,
  InputId,
  InputPwd,
  LoginBtn,
  UserInfos,
  SmallLogo,
  CopyLogo,
  UserInfo,
  Bar,
  LowEnds,
  GoogleBtn,
  GoogleLogos,
} from './styled.js';
import logo from '../../..//assets/logo/logo.svg';
import CopyRight from '../../../assets/img/CopyRight.svg';
import GoogleLogo from '../../../assets/logo/GoogleLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/FirebaseInit.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {
  const [userName, setUserName] = useState(''); // 유저 아이디를 담을 state 변수
  const [passWord, setPassWord] = useState(''); // 유저 비밀번호를 담을 state 변수
  const [userData, setUserData] = useState(null); // 구글 로그인 유저 정보를 담을 변수

  const navigate = useNavigate(); // useNavigate 할당해서 라우팅하기!

  const handleLogin = () => {
    // input창의 id 혹은 비밀번호가 비어있으면, 로그인 창을 표시, 둘 다 입력되었으면, 예약화면 표시하기.
    userName === '' || passWord === '' ? navigate('/') : navigate('/home');
  };

  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        navigate('/home');
      })
      .catch((err) => alert('Login Error: ' + err));
  };

  const testAlert = () => {
    alert('Clicked');
  };

  return (
    <Body>
      <Frame>
        <Box>
          <ImgLogo src={logo} alt="로고" />
          <InputId
            placeholder="아이디"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <InputPwd
            placeholder="비밀번호"
            type="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <Link to={navigate}>
            <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
            <GoogleLogos src={GoogleLogo} />
            <GoogleBtn onClick={GoogleLogin}>구글로 시작하기</GoogleBtn>
          </Link>
          <UserInfos>
            <UserInfo onClick={testAlert}>아이디찾기</UserInfo>
            <Bar>|</Bar>
            <UserInfo onClick={testAlert}>비밀번호찾기</UserInfo>
            <Bar>|</Bar>
            <UserInfo onClick={testAlert}>회원가입</UserInfo>
          </UserInfos>
          <LowEnds>
            <SmallLogo src={logo} alt="스몰로고" />
            <CopyLogo src={CopyRight} alt="copyRight" />
          </LowEnds>
        </Box>
      </Frame>
    </Body>
  );
}
