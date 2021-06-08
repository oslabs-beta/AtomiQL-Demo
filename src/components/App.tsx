import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from './Header'
import Pets from '../pages/Pets'
import FindPets from '../pages/FindPets'

const App = () => (
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
    </div>
  </Fragment>
)

export default App
