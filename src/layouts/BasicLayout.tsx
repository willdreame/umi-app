import React, { useEffect } from 'react';
import BootomNav from '@/components/BootomNav'
import { connect, Location, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect'

import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less'

interface BasicLayoutProps {
    location: Location,
    dispatch: Dispatch,
    user: any
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
    const { children, location, dispatch, user } = props;
    useEffect(()=>{
        if(dispatch){
            dispatch({
                type: 'user/fetchCurrent',
            });
        }
    }, [])
    console.log(props)
    return (
    <div className={styles.main}>
        <article>{children}</article>
        <footer>
            <BootomNav pathname={location.pathname}/>
        </footer>
    </div>
    );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);