import { createAgent } from "langchain";
import { ChatOllama } from "@langchain/ollama"; 
import { WikipediaQueryRun } from "@langchain/community/tools/wikipedia_query_run";
import fs from 'fs-extra';
await fs.writeFile('test.txt', 'Hello World!');
const content = await fs.readFile('test.txt', 'utf-8');
// console.log(content);

//tool
// const searchTool=new TavilySearch({
//     maxResults:2,
//     topic:"news",
//     tavilyApiKey:'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'

// })

const tool = new WikipediaQueryRun({
  topKResults: 3,
  maxDocContentLength: 4000,
});


const ollama= new ChatOllama({
  model:'qwen3:0.6b',
  temperature:0.8,
});

 const model =createAgent({
    model:ollama,
    tools: [tool],
});

// const run = async () => {
// try{
//    let response = await model.invoke({
//         messages: "give me a summary on the partition of india and pakistan in 1947" 
//         //messages=prompt
//          });
//          console.log(response.messages[1].content)
// } catch (e){
//     console.log(e);
// }
// };
// run();

const run = async () => {
  try {

 
    const query = await fs.readFile("test.txt", "utf-8");

    let response = await model.invoke({
      messages: query
    });

    const output = response.messages[1].content;

    console.log(output);

   
    await fs.writeFile("output.txt", output);

  } catch (e) {
    console.log(e);
  }
};

run();