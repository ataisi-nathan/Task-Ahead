import './task.css';

function Task({task, setTask, taskList, setTaskList}) {

    function handleSubmit(e) {
        e.preventDefault();

        if(task.id) {
            const date = new Date();
            const updateTaskList = taskList.map((task) => (
                task.id === taskList.id ? {id: taskList.id, name: taskList.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : task 
            ))
            console.log(updateTaskList)
            setTaskList(updateTaskList)

        } else {
            let date = new Date()
            const newTaskList = {
                id : date.getTime(),
                name : e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            } 
            console.log(newTaskList)
            setTask([...task, newTaskList])
            e.target.task.value='';
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={taskList.name} autoComplete='off' onChange={(e) => setTaskList(e.target.value)} id="task" placeholder="add task" />
            <button type="submit">Add</button>
        </form>
    );
}
export default Task;