import React from "react";

export const DropDownBox = () => {
  return (
    <div>
      <label htmlFor="employee-roles">Search By Role</label>
      <select name="role" id="employee-roles">
        <option value="junior software developer">
          Junior Software Developer
        </option>
        <option value="software developer">Software Developer</option>
        <option value="senior software developer">
          Senior Software Developer
        </option>
        <option value="tester">Tester</option>
        <option value="Project Manager">Project Manager</option>
        <option value="hard man">Hard Man</option>
      </select>
    </div>
  );
};
