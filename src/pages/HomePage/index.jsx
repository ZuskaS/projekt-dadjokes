import { useState } from 'react';
import { useEffect } from 'react';
import { Joke } from '../../Components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();

      setJokes(data.data);
    };

    getJokes();
  }, []);

  return (
    <div className="conatiner">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
