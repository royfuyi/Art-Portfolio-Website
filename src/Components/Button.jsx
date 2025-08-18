import './Button.css'

export function Button({text, size}) {
    return (
        <>
        <p className='button' style={{fontSize: size}}>{text}</p>
        </>
    )
}