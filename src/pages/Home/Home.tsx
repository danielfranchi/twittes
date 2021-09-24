import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../../services/firebase'

import logoHome from '../../images/logo-home.png'

const Home = () => {
    const history = useHistory()

    const login = () => {
        const provider = new firebase.auth.TwitterAuthProvider()

        auth.signInWithPopup(provider).then(result => {
            history.push('/twittes')
        })
    }

    return (
        <div className="home-login">
            <div>
                <img className='img-logo' src={logoHome} alt='logo-home' />
            </div>

            <div className='text-home'>
                <span>
                    Welcome to
                </span>
            </div>

            <div className='text-home'>
                <span>
                    twittes
                </span>
            </div>

            <div>
                <button className="button-login" onClick={login}>Log in</button>
            </div>
        </div>
    )
}

export default Home
