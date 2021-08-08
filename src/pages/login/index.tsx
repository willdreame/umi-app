import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import React from 'react';
import styles from './index.less';
import { connect, Redirect} from 'umi';


interface LoginProps extends ConnectProps {
  user: UserModelState,
}

const Login: React.FC<LoginProps> = ({user, location})=> {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if(isLogin) {
    const { from = '/' } = location.state || {};
    return <Redirect to={from}/>
  }
  return(
    <div className={styles.title}>login</div>
  )
}


export default connect(({user}: ConnectState)=>({user}))(Login)
