import React from "react";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A simple title component.
 *
 * @param {string} text - the text to render in the title
 * @returns {JSX.Element} - a JSX element containing the title
 */
/*******  92dd9a4e-72c9-4caf-9924-ab96a045fbcb  *******/
function Title({ text }) {
  console.log("title rendering");
  return <div>This is a very Simple Title & a text from parent : {text}</div>;
}
export default React.memo(Title);
