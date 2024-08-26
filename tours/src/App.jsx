import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const URL = 'https://www.course-api.com/react-tours-project'

const App = () => {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    
    try {
      const response = await fetch(URL)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }

  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours} >refresh</button>
        </div>
      </main>
    )
  }

  return (
    <div>
      <Tours tours = {tours} removeTour={removeTour} />
    </div>
  )
}

export default App
