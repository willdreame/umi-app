import { Effect, Reducer } from 'umi';
import { queryCurrent } from '@/services/user';
import { Toast } from 'antd-mobile';
import Icon from '@ant-design/icons/lib/components/AntdIcon';

interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}

interface DetailUser {
  name: string;
  icon: string;
  userid: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  country: string;
}

export interface UserModelState {
  currentUser: CurrentUser;
  detail:
    | DetailUser
    | {
        name: string;
        icon: string;
      };
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
    detail: {
      name: '',
      icon: '',
    },
  },
  effects: {
    *fetchCurrent(_: any, { call, put }: any) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: {...response},
      });
    }
  },
  reducers: {
    saveCurrentUser(state: any, action: { payload: any; }) {
      console.log(action, 'action')
      return { ...state, currentUser: {...action.payload} || {} };
    },
  },
};
export default UserModel;
