import axios from 'axios';
import { apiURL } from '../apiURL';
// 게시글 전체보기
const getAllFeedAPI = async (token) => {
  try {
    const response = await axios.get(`${apiURL}post/feed`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log('팔로잉한 사람 게시글 전체 불러오기 API 요청 오류', error);
    return null;
  }
};

export default getAllFeedAPI;
