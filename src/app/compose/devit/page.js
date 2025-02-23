'use client'

import Header from "@/components/layout/Header";

export default function ComposeDevit() {
    return (
        <>
            <Header domain="Devit" />
            <textarea placeholder="What's on your mind?">                
            </textarea>
            <div>
                <button>Devit</button>
                <button>Back</button>
            </div>

            <style jsx>{`
                textarea {
                    background-color: #323232;
                    border-radius: 10px;
                    color: #ddd;
                    width: 90%;
                    height: 200px;
                    border: none;
                    padding: 10px;
                    margin: 60px 0 0;
                    resize: none;
                    outline: none;
                    font-size: 21px;
                }

                div {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 10px;                    
                }

                button {
                    background-color: #0099ff;
                    color: white;
                    border: none;
                    font-size: 18px;
                    padding: 10px 20px;
                    border-radius: 9999px;
                    width: 44%;
                    height: 40px;
                }
                button:nth-child(2) {
                    background-color: #252525;
                    border:2px solid #5abdff;
                }
            `}</style>
        </>
    )
}