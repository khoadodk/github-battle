import React, { Component } from "react";

class Popular extends Component {
  render() {
    const languages = ["All", "JavaScript", "Ruby", "Java", "Css", "Python"];
    return (
      <div className="flex-center">
        {languages &&
          languages.map(language => (
            <li key={language}>
              <button className="btn-clear nav-link">{language}</button>
            </li>
          ))}
      </div>
    );
  }
}

export default Popular;
