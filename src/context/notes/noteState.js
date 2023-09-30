import { useState } from 'react'
import NoteContext from './noteContext'
import urlJoin from 'url-join';
const NoteState= (props)=>{
    
    const initialnotes= []
    const [notes, setNote]= useState(initialnotes)
      const baseUrl = "http://localhost:5000/"
    //   get allnotes
    const getAllNotes = async()=>{
        const uri = urlJoin(baseUrl,'api/notes/fetchallnotes')
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNTFiYjQzMDQ3NWIxZjU1Nzk1YTU1In0sImlhdCI6MTY5NTg4NTU1M30.F1W4SBFMAyUaFLIxXrGM6fUMCWM1ptz3ZGNMRwRJ_ww"
            }
          }
        const response = await fetch(uri,options)
          const json = await response.json()
          console.log(json)
          setNote(json)

    }
    
    //   add a note
    const addNote = (title,description,tag)=>{
        const note = {
            "_id": "651717c2c558913709cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          }
          setNote(notes.concat(note))

    }

    // delete a node
    const deleteNote= async(id)=>{
        const uri = urlJoin(baseUrl,`api/notes/deletenote/${id}`)
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxNTFiYjQzMDQ3NWIxZjU1Nzk1YTU1In0sImlhdCI6MTY5NTg4NTU1M30.F1W4SBFMAyUaFLIxXrGM6fUMCWM1ptz3ZGNMRwRJ_ww"
            }
          }
        const response = await fetch(uri,options)
          const json = await response.json()
          console.log(json)
          setNote(json)
        const newNote = notes.filter((note)=>{return note._id!==id})
        setNote(newNote)
    }

    // edit  a note
    const editNote = (id,title,description,tag)=>{
        // for(let index =0;index< notes.length;index++){
        //     const element = notes[index]
        //     if(element._id===id){
        //         element.title = title,
        //         element.description = description,
        //         element.tag = tag
        //     }
        // }
    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}
 
export default NoteState