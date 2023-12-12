import React, { FormEventHandler } from "react";

type SearchBarProps = {
    filterBy: string,
    handleInput: FormEventHandler<HTMLInputElement>;
}

export const SearchBar = ({filterBy, handleInput} : SearchBarProps) => {
  return (
    <div>
      <label htmlFor="name-input">Search By {filterBy} </label>
      <input id="name-input" type="text" onInput={handleInput}/>
    </div>
  );
};
