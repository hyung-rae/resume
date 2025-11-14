import "./App.css"
import Intro from "./components/intro/Intro"

const App = () => {
  return (
    <main className="container">
      <Card>
        <Intro />
      </Card>
    </main>
  )
}

export default App

const Card = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="snap-container">
      <div className="card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  )
}
