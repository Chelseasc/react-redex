import React, { Component } from 'react';

const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    // 接收传入的prop
    constructor(props) { // 构造函数中通过参数获得传入prop值，其他函数（比如render()通过this.props获得
        super(props); // 通过super调用父类

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue || 0
        }
    }

    /*
    getInitialState() {
      console.log('enter getInitialState');
    }
    getDefaultProps() {
      console.log('enter getDefaultProps');
    }
    */

    componentWillReceiveProps(nextProps) {
        // console.log('enter componentWillReceiveProps ' + this.props.caption)
    }

    componentWillMount() {
        // console.log('enter componentWillMount ' + this.props.caption);
    }

    componentDidMount() {
        // console.log('enter componentDidMount ' + this.props.caption);
    }

    onClickIncrementButton() {
        this.setState({count: this.state.count + 1});
    }

    onClickDecrementButton() {
        this.setState({count: this.state.count - 1});
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps:',nextProps);
        console.log('nextState:',nextState);
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}





export default Counter;