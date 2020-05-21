import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../layout/Layout'
import Pokemon from '../components/Pokemon/Pokemon'
import Pokemon2 from '../components/Pokemon/Pokemon2'
import Pokemon3 from '../components/Pokemon/Pokemon3'
import Pokemon4 from '../components/Pokemon/Pokemon4'
import Pokemon5 from '../components/Pokemon/Pokemon5'
import Pokemon6 from '../components/Pokemon/Pokemon6'
import './pageStyles.css'

const HomePage = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Pokemon} />
        <Route path='/page2' component={Pokemon2} />
        <Route path='/page3' component={Pokemon3} />
        <Route path='/page4' component={Pokemon4} />
        <Route path='/page5' component={Pokemon5} />
        <Route path='/page6' component={Pokemon6} />
      </Switch>
    </Layout>
  )
}

export default HomePage
