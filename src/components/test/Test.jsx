import React from "react";

const Test = () => {
  return (
    <div className="flex flex-col gap-7 px-10">
      <div>
        <h1 className=" py-8">Add New User</h1>
        <div className="flex gap-5">
          <input id="name" type="text" placeholder="Name" required />
          <input type="number" name="age" id="age" placeholder="Age" required />
          <button
            className=" py-2 px-2"
            type="submit"
            onClick={() => {
              let name = document.getElementById("name").value;
              let age = document.getElementById("age").value;
              console.log(name);
              console.log(age);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className=" flex flex-row gap-5 items-center">
        {`
          <h5>
          <span>Name: </span>
        </h5>
        <h5>
          <span>Age: </span>
        </h5>
        <button>Remove🚮</button>
          `}
      </div>
    </div>
  );
};

export default Test;
