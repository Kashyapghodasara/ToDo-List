// This is my Code Which has one issue like If i Refereshed my page then all 
created task will be removed.


<!-- 
"use client"
import React, { useState } from 'react'
// useState is Asynchronous Process.

const Page = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [Task, setTask] = useState([])


    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = [...Task, { title, desc }]; // Create the new array
        setTask(newTask); // Update the state
        setDesc("");
        setTitle("");
        console.log(newTask); // Log the updated array
    };

    /* let renderTask = <h1>NO task Available Here</h1> */


    let renderTask = Task.map((task, idx) => (
        <div key={idx} className="flex justify-between items-start">
            task.preventDefault();
            <div className="flex-col">
                <h2 className="text-2xl mb-2">✏ {task.title}</h2>
                <p className="mb-5 ml-2 font-mono">{task.desc}</p>
            </div>
            <button className="self-start outline-none ml-4 px-4 py-2 bg-red-500 active:scale-90 text-white rounded hover:bg-red-600"
             onClick={(idx)=> {
                deleteHandler(idx)
             }}>  Delete
            </button>
        </div>
    ));

    const deleteHandler = (idx) => {
        let copyTask = [...Task]
        copyTask.splice(idx,1)
        setTask(copyTask);
    }

    return (
        <>
            <h1 className="text-5xl text-green-300 font-bold font-sans flex justify-center items-center mt-4 mb-6 tracking-wide">To Do List ✔</h1>
            <hr className="border-t-2 border-zinc-700 w-3/4 mx-auto mb-6" />

            <div className='flex gap-36'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className="flex h-full flex-col w-full justify-between gap-6 m-6 p-4 bg-zinc-900 rounded-lg shadow-lg max-w-md">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        className="p-3 bg-zinc-700 text-zinc-100 placeholder-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-zinc-600 transition duration-200 ease-in-out"
                        placeholder="Your Title"
                        required />
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }}
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
                    <h1>{renderTask.length === 0 ? "No tasks available" : renderTask}</h1>
                </div>
            </div>



        </>
    )
}

export default Page


 -->