import React from 'react';

const ReferTypeEvent = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEventSave = (e) => {
    console.log('사용자 키보드 이벤트 값 표시하기:', e.keyCode);
  };

  const handleSave = () => {};

  const handleInit = () => {};

  return (
    <div>
      <h1>회원가입-참조타입(객체-배열) 데이터 바인딩 </h1>
      메일주소:
      <input
        type='text'
        placeholder='메일주소'
        name='email'
        value={user.email}
        onChange={handleUser}
      />
      <br />
      <br />
      암호:
      <input
        type='password'
        placeholder='암호'
        name='password'
        value={user.password}
        onChange={handleUser}
      />
      <br />
      <br />
      이름:
      <input
        type='text'
        placeholder='이름'
        name='userName'
        value={user.userName}
        onChange={handleUser}
        onKeyDown={handleEventSave}
      />
      <br />
      <br />
      <hr></hr>
      <button>저장</button>
      <button>저장</button>
    </div>
  );
};

export default ReferTypeEvent;
