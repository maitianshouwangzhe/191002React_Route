import React, {Component} from 'react'

export default class News extends Component{

    // 初始为一个列表
    state = {
        newsArr: [
            'news001',
            'news002',
            'news003',
        ]
    }

    render() {
        return (
            <ul>
                {
                    this.state.newsArr.map((news, index) =>(<li key={index}>{news}</li>))
                }
            </ul>
        )
    }
}