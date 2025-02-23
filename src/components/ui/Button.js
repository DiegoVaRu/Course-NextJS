'use client'

export default function Button({ children, onClick, disabled }) {
    return (
        <>
            <button onClick={onClick} disabled={disabled || false}>
                {children}
            </button>
        </>
    )
}