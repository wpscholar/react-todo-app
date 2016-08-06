import React, {Component} from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="todo-app">

                <h1>To Do List</h1>

                <form>
                    <input type="text" placeholder="What needs to be done?"/>
                </form>

                <div className="task-list">

                    <div className="task">
                        <input type="checkbox"/>
                        <label>
                            <span>Normal Task</span>
                            <input type="text"/>
                        </label>
                        <button type="button">Delete</button>
                    </div>

                    <div className="task completed">
                        <input type="checkbox"/>
                        <label>
                            <span>Completed Task</span>
                            <input type="text"/>
                        </label>
                        <button type="button">Delete</button>
                    </div>

                    <div className="task editing">
                        <input type="checkbox"/>
                        <label>
                            <span>Editing Task</span>
                            <input type="text" value="Editing Task"/>
                        </label>
                        <button type="button">Delete</button>
                    </div>

                </div>

            </div>
        );
    }

}

export default App;