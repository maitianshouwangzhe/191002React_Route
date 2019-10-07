import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component{

    render() {
        return (
            <NavLink {...this.props} activeClassName='activeClass'/>
        )
    }
}


//   定义一个自己的myNavLink，
//   使用{...this.props}将NavLink中的固有属性打包传递给myNavLink，
//   这样，myNavLink不但具有了NavLink原有属性，还多了activeClassName='activeClass'