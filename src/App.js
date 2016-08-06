import React, {Component} from 'react';
import {CreateTask} from './components/create-task';
import {TaskList} from './components/task-list';
import {Task} from './components/task';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="todo-app">

                <h1>To Do List</h1>

                <CreateTask />

                <TaskList>

                    <Task className="task" name="Normal Task"/>
                    <Task className="task completed" name="Completed Task"/>
                    <Task className="task editing" name="Editing Task"/>

                </TaskList>

            </div>
        );
    }

}

export default App;