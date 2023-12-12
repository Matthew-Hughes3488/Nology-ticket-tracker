import React, { FormEventHandler } from "react";

type DropDownBoxProps = {
    handleChange: FormEventHandler<HTMLSelectElement>;
}

export const DropDownBox = ({handleChange}: DropDownBoxProps) => {
  return (
    <section className="dropdown-menu">
      <label htmlFor="employee-roles">Search By Role</label>
      <select name="role" id="employee-roles" onChange={handleChange}>
      <option value="">All</option>
        <option value="junior software developer">
          Junior Software Developer
        </option>
        <option value="software developer">Software Developer</option>
        <option value="senior software developer">
          Senior Software Developer
        </option>
        <option value="tester">Tester</option>
        <option value="project manager">Project Manager</option>
        <option value="hard man">Hard Man</option>
      </select>
    </section>
  );
};
