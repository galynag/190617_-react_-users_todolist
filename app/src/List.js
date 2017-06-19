/**
 * Created by Galina on 19.06.2017.
 */
import React, {Component} from 'react';
import Item from './Item';




export default class List extends Component {
    render(){
        const {data} = this.props;

       let templateList = data.map(function(item,index) {
            return(
                <ul key={index}>
                    <Item data={data} dataId={index} dataItem={item} />
                </ul>
            )
        });
        return(
            <div>
                {templateList}
                'Hello'
            </div>
        )
    }
}