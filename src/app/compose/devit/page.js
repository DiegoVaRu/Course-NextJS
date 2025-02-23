'use client'

import Header from "@/components/layout/Header";
import useUser from "@/hooks/useUser";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { addDevit } from "@/firebase/client";

export default function ComposeDevit() {
    const [message, setMessage] = useState("")
    const user = useUser()
    const router = useRouter()

    const handleChange = (e) => {
        const {value} = e.target
        setMessage(value)
    }

    const handleSubmit = () => {
        e.preventDefault()
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.username
        })
    }

    const handleBack = () => {
        router.back()
    }
    
    return (
        <>
            <Header domain="Devit" />

            <form onSubmit={handleSubmit}>
                <textarea 
                onChange={handleChange}
                placeholder="What's on your mind?">             
                </textarea>
                <div>
                    <button type="submit"
                    disabled={message.length === 0}>Devit</button>
                    <button onClick={handleBack}>Back</button>
                </div>
            </form>

            <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                    height: 300px;  
                    justify-content: center;
                    margin-top: -260px;       
                }
                form div {
                    box-shadow: none;
                    place-self: center;
                }

                textarea {
                    background-color: #323232;
                    border-radius: 10px;
                    color: #ddd;
                    width: 90%;
                    min-height: 200px;
                    border: none;
                    padding: 10px;
                    resize: none;
                    outline: none;
                    font-size: 21px;
                    place-self: center;
                }

                div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 10px;                    
                }

                button {
                    background-color: #0099ff;
                    color: #ddd;
                    border: none;
                    font-size: 18px;
                    padding: 10px 20px;
                    border-radius: 9999px;
                    width: 44%;
                    height: 40px;
                    transition: opacity .2s ease;
                }
                button:nth-child(2) {
                    background-color: #252525;
                    border:2px solid #5abdff;
                }
                button:hover {
                    cursor: pointer;
                    background-color:rgb(96, 190, 253)
                }

                button[disabled] {
                    opacity: 0.3;
                    pointer-events: none;
                }
            `}</style>
        </>
    )
}