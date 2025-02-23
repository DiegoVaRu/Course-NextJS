'use client'

import Image from "next/image"
import Avatar from "../ui/Avatar"

export default function DevitPanel({ devits = [] }) {
    return (
        <section>
            { devits.length > 0 ? (
                <>
                    {devits.map(devit => (
                        <div key={devit.id}>
                            <Avatar src={devit.avatar} />
                            <div>
                                <strong>{devit.username}</strong>
                                <p>{devit.message}</p>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <h2>No devits yet :C</h2>
            )}
            <style jsx>{`
                section {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    height: 90vh;
                    padding: 60px 20px 20px;
                    overflow-y: auto;
                    overflow-x: hidden;
                }
                section::-webkit-scrollbar {
                    display: none;
                }

                section div {
                    background-color: transparent;
                    box-shadow: none;
                    display: flex;
                    flex-direction: row;
                    gap: 5px;
                    height: auto;
                    padding: 10px 15px;
                    place-items: flex-start;
                }
                section div div {
                    border-radius: 0 10px 10px 10px;
                    border-top: 2px solid #5abdff;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    align-items: flex-start;
                    box-shadow: 0 6px 15px #00000066;
                }
            `}</style>
        </section>
    )
}