import React from "react";

const Form = () => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" placeholder="Name" required className="inp" />
        </div>
        <div>
          <label htmlFor="Surname">Surname : </label>
          <input type="text" placeholder="Surname" required className="inp" />
        </div>
        <div>
          <label htmlFor="email">E-Mail : </label>
          <input type="email" placeholder="E-mail" required className="inp" />
        </div>
        <div>
          <label htmlFor="mobile">Number : </label>
          <input
            type="number"
            placeholder="+91 1234567890"
            required
            className="inp"
          />
        </div>
        <div>
          <label htmlFor="Address">Address : </label>
          <input type="text" placeholder="Address" required className="inp" />
        </div>
        <div>
          <label htmlFor="payment">Payment : </label>
          <input type="radio" required />
          <span className="text-sm pl-1">COD</span>
        </div>
        <button className="btn mt-2">Proceed to buy</button>
      </form>
    </div>
  );
};

export default Form;
