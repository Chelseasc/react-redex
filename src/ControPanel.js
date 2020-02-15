import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
    margin: '20px'
};

class ControlPanel extends Component {
    render() {
        // console.log('进入 ControlPanel 渲染');
        return (
            <div style={style}>
                <Counter caption="First"/>
                <Counter caption="Second" initValue={10} />
                <Counter caption="Third" initValue={20} />
                <button onClick={ () => this.forceUpdate() }>
                    Click me to re-render!
                </button>
            </div>
        );
    }
}

export default ControlPanel;