// Date - 16-11-2024   -   Saturday
// Date - 19-11-2024   -   Tuesday

// My Orignal Project is In Readme Fiel. This is Updated Version of My project using ChatGPT.


"use client"
import React, { useState } from 'react'

const Page = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [Task, setTask] = useState(() => {
        // Load the tasks from sessionStorage on initial render
        const savedTasks = sessionStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    })

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { title, desc }; // Create the new task object
        const updatedTasks = [...Task, newTask]; // Add new task to the list
        setTask(updatedTasks); 
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to sessionStorage
        setDesc("");
        setTitle(""); 
    };

    const deleteHandler = (idx) => {
        let updatedTasks = [...Task]
        updatedTasks.splice(idx,1)
        setTask(updatedTasks);
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update sessionStorage
    };

    const renderTask = Task.length === 0 ? (
        <h1>No tasks available</h1>
    ) : (
        Task.map((task, idx) => (
            <div key={idx} className="flex justify-between items-start">
                <div className="flex-col">
                    <h2 className="text-2xl mb-2">✏ {task.title}</h2>
                    <p className="mb-5 ml-2 flex-grow font-mono">{task.desc}</p>
                </div>
                <button
                    className="self-start outline-none ml-4 px-4 py-2 bg-red-500 active:scale-90 text-white rounded hover:bg-red-600"
                    onClick={() => deleteHandler(idx)}>
                    Delete
                </button> 
            </div>
            
        ))
    );

    return (
        <>
            <h1 className="text-5xl text-green-300 font-bold font-sans flex justify-center items-center mt-4 mb-6 tracking-wide">To Do List ✔</h1>
            <hr className="border-t-2 border-zinc-700 w-3/4 mx-auto mb-6" />

            <div className='flex gap-36'>
                <form onSubmit={submitHandler} className="flex h-full flex-col w-full justify-between gap-6 m-6 p-4 bg-zinc-900 rounded-lg shadow-lg max-w-md">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-3 bg-zinc-700 text-zinc-100 placeholder-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-zinc-600 transition duration-200 ease-in-out"
                        placeholder="Your Title"
                        required />
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="p-3 bg-zinc-700 text-zinc-100 placeholder-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-zinc-600 transition duration-200 ease-in-out"
                        placeholder="Your Description" />
                    <button
                        type="submit"
                        className="mt-4 p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 ease-in-out shadow-lg">
                        Submit
                    </button>
                </form>

                <div className="flex flex-col w-full max-h-max gap-4 m-6 p-4 bg-zinc-900 rounded-lg shadow-lg">
                    <h1 className="flex text-4xl justify-center">Task's</h1>
                    <hr className="flex border-t-2 border-zinc-600 w-full" />
                    {renderTask}
                </div>
            </div>
        </>
    )
}

export default Page;
