import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home'
import NorahJones from './components/Pages/NorahJones'
import BillieEilish from './components/Pages/BillieEilish'
import LakeStreetDive from './components/Pages/LakeStreetDive'
import Header from './components/Header'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/norah-jones" component={NorahJones} />
            <Route path="/billie-eilish" component={BillieEilish} />
            <Route path="/lake-street-dive" component={LakeStreetDive} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
