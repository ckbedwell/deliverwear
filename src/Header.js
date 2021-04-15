import logo from './logo.svg'
import './Header.css'

import { SignIn } from './SignIn'

export const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
        <div>
          <h1>DeliverWear</h1>
          <p>Merchant portal</p>
        </div>
      </div>
      <SignIn />
    </header>
  )
}
