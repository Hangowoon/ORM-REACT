import React, { useState } from 'react';

//redux전역데이터 공간에 데이터를 반영하려면 useDispatch라는 훅을 참조합니다.
import { useDispatch } from 'react-redux';

//redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
//리덕스 폴더안에 액션통합모듈을 참조하고 관련 액션함수(userLogin)를 참조합니다.
import { userLogin } from '../redux/actions';

import axios from 'axios';

const Login = () => {
  //전역 데이터 반영을 위한 useDispatch 훅 변수 생성하기
  const globalDispatch = useDispatch();

  const [login, setLogin] = useState({ email: '', password: '' });

  const onChangeLogin = (ev) => {
    setLogin({ ...login, [ev.target.name]: ev.target.value });
  };

  const onLogin = (e) => {
    //axios로 백엔드 로그인 RESTful API 호출하기
    axios
      .post('http://localhost:3005/api/member/login', login)
      .than((res) => {
        console.log('로그인 결과값 확인:', res.data);

        if (res.data.code === '200') {
          globalDispatch(
            userLogin(res.data.data.token, res.data.data.loginUser)
          );
        }
      })
      .catch((err) => {
        console.log('백엔드 호출 에러발생');
      });
    e.preentDefault();
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:
        <input name='email' value='login.email' onChange={onChangeLogin} />
        <br />
        암호:
        <input
          type='password'
          name='password'
          value='login.password'
          onChange={onChangeLogin}
        />
        <br />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
};

export default Login;
