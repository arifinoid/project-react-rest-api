import React from "react";
import GitHubUsers from "./component/GitHubUsers";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <GitHubUsers />
      </div>
    );
  }
}

export default App;
