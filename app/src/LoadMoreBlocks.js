/**
 * Created by Galina on 20.06.2017.
 */
import React,{Component} from 'react';
import BlocksItem from './BlocksItem';

export default class LoadMoreBlocks extends Component {
    state = {
        classBox1:'none',
        classBox2:'none',
        classBox3:'none',
        classBox4:'none',
        classBox5:'none'
    }
    loadMore = () => {
        this.setState({counterBox:this.state.counterBox+5})
    }
    render() {
        return(
            <div>
                <h2 className="left">Задание 7: </h2>
                <p className="left">При нажатии на кнопку Load сделать добавление квадратиков на страницу.</p>
                <BlocksItem />
                <BlocksItem data={this.state.classBox1} />
                <BlocksItem data={this.state.classBox2} />
                <BlocksItem data={this.state.classBox3} />
                <BlocksItem data={this.state.classBox4} />
                <BlocksItem data={this.state.classBox5} />

                <button
                    onClick={this.loadMore}
                >Load More</button>
            </div>
        )
    }
}