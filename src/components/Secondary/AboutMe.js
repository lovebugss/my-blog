import React from "react";
import {Figure} from 'react-bootstrap'

export default () => {

    return (
        <div className="widget author-widget">
            <div className="widget widget_bloge-author-widget">
                <h2 className="widget-title">关于我</h2>
                <Figure style={{"marginTop":"14px"}}>
                    <Figure.Image
                        width={236}
                        height={157}
                        alt="171x180"
                        src="https://demo.canyonthemes.com/bloge/wp-content/uploads/sites/14/2017/07/pic-1.jpg"
                    />
                    <Figure.Caption>

                        Your theme does not declare WooCommerce support – Please read our integration guide or check out
                        our Storefront theme which is totally free to download and designed specifically for use with
                        WooCommerce.
                    </Figure.Caption>
                </Figure>
            </div>
        </div>
    )
}