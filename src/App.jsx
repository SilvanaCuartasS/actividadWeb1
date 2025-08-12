import './App.css'
import { useState } from 'react'
import Card from './components/Card/Card'

function App() {

  const [concertBuy, setConcertBuy] = useState([]);

  const handleAddConcert = (title, price) => {
    const newList = [...concertBuy];
    newList.push({ title, price });
    setConcertBuy(newList);
  };

  return (
  
    <>

      <h1>Concert's Available</h1>

      <Card title="KDA" price="$400" addBuy={handleAddConcert}/>
      <Card title="Shawn Mendez" price="$800" addBuy={handleAddConcert}/>
      <Card title="Travis Scoot" price="$600" addBuy={handleAddConcert}/>

      <div className='total-buy'>
        <h2>Carrito de Conciertos</h2>
        {concertBuy.map((item, index) => (
          <div key={index}>
            <p>{item.title} - {item.price}</p>

          </div>
          ))}
      </div>
    </>
  )
}



export default App