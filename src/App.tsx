import './App.css'
import { CardList } from './components/colums'


function App() {
  return (
    <>   
        <div className='header'>
          <h1>Trello Clone App</h1>
        </div>
        <CardList name="List of Cards"></CardList>
    </>
  )
}

export default App
