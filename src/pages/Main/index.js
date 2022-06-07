import './style.css';
import Sidebar from '../../sidebar';
import Carta from '../../components/Carta';
import cards from '../../cards'
import congrats from '../../assets/congrats.png'
import { useState } from 'react';


function Main() {
  const [stateCards, setStateCards] = useState([...cards]);

  return (
    <div className='container'>
      <Sidebar 
      cards={cards} 
      setStateCards={setStateCards}
      />
      <div className='container-main'>
      <div className='container-cards'>
        {stateCards.length ? stateCards.map((card)=>(
          <Carta
          key={card.id} 
          card={card}
          stateCards={stateCards}
          setStateCards={setStateCards}
          />
        ))
      : <img className='congrats' src={congrats} />
        }
    </div>
    </div>
    </div>
  );
}

export default Main;
