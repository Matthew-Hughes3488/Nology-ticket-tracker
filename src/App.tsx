import { useState } from "react";
import { TicketCard } from "./components/TicketCard/TicketCard";
import team from "./data/team"
import "./App.scss"

function App() {
  return (
    <main>
      <h1>Ticket Tracker</h1>
      <section className="tracker-cards">
        {team.map(member => (
          <TicketCard name={member.name} role={member.role}/>
        ))}
      </section>
    </main>
  );
}

export default App;
