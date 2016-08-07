import React, {Component} from 'react'
import classNames from 'classnames'

class Task extends Component {

    render() {

        const classes = {
            'task': true,
            'completed': this.props.isComplete
        };

        return (
            <div className={classNames(classes)}>
                <input type="checkbox"/>
                <label>
                    <span>{this.props.name}</span>
                    <input type="text" defaultValue={this.props.name}/>
                </label>
                <button type="button">Delete</button>
            </div>
        )
    }

}

export {Task}