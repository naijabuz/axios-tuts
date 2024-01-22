import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await response.data;

      setJoke(data.joke);

      console.log("fetch dad joke");
      console.log(response);
      console.log(data);
    } catch (error) {
      error.response;
    }
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;
