import axios from 'axios';
import { apiURL } from '../apiURL';

const getFollowerAPI = async (token) => {
  try {
    const response = await axios.get(
      `${apiURL}post/feed/?limit=Number&skip=Number`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    return response.data.posts;
  } catch (error) {
    console.log('팔로잉 게시글 목록 API 요청 오류', error);
    return null;
  }
};

export default getFollowerAPI;
