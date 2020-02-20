import React from "react";
import AboutMe from "./AboutMe";

import './index.css'

export default () => {
    return (
        <div className="secondary">
            <div className="theiaStickySidebar" style={{
                "paddingTop": "0px",
                "paddingBottom": "1px",
                "position": "static"
            }}>
                <AboutMe/>
            </div>

        </div>
    )
}