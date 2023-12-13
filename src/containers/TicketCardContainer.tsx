import { Member } from '../types/member'
import { TicketCard } from '../components/TicketCard/TicketCard'
import "./TicketCardContainer.scss"

type TicketCardContainerProps = {
    team : Member[]
}

export const TicketCardContainer = ({team} : TicketCardContainerProps) => {
  return (
    <section className="ticket-cards">
    {team.map(member => (
      <TicketCard key={member.id} name={member.name} role={member.role}/>
    ))}
  </section>
  )
}
