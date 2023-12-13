import React from 'react'
import { Member } from '../types/member'
import { TicketCard } from '../components/TicketCard/TicketCard'

type TicketCardContainerProps = {
    team : Member[]
}

export const TicketCardContainer = ({team} : TicketCardContainerProps) => {
  return (
    <section className="tracker-cards">
    {team.map(member => (
      <TicketCard name={member.name} role={member.role}/>
    ))}
  </section>
  )
}
