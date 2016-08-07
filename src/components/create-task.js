import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

class CreateTask extends Component {

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="What needs to be done?"/>
            </form>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        const input = ReactDOM.findDOMNode(this).querySelector('input');
        this.props.onSubmit(input.value);
        input.value = '';
    }

}

const CreateTaskConnect = connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            onSubmit: (name) => dispatch({
                type: 'CREATE_TASK',
                name: name,
                isComplete: false
            })
        }
    }
)(CreateTask);

export {CreateTaskConnect as CreateTask}