/* eslint-disable import/no-named-as-default */
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

// eslint-disable-next-line import/no-named-as-default-member
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

// eslint-disable-next-line no-unused-vars
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)
