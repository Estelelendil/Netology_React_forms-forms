import React, { useState } from 'react';
import List from './List';

export default function Training() {
    const [train, setTrain]=useState([])
    const [form, setForm]=useState({
        id:'',
        date:'',
        distanse:''
    })
    const handleSubmit=(evt)=>{
        evt.preventDefault();
    }
    const handleChange=(event)=>{
        const{name, value }=event.target
        setForm((prevForm)=>({...prevForm,[name]:value}))
    }
    const handleAddTrain = (e)=>{
        e.preventDefault();
        const newTrain={id:Math.floor(Math.random() * 100),date:form.date, distanse:form.distanse }
        setTrain((prevTrain)=>[...prevTrain, newTrain])
    }
    const handleRemove=(id)=>{
        setTrain((prevTrain)=>prevTrain.filter(t=>t.id!==id))
    }
    //TODO: сделать сортировку по дате
    //TODO: сделать суммирование значений
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='date' value={form.value} onChange={handleChange}></input>
        <input type='text' name='distanse' value={form.value} onChange={handleChange}></input>
        <button onClick={handleAddTrain}>ok</button>
      </form>
      <List items={train} remove={handleRemove}/>
    </div>
  );
}
