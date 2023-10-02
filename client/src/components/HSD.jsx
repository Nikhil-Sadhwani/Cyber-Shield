import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//Image
import HateSDweb from "../asserts/img/HSD.jpg";

function HSD() {
  const [words, setWords] = useState([]);
  const [string, setString] = useState("");
  const [strArray, setStrArray] = useState([]);
  const [isSet, setIsSet] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
    axios
      .get("https://cyber-shield-backend.onrender.com/dictionary")
      .then((response) => {
        setWords(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setString(e.target.value);
    setIsSet(false);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (string !== "") {
      setStrArray(string.split(" "));
      setIsSet(true);
    }
  };

  return (
    <>
      <div className=" relative bg-white py-24 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-[-40px] max-w-2xl lg:mx-0">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              <mark className="px-2 text-white bg-[#dc2626] rounded dark:bg-blue-500">
                Hate
              </mark>
              Speech Detection
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Automated identification of hate speech in digital communication
              using technology and algorithms.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl m-auto flex-col items-start justify-between">
              <div className="w-full p-4 text-center bg-[#ebf4f5] border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 shadow-lg dark:border-gray-900">
                <h5 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                  What is Hate speech?
                </h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                  Hate speech is harmful, discriminatory language or expressions
                  that target individuals or groups based on their
                  characteristics, such as race, religion, gender, or ethnicity,
                  often inciting violence or prejudice. It can have severe
                  social and emotional consequences and is widely condemned.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl m-auto flex-col items-start justify-between">
              <div className="w-full p-4 text-center bg-[#ebf4f5] border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 shadow-lg dark:border-gray-900">
                <h5 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                  What is Hate Speech Detection?
                </h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                  Hate Speech Detection is the use of technology and algorithms
                  to automatically identify and flag instances of hate speech or
                  offensive content in digital communication, with the goal of
                  promoting online respect, preventing harm, and supporting
                  content moderation efforts.
                </p>
              </div>
            </article>
            <article className="flex max-w-xl m-auto flex-col items-start justify-between">
              <div className="w-full p-4 text-center bg-[#ebf4f5] border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 shadow-lg dark:border-gray-900">
                <h5 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white">
                  What does it do?
                </h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                  Hate Speech Detection helps create a more inclusive and
                  respectful digital environment by identifying and addressing
                  harmful content, such as harassment and incitement to
                  violence, by allowing for timely intervention and content
                  moderation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-white">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Why we need{" "}
                  <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                    Hate Speech Detector
                  </span>
                  ?
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Technology has made communication more accessible and
                  widespread, reaching a global audience. Hate speech online can
                  harm individuals and communities on a massive scale. The rise
                  of online hate speech has led to cyberbullying and harassment,
                  causing emotional and psychological harm to victims.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={HateSDweb}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  The internet has given rise to diverse online communities
                  where respectful discourse is essential for fostering positive
                  interactions. Hate speech on social media platforms can spread
                  rapidly, influencing public opinion and inciting real-world
                  actions.
                </p>
                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Educate Yourself.
                      </strong>{" "}
                      Understand the impact of hate speech on individuals and
                      communities and educate yourself about the consequences.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Support Anti-Hate Initiatives.
                      </strong>{" "}
                      Engage with or support organizations, initiatives, or
                      campaigns that work to combat hate speech and promote
                      tolerance and understanding.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Social Responsibility.
                      </strong>{" "}
                      Tech companies and online platforms increasingly recognize
                      their responsibility to combat hate speech and promote
                      respectful communication.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Human Rights.
                      </strong>{" "}
                      Hate speech infringes upon the human rights and dignity of
                      individuals and groups, undermining principles of equality
                      and non-discrimination.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Global Awareness.
                      </strong>{" "}
                      Hate speech detection and prevention efforts are gaining
                      global attention as society seeks solutions to address
                      this growing issue.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Report Hate Speech.
                      </strong>{" "}
                      If you encounter hate speech online or offline, consider
                      reporting it to the relevant authorities or platform
                      moderators.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  In today's technological era, the need to avoid hate speech is
                  not only a matter of personal responsibility but also a
                  societal imperative. It contributes to building a more
                  harmonious and tolerant digital world where individuals can
                  interact with respect and dignity, free from discrimination
                  and harm.
                </p>

                <p className="mt-6">
                  Avoiding hate speech is an essential step toward creating a
                  more inclusive, respectful, and harmonious society, whether in
                  offline or online interactions. It contributes to a safer and
                  more welcoming environment for all individuals and
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-9 p-4 text-center bg-[#94a3b8] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                name="string"
                onChange={(e) => handleChange(e)}
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a text..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                disabled={isSet}
                onClick={(e) => handleCheck(e)}
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Check content
              </button>
            </div>
          </div>
        </form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <div htmlFor="comment" className="sr-only">
              Your comment
            </div>
            <div className="w-full px-0 text-sl text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400">
              {strArray.length === 0
                ? "No Value Entered"
                : strArray.map((val, key) => {
                    if (words.includes(val.toLowerCase())) {
                      return (
                        <mark
                          key={key}
                          className="px-2 text-white bg-[#dc2626] rounded dark:bg-blue-500"
                        >
                          {val}
                        </mark>
                      );
                    } else {
                      return <> {val} </>;
                    }
                  })}
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <div className="inline-flex items-center py-2.5 px-4 text-xl font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              <mark className="px-2 text-white bg-[#dc2626] rounded dark:bg-blue-500">
                Hate
              </mark>
              Speech Detector
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HSD;
