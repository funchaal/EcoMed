import { useEffect, useState } from "react"
import React from 'react'

import Typing from "./Typing"

export default function Chat() {

    const API_KEY = "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"
    const [conversation, setConversation] = useState([{ role: "system", content: "Você é um assistente que responde apenas coisas sobre o mar, então para toda e qualquer pergunta que você receber, responda apenas curiosidades sobre o mar, sem exceção." }, { role: "assistant", content: "Você é um assistente que responde apenas coisas sobre o mar, então para toda e qualquer pergunta que você receber, responda apenas curiosidades sobre o mar, sem exceção." }])

    const [disabled, setDisabled] = useState(false)

    const add = (e) => {
        if (e.key != "Enter") return
        const input = document.getElementById("chat-input")
        const value = input.value
        if (!value) return
        input.value = ""
        setDisabled(true)
        setConversation([...conversation, { role: "user", content: value }])
    }


    useEffect(() => {

        console.log(conversation)
        const chat = document.getElementById('conversation')
        const delay = setTimeout(() => {
            chat.scrollTop = chat.scrollHeight;
        }, 100);



        if (conversation.slice(-1)[0].role == "user") {
            setTimeout(() => setConversation([...conversation, { role: "loading", content: null }]), 500)
            setTimeout(() => {
                document.querySelector("#conversation .loading").classList.add("out")
                setTimeout(() => setConversation([...conversation, { role: "assistant", content: "O mar é o lar da maior estrutura viva do mundo, que é a Grande Barreira de Recife. Em suma, ela tem cerca de 2.600 km de compriment." }]), 300)
                setDisabled(false)
            }, 4000)

        }

        // if (conversation.slice(-1)[0].role == "user") {
            // setTimeout(() => setConversation([...conversation, { role: "loading", content: null }]), 500)
        //     fetch("https://api.openai.com/v1/chat/completions", {
        //         method: "POST", 
        //         headers: {
        //             Accept: "application/json", 
        //             "Content-Type": "application/json", 
        //             Authorization: `Bearer ${API_KEY}`
        //         }, 
        //         body: JSON.stringify({
        //             model: 'gpt-3.5-turbo', 
        //             messages: conversation, 
        //             max_tokens: 50, 
        //             temperature: 0.9
        //         })
        //     })
        //     .then((res) => return res.json())
        //     .then((res) => {
                //    document.querySelector("#conversation .loading").classList.add("out")
                    // setTimeout(() => setConversation([...conversation, { role: "assistant", content: res.choices[0].message.content }]), 300)
        //              setDisabled(false)
        //     })
        //     .catch((error) => setConversation([...conversation, { role: null, content: "error" }]))
        // }
    }, [conversation])

    return(
        <div id="chat">
          <div>
            <div id="conversation">
                <div>
                    {/* <div className="fill" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h3 style={{ fontSize: "2rem", fontWeight: "600", color: "rgba(255, 255, 255, 0.6)" }}>
                            Assistente
                        </h3>
                        <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.6)", textAlign: "center" }}>Sinta-se livre para perguntar o que quiser.</p>
                    </div> */}
                    {   
                        conversation.map((val, index) => {
                            if (val.role == "loading") {
                                return <p className={"assistant loading push"}><Typing /></p>
                            } else {
                                return (val.role != "system" && val.role != null) ? <p className={`${val.role} ${index + 1 == conversation.length ? "push" : ""}`}>{ val.content }</p> : ""
                            }
                        })
                    }
                </div>
            </div>
            <input type="text" id="chat-input" disabled={disabled} onKeyDown={(e) => add(e)} placeholder="Exemplo: Qual o objetivo do projeto?"></input>
          </div>
        </div>
    )
}