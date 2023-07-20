import axios from 'axios';

// 이메일 로그인
export const emailLoginAPI = async (email, password) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/login',
      {
        user: {
          email,
          password,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    //  undefined 일 때 대비하는 로직
    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
