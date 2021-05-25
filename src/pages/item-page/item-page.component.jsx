import React from 'react';
import { withRouter } from 'react-router-dom';
import './item-page.styles.scss';

class ItemPage extends React.Component {
    render(){
        return(
            <div className="item-page">Item Page
                <div id="chart_div"></div>
            </div>
        );
    };
};

export default withRouter(ItemPage);