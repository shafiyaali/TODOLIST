import React, { useState } from 'react';
import TudoItem from './TudoItem';
const Tudo = () => {

    const [text, setText] = useState("");
    const [tudoList, setTudoList] = useState([]);

    const addItem = (text) => {
        const newItem = {
            id : Date.now(),
            text,
            completed : false
        };
        setTudoList([...tudoList, newItem]);
        setText("");
        console.log("new Item",newItem);
    }
    const toggleComplete = (id) =>{
        setTudoList(tudoList.map( tudo => {
            if(tudo.id === id) {
            return {...tudo, completed : !tudo.completed};
            } else {
                return tudo;
            }
        }));
    }
    const deleteTask =(id) =>{
        setTudoList(tudoList.filter(tudo => tudo.id !== id ));
    }
    console.log("Tudo List", tudoList);
  return (
    <>
        <div className='grid-container'>
           
            <input className='grid-item input-grid' onChange={e => setText(e.target.value)} value={text}></input>
            <button disabled ={text ? false : true} className='grid-item button-grid' onClick={() => addItem(text)}>Add Task</button>
        </div>
        {tudoList.map((task,idx)=> (
            
            <TudoItem  key= {"item_"+idx} 
                task={task} 
                toggleComplete={toggleComplete} 
                deleteTask={deleteTask}
            />
            
        ))} 
    </>
  );
}

export default Tudo;