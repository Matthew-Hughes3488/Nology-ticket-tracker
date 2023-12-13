import { Counter } from '../Counter/Counter'
import "./TicketCard.scss"

 type TicketCardProp = {
    name: string,
    role: string
}


export const TicketCard = ({name, role}: TicketCardProp) => {
  return (
    <section className='ticket-card'>
        <h1 className='ticket-card__text'>{name}</h1>
        <h1 className='ticket-card__text'>{role}</h1>
        <Counter />
    </section>
  )
}
