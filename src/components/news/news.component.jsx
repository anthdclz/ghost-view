import React from 'react';
import NewsItemComponent from '../../components/news-item/news-item.component';

import './news.styles.scss';

class NewsComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            newsItems: []
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        this.setState({
            newsItems:  [
                {
                    id: 1,
                    title: 'Fusce finibus ligula eget diam rhoncus, non finibus arcu sodales',
                    text: 'Fusce finibus ligula eget diam rhoncus, non finibus arcu sodales. Nullam placerat ac magna id laoreet. Maecenas feugiat, est vitae vestibulum tristique, urna felis faucibus lacus, et congue enim turpis quis diam. Sed imperdiet dui ac nisl malesuada, sit amet blandit risus hendrerit. Fusce rhoncus interdum mi id aliquet. Donec maximus...',
                    date: 'March 5',
                    source: 'Vestibulum ante'
                },
                {
                    id: 2,
                    title: 'Praesent maximus ut magna ut aliquet',
                    text: 'Praesent maximus ut magna ut aliquet. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Aliquam interdum blandit eleifend. Proin ac nibh nec nisi malesuada tempor id sit amet orci. Cras accumsan lacus id quam accumsan bibendum. Phasellus id lorem hendrerit, ornare sapien...',
                    date: 'November 12',
                    source: 'Nullam sapien'
                },
                {
                    id: 3,
                    title: 'Curabitur pellentesque eget risus sed volutpat',
                    text: 'Curabitur pellentesque eget risus sed volutpat. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Suspendisse vulputate nulla eget ante finibus aliquam. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Nunc porttitor, dolor vitae suscipit feugiat, orci sapien ultricies orci, a egestas nisi risus ut ligula. Maecenas...',
                    date: 'September 28',
                    source: 'Mauris ultricies'
                },
                {
                    id: 4,
                    title: 'Aenean egestas nec risus ut malesuada',
                    text: 'Aenean egestas nec risus ut malesuada. Ut vel lacinia eros, nec porta quam. Duis quis sagittis libero. Ut consectetur scelerisque enim, et molestie nulla scelerisque quis. Etiam auctor sodales aliquam. Aliquam vel finibus erat, ut varius augue. Sed faucibus augue sit amet tortor egestas, id euismod tortor gravida. Vivamus eu dui neque...',
                    date: 'August 12',
                    source: 'Scelerisque Proin'
                },
                {
                    id: 5,
                    title: 'Faucibus ac vel velit suspendisse',
                    text: 'Faucibus ac vel velit suspendisse. Sed molestie, lorem ut malesuada accumsan, risus tortor facilisis mi, a cursus velit augue non ex. Curabitur tincidunt arcu ex, quis pretium turpis gravida non. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Sed maximus neque lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...',
                    date: 'July 31',
                    source: 'Malesuada Accumsan'
                }
            ]
        });
    }
    render(){
        const { newsItems } = this.state;
        const newsItemBatch = this.props.start < 2 ? newsItems.filter(newsItem => newsItem.id < 4) : newsItems.filter(newsItem => newsItem.id > 3);
        return (
            <div>
                {newsItemBatch.map(({id, ...otherNewsItemAttrs}) => (
                    <NewsItemComponent key={id} {...otherNewsItemAttrs} />
                ))}
            </div>
        );
    }
}

export default NewsComponent;