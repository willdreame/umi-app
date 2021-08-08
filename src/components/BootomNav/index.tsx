import React, { Component } from 'react'
import { history } from 'umi';

import { TabBar } from 'antd-mobile'


const menu = [
    {
        title: '首页',
        icon: 'home',
        link: '/'
    },
    {
        title: '购物车',
        icon: 'gouwuche',
        link: '/cart'
    },
    {
        title: '订单列表',
        icon: 'dingdan_dingdanliebiao',
        link: '/olist'
    },
    {
        title: '我的',
        icon: 'tubiaolunkuo-',
        link: '/user'
    },
];

interface BootomNavProps {
    pathname : string,
}

export default class BootomNav extends Component<BootomNavProps> {


    render() {
        const { pathname } = this.props

        return (
            <div>
                <TabBar
                    tintColor={'red'}
                >
                    {menu.map(({ title, icon, link })=>(
                        <TabBar.Item 
                            key={link}
                            title={title}
                            icon={<span className={'iconfont icon-' + icon}></span>}
                            selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
                            selected={ pathname === link }
                            onPress={()=>{
                                history.push(link)
                            }}
                        />
                    ))}
                </TabBar>
            </div>
        )
    }
}
