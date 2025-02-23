import Image from "next/image"

export default function Avatar({ src, name, username }) {
    return (
        <>
            <div>
                <div className="avatar">
                    <Image src={src} 
                    width={49} 
                    height={49}
                    alt="avatar"/>
                </div>
                { name && 
                    <section>
                        <strong>{name}</strong>
                        <small>{username}</small>
                    </section>
                }
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;                    
                    width: 49px;
                    height: 49px;
                    gap: 6px;
                    box-shadow: none;
                }
                section {
                    display: flex;
                    flex-direction: column;
                    margin-top: 33%;
                    transform: translateY(-50%);
                }
                .avatar {
                    width: 49px;
                    height: 49px;
                    border-radius: 50%;
                    overflow: hidden;
                }
            `}</style>
        </>
    )
}