import React, {Component} from 'react'

class CreateTask extends Component {

    render() {
        return (
            <form>
                <input type="text" placeholder="What needs to be done?"/>
            </form>
        )
    }

}

export {CreateTask}