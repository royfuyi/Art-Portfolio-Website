import './Button.css'

export function Button({text, size}) {
    return (
        <>
        <p className='button' style={{ fontSize: `clamp(38px, ${size}, 100px)` }} onTouchStart={() => {}}>{text}</p>
        </>
    )
}