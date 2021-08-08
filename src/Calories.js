import React from "react";
import { useState } from "react";
import CalculateValues from "./CalculateValues";
const Calories = () => {
  const [userValues, setuserValues] = useState({
    weight: "",
    bodyfat: "",
    activityLevels: "",
  });

  const [isDisplayResult, setIsDisplayResult] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setuserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = JSON.parse(localStorage.getItem("userInfo")) || [];

    userDetails.push({ ...userValues });
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setIsDisplayResult(true);
  };
  if (isDisplayResult) {
    return <CalculateValues />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Weight</p>
          <input
            type="text"
            autoComplete="off"
            id="weight"
            name="weight"
            value={userValues.weight}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Body Fat</p>
          <input
            type="text"
            autoComplete="off"
            id="bodyfat"
            name="bodyfat"
            value={userValues.bodyfat}
            onChange={handleInput}
          />
        </label>
        <label>
          <p>Activity Levels</p>
          <select
            value={userValues.acitvityLevels}
            onChange={handleInput}
            name="activityLevels"
          >
            <option value="1.2">1.2</option>
            <option value="1.375">1.375</option>
            <option value="1.55">1.55</option>
            <option value="1.725">1.725</option>
            <option value="1.9">1.9</option>
          </select>
        </label>

        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calories;
