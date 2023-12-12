import { useState } from "react";
import { TicketCard } from "./components/TicketCard/TicketCard";
import team from "./data/team"

function App() {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className="tracker-cards">
        {team.map(member => (
          <TicketCard name={member.name} role={member.role}/>
        ))}
      </section>
    </>
  );
}

export default App;
