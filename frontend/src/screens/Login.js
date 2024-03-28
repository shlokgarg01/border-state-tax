import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Input from "../components/components/Input";
import getTimeDifference from "../helpers/Time";
import Constants from "../helpers/Constants";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // navigating the user to home page if lastLogin time is more than 15hrs
    let timeDifferenceInHours = getTimeDifference();
    if (timeDifferenceInHours <= Constants.LOGIN_TIME) {
      navigate("/");
    }
  }, []);

  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(Date.now())

    if(password !== Constants.PASSWORD || contactNumber !== Constants.CONTACT_NUMBER) {
      alert('Invalid Contact Number or Password')
      return
    }

    localStorage.setItem("lastLogin", Date.now()) // storing current time in localStorage
    navigate("/")
  };

  return (
    <Fragment>
      <div
        className="mt-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alingItems: "center",
          padding: 20,
        }}
      >
        <div className="shadow card" style={{ width: "40rem" }}>
          <h5 className="card-header text-center">LOGIN</h5>
          <div className="card-body">
            <form onSubmit={submit} className="d-flex flex-column">
              <Input
                icon={<MdOutlineMailOutline />}
                type="tel"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
              <Input
                icon={<RiLockPasswordLine />}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input type="submit" value="Login" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
