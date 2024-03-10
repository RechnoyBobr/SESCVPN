"use client"
import { useState, useEffect } from 'react'
export default function Form() {
  const [data, setData] = useState('');
  async function handler(e) {
    e.preventDefault();
    const form = e.target;
    const Data = new FormData(form);
    console.log(Data);
    const res = await fetch('http://backend:5000', { method: "POST", body: JSON.stringify(Data) });
    const product = res.json(); // Json with field config containing finished unique config for user 
    setData(product)
    // TODO: output config
  }
  return (
    // TODO: Add checkbox for reverse proxy
    <div>
      <form className="flex gap-5 flex-col align-center" method="POST" onSubmit={handler}>
        <input className="text-black w-1/4 justify-self-center" type="text" placeholder="Input e-mail" name="email" />
        <input className="w-1/4 text-black" type="text" placeholder="Input name" name="login" />
        <button type="submit">Submit</button>
      </form >
      <div>{data}</div>
    </div>
  )
}
