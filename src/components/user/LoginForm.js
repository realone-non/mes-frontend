import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from 'hooks';

import { LOG_IN_REQUEST } from 'reducers/user';

const LoginFormComponents = () => {
  const { loggedError } = useSelector((state => state.user));
  const [ userId, setUserId ] = useInput('');
  const [ userPw, setUserPw ] = useInput('');
  const dispatch = useDispatch();
  const onLogin = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type : LOG_IN_REQUEST,
      data : {
        userId,
        userPw
      }
    })
  });
  useEffect(() => {
    if (loggedError === true) {
      alert('로그인 실패');
    }
  }, [loggedError]);
  return (
    <form onSubmit={onLogin}>
      <div>
        <span>아이디</span>
        <input 
          type='text'
          value={userId}
          onChange={setUserId}
        />
      </div>
      <div>
        <span>패스워드</span>
        <input 
          type='password'
          value={userPw}
          onChange={setUserPw}
        />
      </div>
      <button>로그인</button>
    </form>
  );
};

export default LoginFormComponents;