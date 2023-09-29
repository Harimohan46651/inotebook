import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState= (props)=>{
    const initialnotes=[
        {
          "_id": "651717c2c558913709cba9b7",
          "user": "65151bb430475b1f55795a55",
          "title": "my title",
          "description": "first note added",
          "tag": "general",
          "date": "2023-09-29T18:30:26.391Z",
          "__v": 0
        },
        {
            "_id": "651717c2c558913709cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          },
          {
            "_id": "651717c2c558913709cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          },
          {
            "_id": "651717c2c558913709cba9b7",
            "user": "65151bb430475b1f55795a55",
            "title": "my title",
            "description": "first note added",
            "tag": "general",
            "date": "2023-09-29T18:30:26.391Z",
            "__v": 0
          }
      ]
      const [notes, setnotes]= useState(initialnotes)
    return (
        <NoteContext.Provider value={{notes,setnotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}
 
export default NoteState