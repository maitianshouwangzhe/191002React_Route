import React, {Component} from 'react'
import MyNavLink from "../components/myNavLink";
import {Switch, Route, Redirect} from 'react-router-dom'
// 显示路由组件，则先要引入
import News from "./news";
import Message from "./message";

export default class Home extends Component{

    render() {
        return (
            <div>
                <h3>Home组件内容</h3>
                {/* 在父组件中，指定路由链接  */}
                <div className='nav nav-tabs'>
                    <li>
                        <MyNavLink to="/home/news" >News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                </div>
                {/* 点击路由链接，即可显示路由组件的显示部分 */}
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>

                </div>
            </div>
        )
    }
}