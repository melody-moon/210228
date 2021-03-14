import React from 'react' //jsx를 쓰려면 import해야함
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from './constants'

import HomePage from './pages/home'
import WebtoonPage from './pages/webtoon'

import ResetCSS from './components/reset-css'

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <ResetCSS />
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <HomePage />
          </Route>
          <Route path={ROUTES.WEBTOON}>
            <WebtoonPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
