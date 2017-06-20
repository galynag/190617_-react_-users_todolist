/**
 * Created by Galina on 20.06.2017.
 */
import React, {Component} from 'react'

export default class InputHello extends Component{
    constructor(props){
      super(props);
      this.state=({
          textHello:''
      })
    };
    changeHello = (e) => {
        this.setState({textHello:e.target.value})
    }
    render() {
        return(
            <div >
                <h2 className="left">Задание 3: </h2>
                <p className="left">Написать динамический Hello World.</p>
                <p className="left">В поле ввода вводится текст. Снизу надпись, которая отображает “Hello, введенный текст!”.</p>
                <p className="left">Текст должен меняться по мере ввода. Если в поле ничего не введено, то должно быть выведено “Hello, stranger!”.</p>
                <div className="answer center">
                    <input type="text"
                           placeholder="type text for Hello"
                           onChange={this.changeHello}
                    />
                            <p>{`Hello ${(this.state.textHello==='')? ', stranger!': this.state.textHello}`}</p>
                        </div>
            </div>
        )
    }
}