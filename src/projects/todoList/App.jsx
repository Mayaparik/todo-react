import React, { use } from 'react'
import { useState } from 'react'

function App() {

  const [works, setWorks] = useState([])

  const [update, setUpdate] = useState(false)

  const [indexUpdate, setIndexUpdate] = useState(null)

  const [task, setTask] = useState("")

  function workSubmit() {
    if(task.trim() === "") return ;
    if (update) {
      let restOfItems = works.filter((work, i) => indexUpdate !== i)
      setWorks([...restOfItems, task.trim()])
      setTask("")
      setUpdate(false)
    } else {
      setWorks([...works, task.trim()])
      setTask("")
      console.log(task.length);
      
    }
  }

  function clearWork(deleteTask) {
    setWorks(works.filter((work, i) => deleteTask !== work))

    // second way
    // setWorks(works.filter((work, i)=>
    //     i !== index
    // ))
    // console.log(index);
  }

  function handleUpdate(work, i) {
    setTask(work)
    setUpdate(true)
    setIndexUpdate(i)
  }

  return (
    <div className=' h-screen w-screen text-center py-4 bg-white text-black '>
      <div className='w-[600px] h-full shadow-md mx-auto text-center space-y-3'>
        <h2 className='text-2xl font-extrabold'>TO DO LIST</h2>
        <div className=' rounded-lg w-[550px] mx-auto  p-3 space-x-2 space-y-3'>
          <div className='flex gap-4'>
            <input type="text" placeholder='Type work to do' name="" id="" onChange={(event) => setTask(event.target.value)} value={task} className='text-left py-1 px-2 w-10/12 border border-zinc-400 rounded-lg' />
            <button className='px-3 py-1 rounded-lg  text-white text-md' onClick={() => workSubmit()}>Add</button>
          </div>
          <ul className='text-left list-inside text-lg space-y-3'>
            {
              works.map((work, i) => {
                return <li key={i} className='bg-sky-500/60  px-3 py-2 list-disc rounded-lg text-white flex justify-between items-center'>{i + 1} . {work}
                  <i onClick={() => handleUpdate(work, i)} className="bi bi-pencil text-xl text-white cursor-pointer px-2 hover:bg-sky-700/60 py-1 rounded-lg"></i>
                  <i onClick={() => clearWork(work)} className="bi bi-trash text-xl text-white cursor-pointer px-2 hover:bg-sky-700/60 py-1 rounded-lg"></i></li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
