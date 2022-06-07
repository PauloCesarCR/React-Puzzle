import './style.css'
import vectorSVG from '../assets/Vector.svg'
export default function Sidebar({setStateCards, cards}) {

  function handleReset(){
    console.log(cards)
    cards.forEach(card => {
        card.turned = false;
    });
  
      setStateCards(cards)
  }

    return (
      <div className='sidebar'>
        <img
        className='vectorSVG'
        src={vectorSVG}
         alt='sidebar' 
         />
        <h1
        className='h1-sidebar'
        >
        CUBOS PUZZLE
        </h1>
        <button
        className='btn-reset'
        onClick={()=> handleReset()}
        >
          Reset
        </button>
      </div>
      
    );
  }
