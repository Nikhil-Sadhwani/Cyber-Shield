import React, { useContext, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AlertContext from "../context/alertState/AlertContext";
import LogContext from "../context/logState/LogContext";

export default function Signin() {
  const AObj = useContext(AlertContext);
  const LObj = useContext(LogContext);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.email !== "" && inputs.password !== "") {
      await axios
        .post("https://cyber-shield-backend.onrender.com/signin", inputs)
        .then((response) => {
          const resMsg = response.data.message;
          if (resMsg === "User has Successfully loged in") {
            AObj.showAlert(resMsg, "Success", "green");
            LObj.fillData(response.data);
            navigate("/");
          } else {
            AObj.showAlert(resMsg, "Danger", "red");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      AObj.showAlert("Fields are Not submitted as empty", "Danger", "red");
    }
  };

  return (
    <>
      <div className="flex w-full h-screen Spacefield ">
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Log In
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <Link className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                  Lost Password?
                </Link>
              </div>
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
