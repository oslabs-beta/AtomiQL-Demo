import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () =>
  <header>
    <div className="row">
      <div className="col-xs">
        <Link to="/" >
          Home
        </Link>
      </div>
      <div className="col-xs">
        <Link to="/1" >
          Pets
        </Link>
      </div>
      <div className="col-xs">
        <Link to="/2" >
          Find Pet by ID
        </Link>
      </div>
      <div className="col-xs">
        <Link to="/3" >
          Find Pet by Name
        </Link>
      </div>
      <div className="col-xs">
        <Link to="/4" >
          Auth
        </Link>
      </div>
    </div>
  </header>

export default withRouter(Header)
