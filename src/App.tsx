import { FormEvent, useState } from "react";
import team from "./data/team"
import "./App.scss"
import { SearchBar } from "./components/SearchBar/SearchBar";
import { DropDownBox } from "./components/DropDownBox/DropDownBox";
import { TicketCardContainer } from "./containers/TicketCardContainer";

function App() {

  const [searchTermName, setSearchTermName] = useState<string>("")
  const [searchTermRole, setSearchTermRole] = useState<string>("")


  const handleInput = (event: FormEvent<HTMLInputElement>) =>{
    setSearchTermName(event.currentTarget.value);
  }

  const handleChange = (event: FormEvent<HTMLSelectElement>) =>{
    setSearchTermRole(event.currentTarget.value);
  }

  const filteredTeam = team.filter(member =>{
    const namesMatch = member.name.toLowerCase().includes(searchTermName.toLowerCase());
    if(searchTermRole === "") return namesMatch;
    else return namesMatch && member.role.toLowerCase() === searchTermRole;
  })

  return (
    <main className="tracker-app">
      <h1 className="tracker-app__title">Ticket Tracker</h1>
      <SearchBar filterBy="Name" handleInput={handleInput}/>
      <DropDownBox handleChange={handleChange}/>
      <TicketCardContainer team={filteredTeam}/>
    </main>
  );
}

export default App;
