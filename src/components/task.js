import React, {Component} from 'react'

class Task extends Component {

    render() {
        return (
            <div className={this.props.className}>
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