import React from 'react';
import DetailItem from '../details-item/details-item.component';
import './details.styles.scss';

class DetailsComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            aboutModule: { title: 'TBD', para: 'Will be acquired...'},
            infoItems: [],
            priceHistoryItems: []
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0);
        this.setState({
            aboutModule: {
                title: 'Assets Acquired',
                para: 'Infrastructure online. Processing... Vis-a-vis nullam placerat ac magna id laoreet. Maecenas feugiat, est vitae vestibulum tristique, urna felis faucibus lacus, et congue enim turpis quis diam. Sed imperdiet dui ac nisl malesuada, sit amet blandit risus hendrerit. Fusce rhoncus interdum mi id aliquet. Donec maximus vehicula turpis sit amet bibendum. In id nisi ac urna porttitor congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'
            },
            infoItems:  [
                {
                    id: 1,
                    stat: 'Oversight',
                    val: 'FLS Industries'
                },
                {
                    id: 2,
                    stat: 'Date',
                    val: 'October 18, 2020'
                },
                {
                    id: 3,
                    stat: 'UPC',
                    val: '75960609466002011'
                },
                {
                    id: 4,
                    stat: 'Creator',
                    val: 'Jane Queen'
                }
            ],
            priceHistoryItems: [
                {
                    id: 5,
                    stat: 'Beta (5Y Monthly)',
                    val: 'N/A'
                },
                {
                    id: 6,
                    stat: '52-Week Change',
                    val: 'N/A'
                },
                {
                    id: 7,
                    stat: 'Market 52-Week Change',
                    val: 'N/A'
                },
                {
                    id: 8,
                    stat: '52-Week High',
                    val: 'N/A'
                },
                {
                    id: 9,
                    stat: '52-Week Low',
                    val: 'N/A'
                },
                {
                    id: 10,
                    stat: '50-Day MA',
                    val: 'N/A'
                },
                {
                    id: 11,
                    stat: '200-Day MA',
                    val: 'N/A'
                }

            ]
        });
    }
    render(){
        return (
            <div className='details'>
                <div className='list-hdr f20'>Information</div>
                {this.state.infoItems.map(({id, ...otherInfoItemAttrs}) => (
                    <DetailItem key={id} {...otherInfoItemAttrs} />
                ))}
                <h2>{this.state.aboutModule.title}</h2>
                <div className='para'>{this.state.aboutModule.para}</div>
                <div className='list-hdr f20'>Price History</div>
            {this.state.priceHistoryItems.map(({id, ...otherPriceHistoryItemAttrs}) => (
                    <DetailItem key={id} {...otherPriceHistoryItemAttrs} />
                ))}
            </div>
        );
    }   

}

export default DetailsComponent;