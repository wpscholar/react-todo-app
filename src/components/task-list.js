import React, {Component} from 'react'

class TaskList extends Component {

    render() {
        return (
            <div className="task-list">
                {this.props.children}
            </div>
        )
    }

}

export {TaskList}