import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Landing from "./Landing";
import ToolContext from "../context/toolsState/ToolContext";
import AlertContext from "../context/alertState/AlertContext";
import LogContext from "../context/logState/LogContext";

export default function ToolsDetail() {
  const { toolName } = useParams();
  const [textAreaVal, setTextAreaVal] = useState("");
  const [toolReviews, setToolReviews] = useState([]);

  const TObj = useContext(ToolContext);
  const AObj = useContext(AlertContext);
  const LObj = useContext(LogContext);

  useEffect(() => {
    // eslint-disable-next-line
    axios
      .get(`http://localhost:3001/review/${toolName}`)
      .then((response) => {
        setToolReviews(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleChange = (e) => {
    setTextAreaVal(e.target.value);
  };

  const handleUpload = async () => {
    if (textAreaVal !== "" && LObj.cookies) {
      const data = {
        toolName: toolName,
        name: LObj.cookies.name,
        email: LObj.cookies.email,
        comment: textAreaVal,
      };
      await axios
        .post("http://localhost:3001/review", data)
        .then((response) => {
          AObj.showAlert(response.data.message, "Success", "green");
          setToolReviews([...toolReviews, data]);
          setTextAreaVal("");
        })
        .catch((err) => console.log(err));
    } else {
      AObj.showAlert("Empty content should not be submit", "Danger", "red");
    }
  };

  return (
    <>
      {!LObj.cookies.access_token ? (
        <Landing />
      ) : (
        <>
          <h4 className="mb-2 text-3xl text-center my-8 font-bold text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Reviews Privacy-Focused Tools
            </span>
          </h4>
          <div style={{ width: "100%", height: "100%", padding: "20px" }}>
            {TObj.arrayOfTools
              .filter((tool) => {
                if (toolName === tool.name) {
                  return tool;
                }
                return false;
              })
              .map((tool, key) => {
                return (
                  <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-3">
                    <div className="flex items-start sm:gap-4">
                      <div>
                        <h3 className="mt-1 text-lg font-medium sm:text-xl">
                          {tool.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                          {tool.description}
                        </p>

                        <Link key={key} to={tool.url}>
                          <p className="mt-1 text-sm  text-blue-500">
                            URL : {tool.url}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
          {toolReviews.length === 0 ? (
            <h2 style={{ textAlign: "center", color: "grey" }}>No Reviews</h2>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {toolReviews.map((tool, key) => {
                return (
                  <article
                    key={key}
                    className="rounded-xl border border-gray-700 bg-gray-800 p-4 w-[475px] h-[175px] ml-3 my-3"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {tool.name}
                        </h3>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      <li>
                        <Link className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                          <p className="mt-1 text-xs font-medium text-gray-300">
                            {tool.comment}
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </article>
                );
              })}
            </div>
          )}

          <form style={{ margin: "28px" }}>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  onChange={(e) => handleChange(e)}
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write your review"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  onClick={handleUpload}
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
}
