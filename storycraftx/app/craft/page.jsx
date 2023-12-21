'use client'
import React, { useState } from 'react'

function craft() {
  const [content, setContent] = useState('')
  const [response, setResponse] = useState('')
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  

  async function handleSubmit(event) {
    event.preventDefault();
    loading ? setLoading(false) : setLoading(true)

    if (!content){
      alert('Please enter a premise');
      return;
    };
    history.push({role: 'user', content: content})
    let newHistory = history
    const arrayOfJSONStrings = newHistory.map(obj => JSON.stringify(obj));
    
    //POST api/completion
    console.log(arrayOfJSONStrings)
    await fetch('/api/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: arrayOfJSONStrings
    })
    .then(async(res) => {
      const reader = res.body?.getReader();

      while (true) {
        const { done, value } = await reader?.read();

        if (done) {
          setHistory((prev) => [...prev, {role: 'assistant', content: response}])
          break;
        }
        var currentChunk = new TextDecoder().decode(value);
        setLoading(false)
        setResponse((prev) => prev + currentChunk);
      }
    })

    setContent('');
  };

  return (
    <>
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
          <div className="flex flex-col items-center justify-center space-x-4 bg-white text-black rounded-lg mt-12 p-10">
            Premise: {content}
            <br></br>
            Narrative: {response}
          </div>
        : 
        null
        }
        {loading ? 
        <div className="flex flex-col items-center justify-center space-x-4 bg-white text-black rounded-lg mt-12 p-10">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
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