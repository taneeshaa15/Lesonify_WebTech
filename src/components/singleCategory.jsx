import React from "react";

const SingleCategory = ({ current, checked, setChecked, setCount }) => {
  const handleToggle = (i) => () => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
    if (checked[i] === true) {
      setCount((c) => c - 1);
    } else {
      setCount((c) => c + 1);
    }
  };

  return (
    <div className="container">
      <h1
        style={{ fontWeight: "420", fontSize: "40px", textAlign: "left" }}
        className="row p-4 display-4 heading"
      >
        {current.name}
      </h1>
      <h3
        className="w-75 des"
        style={{ fontWeight: "500", padding: "0rem 0.9rem 0rem 0.9rem" }}
      >
        Think about the person’s behavior over at least the past six months.
        Then select all the applicable scenarios below.
      </h3>
      <div className="p-3"></div>
      <ul
        style={{ listStyleType: "disc", color: "black", padding: "0px 35px" }}
      >
        {current.questions.map((item, i) => (
          <li>
            <div className="row">
              <div
                style={{ color: "black", fontWeight: "400" }}
                className="col-md-8 lead"
              >
                {item}
              </div>

              <div className="col-md-4">
                <input
                  style={{
                    accentColor: "#4bb3f9",
                    height: "20px",
                    width: "20px",
                  }}
                  key={i}
                  checked={checked[i]}
                  onChange={handleToggle(i)}
                  type="checkbox"
                  id=""
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleCategory;
