import React from "react";
import {
    TopHeader, Header, Banner, Content, Secondary
} from "../../components/";
import './index.css'

export default () => {
    return (
        <div className="box-wrapper">
            <TopHeader/>
            <Header></Header>
            <Banner></Banner>
            <div className="content">

                <Content></Content>
            </div>
        </div>
    )
}
