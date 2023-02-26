import React from 'react';

export default function List({items, remove}) {
  return (
    <div>
      {items.map(item=>{
        return (<div key={item.id}>
            <p>item.date</p>
            <p>item.distanse</p>
            <button onClick={remove}>remove</button>
        </div>)
      })}
    </div>
  );
}
