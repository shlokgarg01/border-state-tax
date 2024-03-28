import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import getTimeDifference from "../helpers/Time";
import Constants from "../helpers/Constants";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timeDifferenceInHours = getTimeDifference()
    if (timeDifferenceInHours > Constants.LOGIN_TIME) {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
