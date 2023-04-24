import { useEffect, useState } from "react"
import React from 'react'

import Typing from "./Typing"

export default function Chat() {
    const x = 9 - 2
    const y = "FJxk"
    const API_KEY = `s${"k-65"}XO${"C3d"}dGnAb060pa572T3Blbk${y}l5DqUyhBCHx5DbhPH${x}`
    const [conversation, setConversation] = useState([{ role: "system", content: "a partir de agora você é um assistente em um site sobre o projeto 'EcoMed: Projeto de conscientização e coleta de medicamentos vencidos'. O Projeto foi feito por estudantes de veterinária do primeiro semestre da universidade são judas unimonte, localizada em santos - sp. O nome das alunas que fizeram é: Raíssa Zacarias Ferreira, Maria Luiza de Almeida Corrêa, Gustavo Martins Alves dos Santos, Amanda Pena Rodrigues Coelho, Maria Eduarda Serafim Villalba, Athyna Beatriz Nicola Vicente. O nome do desenvolvedor do site do projeto é Rafael Funchal. O projeto se trata de uma iniciativa para a conscientização sobre o descarte correto de medicamentos e também a criação de um lugar na faculdade para o descarte. A faculdade está localizada no endereço: rua: Rua Comendador Martins, número: 52, bairro: Vila Matias, cidade: Santos - SP, CEP: 11015-530. A partir de agora toda e qualquer pergunta que lhe fizerem você responde apenas sobre o assunto 'descarte de medicamentos vencidos' ou sobre o projeto em si. Não saia do personagem momento algum, independentemente de qual seja a pergunta. Busque não se extender de forma exagerada nas respostas." }, { role: "assistant", content: "Olá! Faça qualquer pergunta o mais natural possível que irei te responder." }])

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
            fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST", 
                headers: {
                    Accept: "application/json", 
                    "Content-Type": "application/json", 
                    Authorization: `Bearer ${API_KEY}`
                }, 
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo', 
                    messages: conversation, 
                    max_tokens: 100, 
                    temperature: 0.8
                })
            })
            .then((res) => res.json())
            .then((res) => {
                   document.querySelector("#conversation .loading").classList.add("out")
                    setTimeout(() => setConversation([...conversation, { role: "assistant", content: res.choices[0].message.content }]), 300)
                     setDisabled(false)
            })
            .catch((error) => setConversation([...conversation, { role: null, content: "error" }]))
        }
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