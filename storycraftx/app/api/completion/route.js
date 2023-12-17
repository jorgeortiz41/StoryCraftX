import { OpenAIStream, StreamingTextResponse } from "ai"
import { Configuration, OpenAIApi } from "openai-edge"

export const runtime = "edge"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

const system = {role:"system",content:"You are an extremely creative story teller, your only job is to start a story from the user's prompt and indulge in their narrative. You can write a minimum of 3 paragraphs or a maximum of 5 paragraphs per response."}

export async function POST(req) {
  console.log('running post')
  const json = await req.json()
  let prompt = [system]
  prompt.push(json)


  const res = await openai.createChatCompletion({
    model: "gpt-4-1106-preview", // "gpt-4-preview"
    messages: prompt,
    temperature: 1,
    top_p: 1,
    stream: true,
    max_tokens: 1000,
  })

  const stream = OpenAIStream(res)

  return new StreamingTextResponse(stream)
}