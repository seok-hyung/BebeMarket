import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { data } from '../data/ChildCareInfo';

const { persistAtom } = recoilPersist();

export const userTokenState = atom({
  key: 'userTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 계정 이름 관리용 전역 상태
export const accountNameState = atom({
  key: 'accountNameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});

export const preschoolListState = atom({
  key: 'preschoolList',
  default: data[0].ChildCareInfo.row,
});

export const mapSearchValueState = atom({
  key: 'mapSearchValue',
  default: '',
});

export const filteredPreschoolListState = selector({
  key: 'filteredPreschoolList',
  get: ({ get }) => {
    const searchValue = get(mapSearchValueState);
    const list = get(preschoolListState);
    return list.filter((item) => item.CRNAME.includes(searchValue));
  },
});
