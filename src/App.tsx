import './App.css'
import { CardLists } from './components/card-lists'


function App() {
  return (
    <>   
        <div className='header'>
          <h1>Trello Clone App</h1>
        </div>
        <div className='middle'>
          <CardLists></CardLists>
        </div>
    </>
  )
}

export default App
