import { FormEvent, useState } from "react";
import { TicketCard } from "./components/TicketCard/TicketCard";
import team from "./data/team"
import "./App.scss"
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DropDownBox } from "./components/DropDownBox/DropDownBox";

function App() {

  const [searchTerm, setSearchTerm] = useState<string>("")


  const handleInput = (event: FormEvent<HTMLInputElement>) =>{
    setSearchTerm(event.currentTarget.value);
  }

  const filteredTeam = team.filter(member =>{
    return member.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <main className="tracker-app">
      <h1 className="tracker-app__title">Ticket Tracker</h1>
      <SearchBar filterBy="Name" handleInput={handleInput}/>
      <DropDownBox/>
      <section className="tracker-cards">
        {filteredTeam.map(member => (
          <TicketCard name={member.name} role={member.role}/>
        ))}
      </section>
    </main>
  );
}

export default App;
