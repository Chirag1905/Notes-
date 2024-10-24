import { useEffect } from 'react'
import logo from './assets/note.png'
import deleteIcon from './assets/delete.png'
import { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    updateStorage();
  }, [notes])

  const handleCreateNote = () => {
    setNotes([...notes, ""]);
  }

  const handleDeleteNote = (index) => {
    console.log("delete-", index);
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }

  const handleNoteChange = (index, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = value;
    setNotes(updatedNotes);
  }



































  
  const updateStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }

  return (
    <>
      <div className='bg-gradient-to-br from-emerald-500 to-cyan-600 w-screen min-h-screen text-white pt-4 pl-10'>
        <h1 className='flex item-center justify-center text-3xl font-semibold'><img src={logo} alt='logo' />My Notes</h1>
        <button className="bg-gradient-to-br from-lime-300 to-green-500 font-bold cursor-pointer outline-none border-none rounded-full py-4 px-6 my-8 mx-5" onClick={handleCreateNote}>Create Notes</button>
        <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-0'>
          {
            notes.map((note, index) => (
              <div key={index}>
                <textarea
                  onChange={(e) => handleNoteChange(index, e.target.value)}
                  className='w-2/3 max-w-md min-h-48 bg-gradient-to-br from-green-200 to-white text-gray-700 outline-none rounded-md p-5 m-5'
                />
                <img src={deleteIcon} alt="delete" className='cursor-pointer text-white w-7 h-7' onClick={() => handleDeleteNote(index)} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App