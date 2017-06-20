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
            <div>
        <input type="text"
               placeholder="type text for Hello"
               onChange={this.changeHello}
        />
                <p>{`Hello ${(this.state.textHello==='')? ', stranger!': this.state.textHello}`}</p>
            </div>
        )
    }
}