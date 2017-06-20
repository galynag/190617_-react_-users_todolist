/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react';
import $ from 'jquery';

//Задание 2: Изменение цвета background (state/setState)
// На поле изображено пять кнопок с названиями цветов (Желтый, Зелёный, Красный, Голубой, Оранжевый). Они окрашены в эти же цвета.
//     По клику на кнопку с названием цвета background принимает тот же цвет, который был выбран на кнопке.
export default class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = ({
            background : 'transparent'
        })
    };
    backgroundContainer=(e)=> {
        this.setState({background : e.target.value});

    };

    render() {
        $('body').css({backgroundColor: this.state.background});
        return(
            <div className="color-buttons">
                <h2 className="left">Задание 2: </h2>
                <p className="left">Изменение цвета background (state/setState)</p>
                <p className="left">На поле изображено пять кнопок с названиями цветов (Желтый, Зелёный, Красный, Голубой, Оранжевый). Они окрашены в эти же цвета.</p>
                <p className="left">По клику на кнопку с названием цвета background принимает тот же цвет, который был выбран на кнопке.</p>
                <div className="answer">
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
            </div>
        )
    }
}