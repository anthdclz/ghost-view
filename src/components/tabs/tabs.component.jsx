import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import startChart from '../../components/item-chart/item-chart.component';
import { setIsSummary } from '../../redux/item/item.actions';

import './tabs.styles.scss';

class TabsComponent extends React.Component {
    constructor(props){
        super(props);
        const {history} = props;
        this.state = {
            newsUrl: history.location.pathname,
            detailsUrl: history.location.pathname
        }
    };
    componentDidMount(){
        const { history, isSummary, setIsSummary } = this.props;
        setIsSummary(history.location.pathname.includes('summary'));
        this.setState({
            newsUrl: this.state.newsUrl.replace('details', 'summary'),
            detailsUrl: history.location.pathname.replace('summary', 'details'),
        });
        console.log('det: ' + this.state.detailsUrl, ', summary: ' + this.state.newsUrl)
    };
    handleClick = (url, e) => {
        e.preventDefault();
        const { history, setIsSummary } = this.props;
        history.push(url);
        setIsSummary(url.includes('summary'));
        if(url.includes('summary')){
            startChart();
        }
    };
    render(){
        const { newsUrl, detailsUrl } = this.state;
        const { isSummary } = this.props;
        return(
            <div>
                <div className='tabs'>
                    <div className={`tab ${isSummary ? 'selected' : ''}`} onClick={(e) => this.handleClick(newsUrl, e)} >Summary</div>
                    <div className={`tab ${isSummary ? '' : 'selected'} `} onClick={(e) => this.handleClick(detailsUrl, e)} >Details</div>
                </div>
            </div>
            );
    };
};

const mapStateToProps = ({ item }) => ({
    isSummary: item.isSummary
});

const mapDispatchToProps = dispatch => ({
    setIsSummary: item => dispatch(setIsSummary(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabsComponent));