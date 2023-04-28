import './taskList.css';

function TaskList({task, setTask, taskList, setTaskList}) {

    // function handleEdit(id) {
    //     const editTask = task.find(task => id === task.id);
    //     setTaskList(editTask)
    // }

    function handleDelete(id) {
        const newTask = task.filter(task => id !== task.id)
        setTask(newTask)
    }

    return (
        <div className="taskList">
            <div className="top">
                <div className="top-left">
                    <h2>Todo</h2>
                    <span id='length'>{task.length}</span>
                </div>
                <div className="top-right">
                    <div className="btn" onClick={() => setTask([])}>Clear All</div>
                </div>
            </div>
            <div className="showTask">
                {task.map(data => (
                    <div className="card" key={data.id}>
                        <div className="card-top">
                            <h4>{data.name}</h4>
                            <div>
                                {/* <span onClick={() => handleEdit(data.id)}>Edit</span> */}
                                <span onClick={() => handleDelete(data.id)}>Delete</span>
                            </div>
                        </div>
                        <p>{data.time}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default TaskList;