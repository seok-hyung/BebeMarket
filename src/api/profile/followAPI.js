import axios from 'axios';
import { apiURL } from '../apiURL';

export const followAPI = async (accountname, token) => {
  try {
    const response = await axios.post(
      `${apiURL}profile/${accountname}/follow`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('팔로우 API 요청 에러', error);
  }
};
