import React, { useState } from 'react'

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState();

    const submitTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue])
            setInputValue('')
        }
        else {
            alert('Fill the input')
        }
    }
    console.table(todos)
    return (
        <>
            <div className='w-150 flex items-center justify-center  gap-5 mx-auto mt-20 p-4'>
                <input type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} id='input' name='todo'
                    placeholder='Enter Todo'
                    className='outline-black text-lg border-2 border-green-950 text-green-950 rounded-2xl w-[70%] p-4' />
                <button type="button" className='w-[30%] p-4 bg-green-950 rounded-2xl text-white text-2xl cursor-pointer' onClick={submitTodo}>Add Todo</button>

            </div>
            <div className=" w-150 mx-auto mt-5 p-5">
                <ul>
                    {todos.map((items, index) => <li className='text-xl my-5' key={index}>{items}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Todo