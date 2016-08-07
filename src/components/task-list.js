import React, {Component} from 'react'
import {Task} from './task';

class TaskList extends Component {

    render() {
        return (
            <div className="task-list">
                {this.props.tasks.map(this.renderTask.bind(this))}
            </div>
        )
    }

    renderTask(task, index) {
        return <Task key={index} {...task}/>
    }

}

export {TaskList}