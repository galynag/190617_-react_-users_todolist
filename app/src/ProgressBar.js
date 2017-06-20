/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';

export default class ProgressBar extends Component {
    state = {
        counterDiv:0
    }
    progressBar = () => {
        (this.state.counterDiv<=90) ?  this.setState({counterDiv: this.state.counterDiv+10}): alert('ProgressBar не может быть больше 100 :=)')

    };
    clearProgressBar = () => {
        this.setState({counterDiv : 0});
        $('#inner-counter').css({width: 0});
    }
    render(){
        $('#inner-counter').css({width: (this.state.counterDiv+'%')});
        return(
            <div>
                <h2 className="left">Задание 6: </h2>
                <p className="left">Progress bar. При нажатии на кнопку + нужно увеличивать заполненность.</p>
                <div id="counter">
                    <div id="inner-counter">
                        {this.state.counterDiv}%
                    </div>
                </div>
                <button className="btn-bar"
                        onClick={this.progressBar}
                >+</button>
                <button className="btn-bar"
                        onClick={this.clearProgressBar}
                >Clear</button>

            </div>
        )
    }
}