import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/footer'
import Guitarra from './components/Guitarra'
import { db } from './db'


export default function App() {
  const [data] = useState(db)
  const [car, setCar] = useState([])

  function addToCart(item) {
    const itemExists = car.findIndex(guitarra => guitarra.id === item.id);
    if (itemExists>=0) {
      car[itemExists].quantity += 1
      const updatedCar = [...car]
      updatedCar[itemExists] = quantity ++
      setCar(updatedCar)
    }
    else {
      item.quantity = 1
      car.push(item)
      setCar([...car,item])
}}
  return (
    <>
    
      <Header
       car={car}
      />
      <main>
      <div className='row mt-5'>
        {data.map((guitarra) => (
          <Guitarra
          key={guitarra.id}
          guitarra={guitarra}
          addToCart={addToCart}
          />
        ))}
      </div>
      </main>
      <Footer/>
    </>
  )
}

