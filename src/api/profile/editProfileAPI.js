import axios from 'axios';
import { apiURL } from '../apiURL';

export const editProfileAPI = async (
  accountname,
  token,
  username,
  accountId,
  introduction,
) => {
  const accessToken = `Bearer ${token}`;

  try {
    const response = await axios.put(
      `${apiURL}/profiles/${accountname}`,
      {
        userName: username,
        accountName: accountId,
        introduction: introduction,
      },
      {
        headers: { Authorization: accessToken },
      },
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('프로필 수정에 실패했습니다.', error);
    return null;
  }
};
