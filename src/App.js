import React, {Component} from 'react';
import {CreateTask} from './components/create-task';
import {TaskList} from './components/task-list';
import './App.css';

const tasks = [
    {
        name: "Normal Task",
        isComplete: false
    },
    {
        name: "Completed Task",
        isComplete: true
    }
];

class App extends Component {

    render() {
        return (
            <div className="todo-app">

                <h1>To Do List</h1>

                <CreateTask />

                <TaskList tasks={tasks}/>

            </div>
        );
    }

}

export default App;