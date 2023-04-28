import { useEffect, useState } from 'react';
import Header from "./components/header";
import Task from "./components/task";
import TaskList from "./components/taskList";
import './app.css'

function TaskAheadApp() {

    const [task, setTask] = useState( JSON.parse(localStorage.getItem("task") || []))
    const [taskList, setTaskList] = useState({});

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task))
    }, [task])

    return (
        <main className="taskAhead">
            <Header />
            <Task task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList} />
            <TaskList task={task} setTask={setTask} taskList={taskList} setTaskList={setTaskList}/>
        </main>
    )
}
export default TaskAheadApp;