import React from 'react';
import { Link } from 'react-router-dom';

import './browse-page.styles.scss';

class BrowsePage extends React.Component {
    constructor(){
        super();
        this.state = {
            links: []
        }
    };
    componentDidMount(){
        this.setState({links: [
            {
                id: 1,
                name: 'The Oatmeal',
                url: 'https://theoatmeal.com/'
            },
            {
                id: 2,
                name: 'Gravity Points',
                url: 'https://codepen.io/akm2/full/rHIsa'
            },
            {
                id: 3,
                name: 'Wizarding World - Wizarding Passport',
                url: 'https://my.wizardingworld.com/passport'
            },
            {
                id: 4,
                name: 'Space.com',
                url: 'https://www.space.com/'
            },
            {
                id: 5,
                name: 'The Ringer',
                url: 'https://www.theringer.com/pop-culture'
            },
            {
                id: 6,
                name: 'The MoPOP Blog',
                url: 'https://www.mopop.org/about-mopop/the-mopop-blog/'
            }
        ]});
    }
    render(){
        return (
            <div className="page">
                <h2>Just For Fun</h2>
                <div className='browse-page-subtitle'>Goodies and potential time wasters.</div>
                <div className='browse-page'>
                    {this.state.links.map(({id, name, url}) => ( 
                        <Link className='link' key={id} to={url}>{name}</Link> 
                    ))}
                </div>
            </div>
        );
    };
};

export default BrowsePage;