import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        userName: 'emmyrt',
        name: 'Luis Emmyrt Avila Aguilar',
        isFollowing: true,
    },
    {
        userName: 'rafaelgonzalez',
        name: 'Rafael Gonzalez',
        isFollowing: false,
    },
    {
        userName: 'josemariagonzalez',
        name: 'Jose Maria Gonzalez',
        isFollowing: true,
    },
    {
        userName: 'jesusgonzalez',
        name: 'Jesus Gonzalez',
        isFollowing: false,
    },
    {
        userName: 'luisgonzalez',
        name: 'Luis Gonzalez',
        isFollowing: true,
    }
]


export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    ) 
}