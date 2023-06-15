import axios from 'axios';

// 회원가입
export const joinAPI = async (
  username,
  email,
  password,
  accountname,
  introduction,
  image,
) => {
  try {
    const response = await axios.post('https://mandarin.api.weniv.co.kr/user', {
      user: {
        username,
        email,
        password,
        accountname,
        introduction,
        image,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error while registering:', error);
    return null;
  }
};

// 이메일 중복 검사
export const emailValidAPI = async (userEmail) => {
  try {
    const response = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/emailvalid',
      {
        user: {
          email: userEmail,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error while checking email:', error);
    return null;
  }
};

// 계정 중복 검사
export const accountnameValidAPI = async (userID) => {
  try {
    const response = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/accountnamevalid',
      {
        user: {
          accountname: userID,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error while checking accountname', error);
    return null;
  }
};

// 한 개의 이미지 업로드(프로필,상품)
