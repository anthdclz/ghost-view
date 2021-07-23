import React from 'react';
import axios from 'axios';

import { CircleNotchIcon } from '../../components/home-icon/home-icon.component';

import './comics-page.styles.scss';

class ComicsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            comics: []
        }
    }
    componentDidMount(){
        console.log('comics mounted');
        axios({
            url: 'marvel',
            method: 'get'
        })
        .then(r => {
            if(r.data.success.data.results.length > 0){
                this.setState({
                    comics: r.data.success.data.results.filter(i => i.issueNumber === 1 && !i.title.includes('TPB') && !i.title.includes('Paperback'))
                });
            }
        })
        .catch(e => {
            console.log(e);
        });
    }
    render(){
        return (
            <div className="page">
                <h2>Comics</h2>
                <div className='comics-page'>
                    {this.state.comics.length < 1 ? (
                        <CircleNotchIcon />
                    ) : (
                        this.state.comics.length
                    )}
                    
                    {/* {this.state.gallery.map((item) => ( 
                        <GalleryItem key={item.id} item={item} /> 
                    ))} */}
                </div>
            </div>
        );
    }
};

export default ComicsPage;