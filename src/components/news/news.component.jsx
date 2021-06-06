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
                    text: 'Praesent maximus ut magna ut aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum blandit eleifend. Proin ac nibh nec nisi malesuada tempor id sit amet orci. Cras accumsan lacus id quam accumsan bibendum. Phasellus id lorem hendrerit, ornare sapien...',
                    date: 'November 12',
                    source: 'Nullam sapien'
                },
                {
                    id: 3,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque eget risus sed volutpat. Suspendisse vulputate nulla eget ante finibus aliquam. Sed vel magna odio. Proin scelerisque sem vel vulputate pharetra. Nunc porttitor, dolor vitae suscipit feugiat, orci sapien ultricies orci, a egestas nisi risus ut ligula. Maecenas...',
                    date: 'September 28',
                    source: 'Mauris ultricies'
                }
            ]
        });
    }
    render(){
        return (
            <div>
                {this.state.newsItems.map(({id, ...otherNewsItemAttrs}) => (
                    <NewsItemComponent key={id} {...otherNewsItemAttrs} />
                ))}
            </div>
        );
    }
}

export default NewsComponent;