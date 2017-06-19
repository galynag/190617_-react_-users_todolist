/**
 * Created by Galina on 19.06.2017.
 */
import React, {Component} from 'react';


export default class Item extends Component {
    render(){

        const {dataId,dataItem} = this.props;
        let data = this.props.data;
        let delItem = () => {
            console.log('dflkg',{dataId},'mass',{data});
            data.splice({dataId},1);
        };
        return(
            <li>
                {dataItem}
                <button onClick={delItem}>Del</button>
            </li>
        )
    }
}