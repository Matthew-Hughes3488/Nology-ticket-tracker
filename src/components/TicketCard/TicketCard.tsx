import React from 'react'

 type TicketCardProp = {
    name: string,
    role: string
}


export const TicketCard = ({name, role}: TicketCardProp) => {
  return (
    <section className='ticket-card'>
        <h1 className='ticket-card__name'>{name}</h1>
        <h1 className='ticket-card__role'>{role}</h1>
        /* ADD COUNTER COMPONENT HERE */
    </section>
  )
}
