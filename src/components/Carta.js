import './style.css'
import cardBack from '../assets/card-back.png'
import congrats from '../assets/congrats.png'
export default function Carta({card, stateCards, setStateCards}){
   
   function desvirarCartas (){
       
    const localCartas = [...stateCards]

    const cartaAtual = localCartas.find((item) => item.id === card.id);

    const cartasDesviradas = localCartas.filter((item)=> item.turned)

    if (cartasDesviradas.length > 1){
        return;
    }

    if (cartasDesviradas.length && card.slug === cartasDesviradas[0].slug){
        cartaAtual.turned = !cartaAtual.turned;
        setStateCards(localCartas);

            setTimeout(() => {
                if (cartaAtual.id === cartasDesviradas[0].id){
                    return;
                }
            const filterCards = localCartas.filter((item)=> item.id !== cartaAtual.id && item.id !== cartasDesviradas[0].id);

                setStateCards(filterCards);
            }, 800);

            return;
        }  

        cartaAtual.turned = !cartaAtual.turned;
        setStateCards(localCartas)

        if ( cartasDesviradas.length){

                setTimeout(() => {

                    localCartas.forEach((item)=> {
                        item.turned = false;
                    });
        
                    setStateCards([...localCartas])

                   }, 1500);
        }
            console.log(localCartas)
       
    
   }

    return (
    <img
    id={card.id}
    onClick={()=> desvirarCartas()}
    className="carta"
    src={card.turned ? card.image : cardBack}
    alt='cardback'/>
    )
}