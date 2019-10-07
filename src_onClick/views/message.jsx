import React, {Component} from 'react'
import {Route}from 'react-router-dom'
import MessageDetail from "./message-detail";
import MyNavLink from "../components/myNavLink";

export default class Message extends Component{
    // 由于需要异步显示，则是一个空的数组
    state = {
        messages:[]
    }

    // 模拟发送Ajax请求，异步获取数据
    //  只要带有回调函数的，建议使用箭头函数
    //  这个组件的意思就是：先render渲染以后，再执行componentDidMount后再render
    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title:'message001'},
                {id: 3, title:'message003'},
                {id: 5, title:'message005'}
            ]
            // 得到数据后，更新状态
            this.setState({messages})
        }, 1000)
    }

    handleClick =(id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }
    handleClick2 =(id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    back =() => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    // 通过js跳转到另一个页面
    openNewPage =()=> {
        window.location = 'http://www.baidu.com'
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                                {/*  这是一种向回调函数中传入参数的办法  */}
                                &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => this.handleClick(m.id)}>push()查看</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => this.handleClick2(m.id)}>replace()查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>

                <p>
                    <button onClick={this.openNewPage}>页面跳转</button>
                </p>


                {/*       写一个能匹配任意字符的占位符，用:xxx， 如此时用:id  */}
                {/*        :id 既是占位符，也是一个标识名称   */}
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>

        )
    }
}




//   注意嵌套标签的写法