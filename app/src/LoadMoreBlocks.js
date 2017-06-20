/**
 * Created by Galina on 20.06.2017.
 */
import React,{Component} from 'react';
import BlocksItem from './BlocksItem';

export default class LoadMoreBlocks extends Component {

    state ={
        counterBox: 1
    };
    loadMore = () => {
        if (this.state.counterBox<=5)  this.setState({counterBox:++this.state.counterBox})
        else return false;
    };
    render() {
        return(
            <div>
                <h2 className="left">Задание 7: </h2>
                <p className="left">При нажатии на кнопку Load сделать добавление квадратиков на страницу.</p>
                <BlocksItem  data=""/>
                <BlocksItem  data={(this.state.counterBox >=2) ? "":" none"} />
                <BlocksItem  data={(this.state.counterBox >=3) ? "":" none"}/>
                <BlocksItem  data={(this.state.counterBox >=4) ? "":" none"}/>
                <BlocksItem  data={(this.state.counterBox >=5) ? "":" none"}/>
                <BlocksItem  data={(this.state.counterBox >=6) ? "":" none"}/>
                <button
                    onClick={this.loadMore}
                >Load More</button>
            </div>
        )
    }
};