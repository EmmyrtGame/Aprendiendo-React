import { useState } from 'react'
export function TwitterFollowCard ({ children, userName }) {
    
    const [isFollowing, setIsFollowing] = useState(false)
    
    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Dejar de seguir' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>   
                <img className='tw-followCard-avatar' src={imgSrc} alt="El avatar de Emmyrt"/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
