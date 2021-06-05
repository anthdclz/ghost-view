import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GALLERY_DATA from '../gallery-page/gallery.data';
import { setLatestItem } from '../../redux/item/item.actions'
import startChart from '../../components/item-chart/item-chart.component';

import TabsComponent from '../../components/tabs/tabs.component';
import ItemBlock from '../../components/item-block/item-block.component';
import NewsComponent from '../../components/news/news.component';
import DetailsComponent from '../../components/details/details.component';

import './item-page.styles.scss';

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        const { history } = props;

        this.state = {
            newsUrl: history.location.pathname,
            detailsUrl: history.location.pathname,
            isSummary: history.location.pathname.includes('summary')
        }
    }

    componentDidMount() {
        const { setLatestItem, history } = this.props;
        const gallery = GALLERY_DATA;
        const pathSplit = history.location.pathname.split('/');
        const urlTitle = pathSplit[pathSplit.length - 1];
        const existingItem = gallery.find(item => item.title === urlTitle);
        if (existingItem) {
            const setItem = async () => {
                const theItem = await setLatestItem(existingItem);
            };
            setItem();
        }
        const { isSummary } = this.state;
        this.setState(isSummary ? {
            detailsUrl: history.location.pathname.replace('summary', 'details'),
            isSummary: true
        } : {
            newsUrl: history.location.pathname.replace('details', 'summary'),
            isSummary: false
        });
        if (isSummary) {
            startChart(); // TODO: Fix. Creates error on details page
        }
    }
    render() {
        const { latestItem, isSummary } = this.props;
        return (
            <div className="item-page">
                <TabsComponent history={this.props.history} currentItem={latestItem} />
                {isSummary === true ? (
                    <div className='page'>
                        <div className='title f25'>{latestItem ? latestItem.title : ''} {this.state.lastVal}</div>
                        <div className='chart-wrapper'>
                            {latestItem ? <ItemBlock key={latestItem.id} item={latestItem} /> : null}
                            <div id="chart_div"></div>
                        </div>
                        <NewsComponent />
                    </div>
                ) : (
                    <div className='page'>
                        <DetailsComponent />
                    </div>
                )}
            </div>
        );
    }
};

const mapStateToProps = ({ item }) => ({
    latestItem: item.latestItem,
    isSummary: item.isSummary
});

const mapDispatchToProps = dispatch => ({
    setLatestItem: item => dispatch(setLatestItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemPage));