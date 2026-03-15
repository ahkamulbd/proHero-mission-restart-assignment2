
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Navbar from './components/navbar/navbar'


function App() {
  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)
  const [tasks, setTasks] = useState([])

  const handleAddTask = (ticket) => {

    setTasks([...tasks, ticket])
    setInProgress(inProgress + 1)

  }
 
  const handleCompleteTask = (id) => {

    const remainingTasks = tasks.filter(task => task.id !== id)

    setTasks(remainingTasks)
    setInProgress(inProgress - 1)
    setResolved(resolved + 1)
    }

  return (
    <>
      
          <Navbar></Navbar> 
          <Banner
            inProgress = {inProgress}
            resolved = {resolved}>
          </Banner>
          <Main
            handleAddTask = {handleAddTask}
            tasks = {tasks}
            handleCompleteTask = {handleCompleteTask}></Main>
          <Footer></Footer>

          {/* <h1>ProHero Mission Restart - Assignment 2</h1> */}

    </>
  )
}

export default App
