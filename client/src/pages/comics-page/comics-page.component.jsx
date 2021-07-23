import React from 'react';
import axios from 'axios';

import ComicItem from '../../components/comic-item/comic-item.component';
import { CircleNotchIcon } from '../../components/home-icon/home-icon.component';

import './comics-page.styles.scss';

import COMICS_TEST_DATA from './comics-page.data.js';

class ComicsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            comics: []
        }
    }
    componentDidMount(){
        console.log('comics mounted');
        
        // Integration API Request:
        this.setState({
            comics: COMICS_TEST_DATA
        });

        // Real API Request:
        // axios({
        //     url: 'marvel',
        //     method: 'get'
        // })
        // .then(r => {
        //     if(r.data.success.data.results.length > 0){
        //         this.setState({
        //             comics: r.data.success.data.results.filter(i => i.issueNumber === 1 && i.images.length > 0 && !i.title.includes('TPB') && !i.title.includes('Paperback'))
        //         });
        //     }
        // })
        // .catch(e => {
        //     console.log(e);
        // });
    }
    render(){
        return (
            <div className="page">
                <h2>Comics</h2>
                <div className='comics-page'>
                    {this.state.comics.length < 1 ? (
                        <CircleNotchIcon />
                    ) : 
                        this.state.comics.map(comic => ( 
                            <ComicItem key={comic.id} comic={comic} /> 
                        )
                    )}
                </div>
            </div>
        );
    }
};

export default ComicsPage;