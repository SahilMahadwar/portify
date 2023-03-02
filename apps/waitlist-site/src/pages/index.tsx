import axios from "axios";
import type Error from "next/error";
import Image from "next/image";
import { useState } from "react";
import SocialMediaIllustration from "../assets/socialmedia-illustration";
import Container from "../components/container/container";
import Seo from "../components/seo/seo";

function isValiEmail(email: string) {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(email)) {
    return false;
  }

  return true;
}

export default function Index() {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    setSuccess(false);
    setError("");

    if (!email) {
      return setError("Email required");
    }

    if (!isValiEmail(email)) {
      return setError("Invalid email");
    }

    setloading(true);
    try {
      const options = {
        method: "POST",
        url: "/api/waitlist",
        headers: { "Content-Type": "application/json" },
        data: { email: email },
      };

      const { data } = await axios.request(options);

      if (data.status === "SUCCESS") {
        setSuccess(true);
        setError("");
      } else {
        setError("Something went wrong");
      }

      setEmail("");
      setloading(false);
    } catch (error: any) {
      if (error.response.data.error.message) {
        setError(error.response.data.error.message);
      } else {
        setError("Something went wrong");
      }
      setSuccess(false);
      setloading(false);
    }
  };

  return (
    <>
      <Seo />
      <Container>
        <div className="mt-24 flex items-start justify-between px-6">
          <div className="max-w-[620px] space-y-4">
            <h1 className=" text-6xl font-black leading-tight">
              Create Your Own Stunning Portfolio Effortlessly⚡️
            </h1>
            <p className="w-10/12 text-lg font-medium leading-relaxed text-gray-500">
              Plus, easily connect your own domain to your portfolio site for a
              truly personalized online presence
            </p>
            {/* Create a portfolio that effortlessly displays your skills and
              achievements. Plus, easily connect your own domain to your
              portfolio for a truly personalized online presence */}
            <div className="w-10/12">
              <div className="mt-7 flex items-center ">
                <label htmlFor="voice-search" className="sr-only">
                  enter your email
                </label>

                <div className="relative h-full  w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-400 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => {
                      setError("");
                      setSuccess(false);
                      setEmail(e.target.value);
                    }}
                    value={email}
                    className={`font-body  duration-0.15 block w-full  rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-lg text-gray-700 outline-none transition ease-in focus:ring-4 focus:ring-brand-200 ${
                      error && "border-2 border-red-500 text-red-500"
                    }`}
                    placeholder="jethalal@gada.com"
                    required
                  />
                </div>

                <div className="flex-shrink-0">
                  <button
                    onClick={handleClick}
                    type="button"
                    className="font-body duration-0.15 relative ml-3 flex h-[100%] select-none items-center rounded-lg bg-brand-600 py-4 px-6 text-center text-lg font-medium text-white  transition ease-in hover:bg-brand-700  focus:outline-none focus:ring-4 focus:ring-brand-200 "
                  >
                    <span className={`${loading && "invisible"}`}>
                      Join Waitlist
                    </span>
                    {loading && (
                      <span className="absolute left-0 right-0  flex  flex-col items-center justify-center">
                        <div role="status">
                          <svg
                            aria-hidden="true"
                            className="mr-2 h-8 w-8 animate-spin fill-white text-gray-200 "
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="mt-4 text-red-600">{error}</p>}
              {success && (
                <p className="mt-4 text-green-600">
                  Thank you! Your email has been received! We will keep you
                  posted
                </p>
              )}
            </div>
          </div>
          <div>
            <SocialMediaIllustration
              width="436"
              height="449"
              className="text-brand-600"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
