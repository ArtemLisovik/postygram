import { Logo, Menu } from 'containers'
import { MySelect } from 'ui/Select/Select'


import './Header.scss'
import { useState } from 'react'

export const Header = () => {

  const [subMenuActive, setSubMenuActive] = useState<boolean>(false)

  return (
    // <div className={subMenuActive ? 'header active' : 'header'}>
    <div className='header'>

      <div className="header__container container">
        <Logo />
        <Menu action={setSubMenuActive}/>
        <div className="header__localization">
          <MySelect/>
        </div>
      </div>
    </div>
  )
}