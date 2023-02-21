import Container from "react-bootstrap/Container"
import "./App.scss"
import { Router } from "./router/Router"

const App = () => {
  return (
    <div className='App'>
      <Container>
        <Router />
      </Container>
    </div>
  )
}

export default App
