import React, {Component} from 'react';
import {CreateTask} from './components/create-task';
import {TaskList} from './components/task-list';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="todo-app">

                <h1>To Do List</h1>

                <CreateTask />

                <TaskList />

            </div>
        );
    }

}

export default App;