import React from 'react';
import { connect } from 'react-redux';
import startChart from '../../components/item-chart/item-chart.component';
import { setItemPageTab } from '../../redux/item/item.actions';

import './tabs.styles.scss';

class TabsComponent extends React.Component {
    handleClick = (tabType, e) => {
        e.preventDefault();
        const { setItemPageTab } = this.props;
        setItemPageTab(tabType);
        if(tabType === 'summary'){
            startChart();
        }
    };
    render(){
        const { itemPageTab } = this.props;
        return(
            <div className='tabs-wrapper'>
                <div className='tabs'>
                    <div className={`tab ${itemPageTab === 'summary' ? 'selected' : ''}`} onClick={(e) => this.handleClick('summary', e)} >Summary</div>
                    <div className={`tab ${itemPageTab === 'details' ? 'selected' : ''}`} onClick={(e) => this.handleClick('details', e)} >Details</div>
                </div>
            </div>
            );
    };
};

const mapStateToProps = ({ item }) => ({
    itemPageTab: item.itemPageTab
});

const mapDispatchToProps = dispatch => ({
    setItemPageTab: item => dispatch(setItemPageTab(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsComponent);