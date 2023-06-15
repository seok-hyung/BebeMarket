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
    console.log('회원가입 API 요청 오류', error);
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
    console.log('이메일검증 API 요청 오류', error);
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
    console.log('계정검증 API 요청 오류', error);
    return null;
  }
};

// 한 개의 이미지 업로드(프로필,상품)
export const uploadImageAPI = async (image) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post(
      'https://mandarin.api.weniv.co.kr/image/uploadfile',
      formData,
    );

    if (response.data.message) {
      // eslint-disable-next-line no-alert
      alert(`${response.data.message}`);
    }
    return `https://mandarin.api.weniv.co.kr/${response.data.filename}`;
  } catch (error) {
    console.log('이미지 1개 업로드 API 요청 오류', error);
    return null;
  }
};

// 이메일 로그인
export const emailLoginAPI = async (email, password) => {
  try {
    const response = await axios.post(
      'https://mandarin.api.weniv.co.kr/user/login',
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
      console.log(response);
      console.log(response.data);
      return response.data;
    } else {
      console.log('응답 데이터가 없습니다.');
      return null;
    }
  } catch (error) {
    console.error('API 요청 오류:', error.message);
    throw new Error(error.message);
  }
};
