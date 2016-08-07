import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import classNames from 'classnames'

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {

        const classes = {
            'task': true,
            'completed': this.props.isComplete,
            'editing': this.state.isEditing
        };

        return (
            <div className={classNames(classes)}>
                <input type="checkbox"/>
                <label>
                    <span onDoubleClick={() => this.setState({isEditing: true})}>{this.props.name}</span>
                    <input type="text"
                           value={this.props.name}
                           onChange={(e) => this.props.onChange(this.props.index, e.target.value)}
                           onBlur={() => this.setState({isEditing: false})}/>
                </label>
                <button type="button">Delete</button>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isEditing && !prevState.isEditing) {
            const node = ReactDOM.findDOMNode(this).querySelector('input[type="text"]');
            node.focus();
            node.setSelectionRange(node.value.length, node.value.length);
        }
    }

}

const TaskConnect = connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            onChange: (index, name) => dispatch({
                type: 'SET_TASK_NAME',
                index: index,
                name: name
            })
        }
    }
)(Task);

export {TaskConnect as Task}