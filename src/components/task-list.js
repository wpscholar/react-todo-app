import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Task} from './task';

class TaskList extends Component {

    render() {

        if (!this.props.tasks.length) {
            return null;
        }

        return (
            <div className="task-list">
                {this.props.tasks.map(this.renderTask.bind(this))}
            </div>
        )
    }

    renderTask(task, index) {
        return <Task key={index} index={index} {...task}/>
    }

}

const TaskListConnect = connect(
    (state) => {
        return {
            tasks: state.tasks
        }
    }
)(TaskList);

export {TaskListConnect as TaskList}