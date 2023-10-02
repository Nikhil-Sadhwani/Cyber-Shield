import React, { useContext, useState } from "react";
import axios from "axios";
import Landing from "./Landing";
import AlertContext from "../context/alertState/AlertContext";
import LogContext from "../context/logState/LogContext";
function Report() {
  const [data, setData] = useState({
    email: "",
    report: "",
  });

  const AObj = useContext(AlertContext);
  const LObj = useContext(LogContext);

  const handleChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  const handleReport = async (e) => {
    e.preventDefault();
    await axios
      .post("https://cyber-shield-backend.onrender.com/report", data)
      .then((response) => {
        AObj.showAlert(response.data.message, "Success", "green");
        setData({
          email: "",
          report: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!LObj.cookies.access_token ? (
        <Landing />
      ) : (
        <>
          <div className="relative px-4 mx-auto w-full text-center py-24 lg:py-40 bg-write">
            <div className="w-50 mt-[-50px] p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-7 text-3xl font-bold text-gray-900 dark:text-white">
                Report Cyber{" "}
                <mark className="px-2 text-white bg-[#dc2626] rounded dark:bg-blue-500">
                  Crime
                </mark>
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Online hate speech can have profound and far-reaching
                consequences, affecting individuals, communities, and the
                broader digital landscape. Reporting hate speech is not just a
                responsible action; it is a vital step in fostering a safer and
                more respectful online environment. Here's why it matters
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech can cause significant harm, both emotionally and
                psychologically, to those targeted. Reporting hate speech helps
                shield individuals from the adverse effects of discrimination,
                harassment, and threats. environment. Here's why it matters
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech has the potential to poison online communities and
                turn them into hostile environments. By reporting it, you
                contribute to maintaining an inclusive, respectful, and
                harmonious online space where diverse voices can thrive.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Hate speech has the potential to poison online communities and
                turn them into hostile environments. By reporting it, you
                contribute to maintaining an inclusive, respectful, and
                harmonious online space where diverse voices can thrive.
              </p>
              <p className="mb-3 mt-5 font-normal text-gray-700 dark:text-gray-400">
                Your reports provide valuable feedback to online platforms and
                websites. They help these platforms enforce their community
                guidelines and take necessary actions against those who violate
                them, making the digital world safer for all users.
              </p>
              <p className="mb-3 mt-10 font-normal text-gray-700 dark:text-gray-400">
                By reporting hate speech, you become an active participant in
                the fight against online discrimination and hostility. Your
                actions contribute to a more welcoming and respectful digital
                society, where everyone can engage without fear or prejudice.
                Thank you for taking a stand and joining us in promoting digital
                respect and safety.
              </p>
            </div>
          </div>

          <div className="relative h-full px-4 mx-auto w-full text-center py-24 bg-write">
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Report{" "}
                <mark className="px-2 text-white bg-[#dc2626] rounded dark:bg-blue-500">
                  Crime
                </mark>
              </h5>
              <form className="mt-7" action="">
                <label
                  htmlFor="input-group-1"
                  className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    value={data.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    type="email"
                    id="input-group-1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
                  >
                    Enter your report here!
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      value={data.report}
                      onChange={(e) => handleChange(e)}
                      name="report"
                      id="message"
                      rows={4}
                      className="px-3.5 py-2 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                    />
                  </div>
                  <button
                    onClick={(e) => handleReport(e)}
                    type="button"
                    className="text-red-700 mt-7 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-700"
                  >
                    Send your report!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Report;
