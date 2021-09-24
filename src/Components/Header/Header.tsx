import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'

import Logo from "../../images/twitter.png"
import { FiUser } from "react-icons/fi"


const Header = () => {
  const history = useHistory()

  const { name } = useSelector((state: any) => state.user)

  const Logof = () => {
    history.push('/')
  }

  return (
    <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info"> 
            <span className='Logof' onClick={Logof}>
              <FiUser />
              {name}
            </span>
          </div>
        </header>
      </div>
  )
}

export default Header
