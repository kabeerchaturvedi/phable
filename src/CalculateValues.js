import React from "react";

const CalculateValues = () => {
  const userInfo = JSON.parse(localStorage.getItem("userDetails"));
  console.log(userInfo);
  return (
    <div>
      <div>
        {userInfo.map((details) => {
          const BMR =
            21.6 * (details.weight - details.bodyfat * details.weight) + 370;
          const tdee = details.activityLevels * BMR;
          return (
            <div>
              <div>
                <h3>User's weight: </h3>
                <div>{details.weight}</div>
                <h3>User's activityLevel: </h3>
                <div>{details.activityLevels}</div>
                <h3>User's Body Fat: </h3>
                <div>{details.bodyfat}</div>
                <div>TDEE: {tdee}</div>
                <div>BMR : {BMR}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalculateValues;
