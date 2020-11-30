import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "accept_cookies";

const getCookie = () => (!Cookies.get(COOKIE_NAME) ? false : true);

export const useCookies = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    if (getCookie()) setAccepted(true);
    else setAccepted(false);
  }, []);

  const acceptCookies = () => {
    setAccepted(true);
    Cookies.set(COOKIE_NAME, "accepted", {
      expires: 365,
    });
  };

  return [accepted, acceptCookies];
};
