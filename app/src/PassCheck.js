/**
 * Created by Galina on 20.06.2017.
 */
import React,{Component} from 'react';

export default class PassCheck extends Component{
    state = {
        text:'',
    };
    checkPass = (e) => {
        console.log(e.target.value);
        this.setState({text: e.target.value});
    };


render() {
        return(
            <div>
                <h2 className="left">Задание 4: </h2>
                <p className="left">Сделать проверку пароля на правила ниже</p>
                <p className="left">Если правило выполнено, тогда пункт с соответствующим правилом перечеркнуть</p>
                <input type="text"
                       placeholder="type your Password"
                       onChange={this.checkPass.bind(this)}
                />
                <un>
                    <p>Пароль содержит:</p>
                    <li  className={(this.state.text.length>=6) ? "done":""}>минимум 6 символов</li>
                    <li  className={(this.state.text.toLowerCase() !== this.state.text) ? "done":""}>минимум одну заглавную букву</li>
                    <li className={(this.state.text.toUpperCase()  !== this.state.text) ? "done":""}>минимум одну маленькую букву</li>
                </un>
            </div>
        )
    }
}