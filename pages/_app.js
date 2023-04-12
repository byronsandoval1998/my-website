import "../styles/globals.css";
import propTypes from "prop-types";
import React from "react";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
App.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object.isRequired,
};
