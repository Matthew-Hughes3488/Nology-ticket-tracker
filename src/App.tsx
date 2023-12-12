import { useState } from "react";
import { TicketCard } from "./components/TicketCard/TicketCard";
import team from "./data/team"
import "./App.scss"

function App() {
  return (
    <main className="tracker-app">
      <h1 className="tracker-app__title">Ticket Tracker</h1>
      <section className="tracker-cards">
        {team.map(member => (
          <TicketCard name={member.name} role={member.role}/>
        ))}
      </section>
    </main>
  );
}

export default App;
