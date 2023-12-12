import { useState } from "react";
import { TicketCard } from "./components/TicketCard/TicketCard";

function App() {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className="tracker-cards">
        <TicketCard name="Matthew" role="Big Boss Man"/>
      </section>
    </>
  );
}

export default App;
