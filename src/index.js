import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import App from './components/app'
import './index.css'

// 由于用到了react-router，不能直接渲染App,需要一个路由器组件，将其包起来，否则实现不了
// 一般嵌套结构，使用小括号
render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
)

