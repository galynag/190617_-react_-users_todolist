/**
 * Created by Galina on 19.06.2017.
 */
import React, {Component} from 'react';

export default class List extends Component {
    render(){
        const {data} = this.props;
        let delItem = (e) => {
            data.splice(e.target.value,1);
            this.setState({list:data})
        };
        let templateList = data.map(function(item,index) {
             return(
                 <li key={index}>
                     <span>
                         {item}
                     </span>
                     <button
                         onClick={delItem}
                         value={index}
                     >Del</button>
                 </li>
             )
         });
        return(
            <div>
                <ol>
                    {templateList}
                </ol>
            </div>
        )
    }
}