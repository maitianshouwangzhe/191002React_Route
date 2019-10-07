import React from 'react'



const allMessages = [
    {id: 1, title:'message001', content:'我爱父母'},
    {id: 3, title:'message003', content:'我爱老婆'},
    {id: 5, title:'message005', content:'我爱孩子'}
]

// 此次用函数，定义组件
export default function MessageDetail(props) {
    // 得到请求参数中的id，注意此处的id为字符串，在下面乘以1即转为数字
    // 此句的语法属于结构赋值
    const {id} = props.match.params
    // 查询得到对应的message
    // 返回第一个结果为true的数组元素
    const message = allMessages.find((message) => message.id === id*1)

    return (
        <ul>
            <li>ID:{message.id}</li>
            <li>TITLE:{message.title}</li>
            <li>CONTENT:{message.content}</li>
        </ul>
    )

}