import { FormEventHandler } from "react";
import "./SearchBar.scss"

type SearchBarProps = {
    filterBy: string,
    handleInput: FormEventHandler<HTMLInputElement>;
}

export const SearchBar = ({filterBy, handleInput} : SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <label className="search-bar-container__text" htmlFor="name-input">Search By {filterBy} </label>
      <input className="search-bar-container__bar" id="name-input" type="text" onInput={handleInput}/>
    </div>
  );
};
