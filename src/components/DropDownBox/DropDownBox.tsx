import { FormEventHandler } from "react";
import "./DropDownBox.scss"

type DropDownBoxProps = {
    handleChange: FormEventHandler<HTMLSelectElement>;
}

export const DropDownBox = ({handleChange}: DropDownBoxProps) => {
  return (
    <section className="dropdown-container">
      <label className="dropdown-container__text" htmlFor="employee-roles">Search By Role</label>
      <select className="dropdown-container__menu" name="role" id="employee-roles" onChange={handleChange}>
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
