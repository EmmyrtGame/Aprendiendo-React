import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName='emmyrt'>
                Luis Emmyrt Avila Aguilar
            </TwitterFollowCard>
            <TwitterFollowCard userName='midudev'>
                Miguel Ángel Durán
            </TwitterFollowCard>
        </section>
    ) 
}