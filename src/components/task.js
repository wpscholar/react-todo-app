import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import classNames from 'classnames'
import _ from 'lodash'

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
                <input type="checkbox"
                       checked={this.props.isComplete}
                       onChange={() => this.props.onChange(this.props.index, {isComplete: !this.props.isComplete})}/>
                <label>
                    <span onDoubleClick={() => this.setState({isEditing: true})}>{this.props.name}</span>
                    <input type="text"
                           value={this.props.name}
                           onChange={(e) => this.props.onChange(this.props.index, {name: e.target.value})}
                           onBlur={() => this.setState({isEditing: false})}/>
                </label>
                <button type="button" onClick={() => this.props.onDelete(this.props.index)}>Delete</button>
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
            onChange: (index, changes) => dispatch(_.assign({
                type: 'UPDATE_TASK',
                index: index
            }, changes)),
            onDelete: (index) => dispatch({
                type: 'DELETE_TASK',
                index: index
            })
        }
    }
)(Task);

export {TaskConnect as Task}