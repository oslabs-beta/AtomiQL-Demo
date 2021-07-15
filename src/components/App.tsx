import { Switch, Route } from 'react-router-dom'
import { Fragment, useContext, useEffect } from 'react'
import Header from './Header'
import Pets from '../pages/Pets'
import FindPets from '../pages/FindPets'
import { AtomiContext } from 'atomiql'
import { gql } from 'graphql-request'
import Auth from '../pages/Auth'
import FindPetByName from '../pages/FindPetByName'

export const AUTH_CHECK = gql`
query AuthCheck {
  user {
    isAuth
  }
}
`;

const authResponse = {
  user: {
    isAuth: false,
  }
}

const App = () => {
  const { writeQuery } = useContext(AtomiContext)
  useEffect(() => {
    writeQuery(AUTH_CHECK, authResponse);
  }, [])

  return (
    <Fragment>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Pets} />
        </Switch>
        <Switch>
          <Route exact path="/1" component={Pets} />
        </Switch>
        <Switch>
          <Route exact path="/2" component={FindPets} />
        </Switch>
        <Switch>
          <Route exact path="/3" component={Auth} />
        </Switch>
        <Switch>
          <Route exact path="/4" component={FindPetByName} />
        </Switch>
      </div>
    </Fragment>
  )
}

export default App
