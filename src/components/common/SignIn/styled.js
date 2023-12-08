import styled from 'styled-components';

export const Body = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;

  display: flex;
  justify-content: center;
  background: #fff;
`;

export const Frame = styled.div`
  margin-top: 250px;
`;

export const Box = styled.div`
  width: 255px;
  height: 200px;
  padding: 20px 18px 20px 0px;

  border: 1px solid #000;
  border-width: 0.8px;
  border-radius: 5px;

  background: #fff;
`;

export const InputId = styled.input`
  width: 250px;
  height: 30px;
  margin: 15px 15px 15px 10px;

  display: flex;
  align-items: center;

  border-radius: 1px;
  border: none;
  background: #efefef;

  &:focus {
    outline: 1px solid #964b00;
  }

  &::placeholder {
    font-size: 13px;
    padding-left: 3px;
    font-weight: semi-bold;
  }
`;

export const InputPwd = styled.input`
  width: 250px;
  height: 31px;
  margin: -10px 15px 15px 10px;

  display: flex;
  align-items: center;

  border-radius: 1px;
  border: none;
  background: #efefef;

  &:focus {
    outline: 1px solid #964b00;
  }

  &::placeholder {
    padding-left: 3px;
    font-weight: semi-bold;
    font-size: 13px;
  }
`;

export const LoginBtn = styled.button`
  width: 253px;
  height: 31px;
  margin: -5px 15px 13px 10px;

  border-radius: 1px;
  border: none;

  color: #fff;
  background: #964b00;
  font-weight: bold;

  &:hover {
    opacity: 90%;
    cursor: pointer;
  }
`;

export const GoogleBtn = styled.button`
  width: 253px;
  height: 31px;
  margin: -5px 15px 15px 10px;

  border-radius: 1px;
  border: none;
  color: #fff;
  background: #1876fb;
  font-weight: bold;

  &:hover {
    opacity: 90%;
    cursor: pointer;
  }
`;

export const UserInfos = styled.form`
  display: flex;
  margin-left: 38px;
`;

export const UserInfo = styled.button`
  padding-left: 5px;
  margin-left: 5px;

  font-size: 9px;
  font-weight: bold;
  letter-spacing: 0.3px;

  border: none;
  background: #ffffff;
  color: rgba(161, 161, 161, 0.7);

  justify-content: center;
  align-items: center;

  &:hover {
    color: #000;
    opacity: 60%;
    cursor: pointer;
  }

  z-index: 1;
`;

export const ImgLogo = styled.img`
  margin-left: 70px;
  margin-bottom: 10px;
`;

export const SmallLogo = styled.img`
  width: 70px;
  height: 16px;

  margin-top: 40px;
  margin-left: 70px;
  margin-bottom: 10px;
`;

export const CopyLogo = styled.img`
  height: 8px;
  margin: 5px 10px 10px 5px;
`;

export const GoogleLogos = styled.img`
  position: absolute;
  margin: 3px 0px 0px 40px;
`;

export const Bar = styled.div`
  margin: 0px 0px 5px 2px;
  padding: 3px 2px 1px 1px;

  font-size: 12px;
  color: rgba(161, 161, 161, 0.7);

  &:hover {
    cursor: default;
  }
`;

export const LowEnds = styled.div`
  margin-left: -10px;
  margin-top: -20px;
  z-index: 0;
`;
