'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'

import useUser from '@/hooks/useUser'

export default function Header({ avatar, domain }) {
    const { handleLogout } = useUser()

    return (
        <>
            <header>
                <nav>
                    <div>
                        <Image src='/devter-logo.png'
                        width={49} height={49}
                        alt='logo' />
                        <h1><span>.</span>{domain}</h1>
                    </div>
                    <div>
                        <button onClick={handleLogout}>
                            <strong>Log Out</strong>
                        </button>
                        <Image src={avatar ? avatar : '/devter-logo.png'}
                        width={49} height={49}
                        alt='avatar'/>
                    </div>                   
                </nav>
            </header>

            <style jsx>{`
                header {
                    position: fixed;
                    top: 0;
                    height: 49px;
                }
                
                nav {
                    background-color: #262626;
                    box-shadow: 0 10px 15px #00000033;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 8px 5vw;
                    width: 100vw;
                    height: auto;
                }

                h1 {
                    text-align: center;
                    font-size: 25px;
                    padding: 0px;
                }

                nav div {
                    box-shadow: none;
                    display: flex;
                    flex-direction: row;
                    width: auto;
                    height: 100%;
                    gap: 15px;
                }

                span {
                    color: rgb(90, 189, 255);
                    font-weight: 600;
                }

                button {
                    background-color: transparent;
                    border: none;
                    border-radius: 0;
                    color: #ddd;
                    padding: 0;
                    font-size: 20px;
                    margin-top: 5px;
                    width: auto;
                    height: 30px;

                    transition: all .2s ease;
                }
                button:hover {
                    box-shadow: none;
                    border-bottom: 1px solid #5abdff;
                    cursor: pointer;
                    color: #5abdff;
                    transform: translateY(0);
                }
            `}</style>
        </>
    )
}