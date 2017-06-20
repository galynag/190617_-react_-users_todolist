/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react';

export default class BlocksItem extends Component {
    render() {
        return(
            <div className={`answer ${this.props.data}`}>
                <div className="box" >1</div>
                <div className="box">1</div>
                <div className="box">1</div>
                <div className="box">1</div>
                <div className="box">1</div>
            </div>
        )
    }
}