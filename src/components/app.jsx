import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// 引入路由组件
import About from "../views/about";
import Home from "../views/home";
// 引入有关路由的导航链接
import MyNavLink from "./myNavLink";


//   App包含了头部，左边的导航栏（左侧导航的About和Home是路由链接），以及右边是路由组件显示的区域
//   因此有两个路由组件
export default class App extends Component{

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router样例</h2></div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*  左边导航是路由链接   */}
                            <MyNavLink className="list-group-item" to='/about'>About</MyNavLink>
                            <MyNavLink className="list-group-item" to='/home'>Home</MyNavLink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*
                                写路由组件要显示的部分，

                                只能显示一个时，需要用Switch自动匹配切换，

                                path就是路径，一旦路径匹配，则自动切换路由组件
                                <Redirect to='/about'/> 就是默认显示About路由组件的内容
                                */}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}