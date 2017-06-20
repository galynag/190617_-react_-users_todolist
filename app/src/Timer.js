/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react';

export default class Timer extends Component{
    state = {
        counter:0,

    };
    componentDidMount() {
        this.setState({counter: 0});
        this.startTimer = setInterval(this.timerF, 1000);
    };
    restart = () => {
        clearInterval(this.startTimer);
        this.setState({counter: 0});
        this.startTimer = setInterval(this.timerF, 1000);
    };
    timerF = () => {
        this.setState({
                counter: ++this.state.counter});
    };
    stopTimer=()=>{
        clearInterval(this.startTimer);
    };
    render() {

return(
    <div>
        <h2 className="left">Задание 5: </h2>
        <p className="left">таймер должен содержать внутри себя методы, которые мы прошли сегодня - componentDidMount - componentDidUnmount.</p>
        <div className="answer center">
        <p>Прошло <b> {this.state.counter}</b> секунд с момента загрузки страницы</p>
            <button
                onClick={this.stopTimer}
            >Stop Timer</button>
            <button
                onClick= {this.restart}
            >Restart</button>
            <div className="counter">
                <div className="inner-counter">
                    {this.state.counterDiv}
                </div>
            </div>
        </div>
    </div>
)
    }
}