'use client'
import React, { useState } from 'react'
import Navbar from "../components/navbar"
function craft() {
  const [content, setContent] = useState('')
  const [response, setResponse] = useState('')
  

  async function handleSubmit(event) {
    event.preventDefault();

    if (!content){
      alert('Please enter a premise');
      return;
    };

    //POST api/completion
    console.log(JSON.stringify({ 
      role: 'user',
      content: content, 
    }))
    await fetch('/api/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        role: 'user',
        content: content, 
      })
    })
    .then(async(res) => {
      const reader = res.body?.getReader();

      while (true) {
        const { done, value } = await reader?.read();

        if (done) {
          break;
        }
        var currentChunk = new TextDecoder().decode(value);
        setResponse((prev) => prev + currentChunk);
      }
    })

    setContent('');
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold">Start with a Premise</h1>
      <div className="w-[50%] items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-4 mt-12">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your premise"
            className="mt-2 px-4 py-2 rounded-lg min-w-full text-black shadow-md"
          />
          <button type="submit" className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-purple-600 text-white w-48 shadow-md">Submit</button>
        </form>
        {response !== '' ? 
          <div className="flex flex-col items-center justify-center space-x-4 bg-white text-black rounded-sm mt-12 p-10">
            Premise: {content}
            <br></br>
            Narrative: {response}
          </div>
        : 
        null 
        }
      </div>
    </div>
    </>
  )
}

export default craft