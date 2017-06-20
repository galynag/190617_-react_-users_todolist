/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';

export default class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = ({
            background : 'transparent'
        })
    };
    backgroundContainer=(e)=> {
        this.setState({background : e.target.value});

    }
    render() {
        console.log(this.state.background);
        $('body').css({backgroundColor: this.state.background});
        return(
            <div className="color-buttons">
                <button className="yellow"
                        value="yellow"
                        onClick = {this.backgroundContainer}
                >Yellow</button>
                <button className="green"
                        value="green"
                        onClick = {this.backgroundContainer}
                >Green</button>
                <button className="red"
                        value="red"
                        onClick = {this.backgroundContainer}
                >Red</button>
                <button className="blue"
                        value="blue"
                        onClick = {this.backgroundContainer}
                >Blue</button>
                <button
                        value="transparent"
                        onClick = {this.backgroundContainer}
                >Clean Body Background</button>
            </div>
        )
    }
}