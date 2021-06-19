import React, { useState } from "react";
import Calendar from "react-calendar";

function Booking() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="booking w-75 m-auto">
      <h2>Book Your Date Now</h2>
      <div className="row">
        <div className="col-6">
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone Number </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Phone number"
              />
            </div>
          </form>
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
