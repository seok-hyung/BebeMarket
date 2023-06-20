import axios from 'axios';

export const addProductAPI = async (sendData, userToken) => {
  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/product',
      sendData,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error in addProductAPI:', error.message);
  }
};
