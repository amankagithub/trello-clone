import './App.css'
import { Card } from './components/card'

function App() {
  return (
    <>   
        <div className='header'>
          <h1>Trello Clone App</h1>
        </div>
        <Card cardName="Card-1"> Content of the card</Card>
        <Card cardName="Card-2"> Content of the card</Card>
    </>
  )
}

export default App
