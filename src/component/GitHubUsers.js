import React, { useState } from "react";
import axios from "axios";

const GITHUB_API = `https://api.github.com`;

const GitHubImage = () => {
  return (
    <div>
      <img
        src="/image/github.jpg"
        alt="github"
        style={{ width: "150px", margin: "15px 0 0 10px" }}
      />
    </div>
  );
};

const Card = props => {
  return (
    <div>
      <img src={props.avatar_url} alt="avatar" style={{ width: "150px" }} />
      <div style={{ fontWeight: "bold" }}>{props.name}</div>
      <a href={props.blog} target="_blank" rel="noopener noreferrer">
        {props.blog}
      </a>
    </div>
  );
};

const CardList = props => (
  <div style={{ margin: "10px 0 10px 13px" }}>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
);

const Form = props => {
  const [username, setUsername] = useState("");
  const handleSubmit = event => {
    event.preventDefault();

    axios.get(`${GITHUB_API}/users/${username}`).then(resp => {
      props.onSubmit(resp.data);
      setUsername("");
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="Enter your GitHub Username"
        required
        style={{
          width: "170px",
          margin: "20px 0 10px",
          borderRadius: "50px",
          padding: "5px 0"
        }}
      />
      <br />
      <button type="submit" style={{ marginLeft: "60px" }}>
        Search
      </button>
    </form>
  );
};

const GitHubUsers = () => {
  const [cards, setCards] = useState([]);
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };
  return (
    <div>
      <GitHubImage />
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default GitHubUsers;
