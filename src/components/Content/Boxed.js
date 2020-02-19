import React from "react";
import {Image, Row, Col} from "react-bootstrap";

export default (porps) => {
    const {title, createTime, author, ctr, tag,content, url, imageUrl} = porps;
    // https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/11/men-2425121_12801.jpg
    return (
        <div>
            <div className="boxed hentry">
                <div className="bloge-post-wrapper">
                    <div>
                        <Image
                            src={imageUrl}>
                        </Image>
                    </div>
                    <div className="content-box">
                        <div className="entry-header">
                        </div>
                        <h2 className="entry-title">
                            <a href={url}>
                                {title}
                            </a>
                        </h2>
                        <div className="post-meta-wrapper">
                            <div className="entry-meta">
                                <span>{createTime}</span>
                                <span>{tag}</span>
                                <span>{author}</span>
                                <span>{ctr}</span>
                            </div>
                        </div>
                        <div className="entry-content">
                            <p>{content}</p>
                        </div>
                        <div className="entry-footer">
                            <Row>
                                <Col className="more-area">
                                    <a href={url}>查看</a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}