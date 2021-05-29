import React from 'react';
import { withRouter } from 'react-router-dom';
import TabsComponent from '../../components/tabs/tabs.component';

import './item-page.styles.scss';

class ItemPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemPrice: null,
            lastVal: null
        }
    }
    render(){
        const { history } = this.props;
        return(
            <div className="item-page">
                <TabsComponent history={history} />        
            </div>
        );
    };
};

export default withRouter(ItemPage);