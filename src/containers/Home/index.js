import React from "react";
import {
    TopHeader, Header, Banner, Content
} from "../../components/";
import './index.css'

export default () => {
    return (
        <div className="box-wrapper">
            <TopHeader/>
            <Header></Header>
            <Banner></Banner>
            <Content></Content>
        </div>
    )
}
