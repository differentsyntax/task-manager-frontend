// task-manager-frontend/src/TaskList.js
import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/tasks/')
            .then((response) => response.json())
            .then((data) => setTasks(data));
    }, []);

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
