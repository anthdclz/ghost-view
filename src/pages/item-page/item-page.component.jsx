import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GALLERY_DATA from '../gallery-page/gallery.data';
import { setLatestItem, setItemPageTab } from '../../redux/item/item.actions'
import startChart from '../../components/item-chart/item-chart.component';

import TabsComponent from '../../components/tabs/tabs.component';
import ItemBlock from '../../components/item-block/item-block.component';
import NewsComponent from '../../components/news/news.component';
import NewsFlair from '../../components/news-flair/news-flair.component';
import DetailsComponent from '../../components/details/details.component';

import './item-page.styles.scss';

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        const { history } = props;

        this.state = {
            newsUrl: history.location.pathname,
            detailsUrl: history.location.pathname
        }
    }

    componentDidMount() {
        const { setLatestItem, setItemPageTab, history } = this.props;
        setItemPageTab('summary');
        const gallery = GALLERY_DATA;
        const urlSearchAttrs = history.location.search.substring(1);
        const urlObj = urlSearchAttrs ? JSON.parse('{"' + decodeURI(urlSearchAttrs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}') : {id: 1};
        const existingItem = gallery.find(item => item.id === parseInt(urlObj.id));
        if (existingItem) {
            setLatestItem(existingItem);
            startChart();
        }
    }
    render() {
        const { latestItem, itemPageTab } = this.props;
        return (
            <div className="item-page">
                <TabsComponent history={this.props.history} currentItem={latestItem} />
                {itemPageTab === 'summary' ? (
                    <div className='page'>
                        <div className='chart-wrapper'>
                            {latestItem ? <ItemBlock key={latestItem.id} item={latestItem} /> : null}
                            <div id="chart_div"></div>
                        </div>
                        <NewsComponent key='1' start='1' />
                        <NewsFlair />
                        <NewsComponent key='2' start='2' />
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
    itemPageTab: item.itemPageTab
});

const mapDispatchToProps = dispatch => ({
    setLatestItem: item => dispatch(setLatestItem(item)),
    setItemPageTab: item => dispatch(setItemPageTab(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemPage));