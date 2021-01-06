import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { API_URL } from '../../config';

const Game = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getGame = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=2a91788799104cdabdd2ed6da39afffb`
        );

        if (!res.ok) {
          return setError('Could not find that game');
        }

        const data = await res.json();

        if (!data) {
          return setError('Could not find that game');
        }

        setGame(data);
        return setLoading(false);
      } catch (err) {
        return setError('Could not find that game');
      }
    };
    getGame();
  }, [id]);

  const favoriteGame = async () => {
    console.log('This is the game ID: ', id);

    try {
      const token = localStorage.getItem('jwt');
      const res = await fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ game })
      });
      const data = await res.json();
      console.log(data);
      // do something with the data here
    } catch (err) {
      console.log(err);
      // handle error here
    }
  };

  const renderGame = () => {
    if (loading) {
      return (
        <Loader
          type='TailSpin'
          color='#14FFEC'
          height={100}
          width={100}
          className='spinner'
        />
      );
    }

    return game ? (
      <StyledMain className='gamePage_gameContainer'>
        <div className='gamePage_title'>
          <h1>
            <span className='titleText'>{game.name}</span>
          </h1>
        </div>

        <div className='gamePage_details'>
          <div className='gamePage_image'>
            <img src={game.background_image} alt={game.name} />
          </div>

          <div className='gamePage_desc'>
            <p>{game.description_raw}</p>
          </div>

          <div className='favorite'>
            <button onClick={favoriteGame}>Favorite</button>
          </div>
        </div>
      </StyledMain>
    ) : null;
  };

  return !error ? renderGame() : <p>{error}</p>;
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 3.2rem;
  background: #009688;
  margin-top: 5rem;
  border-style: inset;
  border-radius: .4rem;

  div:first-child {
    img {
      width: 80%;
      border-style: inset;
      border-radius: .4rem;
    }
    
  }

  div.gamePage_title {
    margin: 3rem 0 0 5rem;
    
  }

  div.gamePage_title h1 .titleText {
    border-style: inset;
    border-radius: .4rem;
    padding: 1rem;
    color: white;
    
  }

  div.gamePage_details {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem;
    margin-bottom: 3rem;
    border-style: inset;
    border-radius: .4rem;
    margin: 3rem;
    padding: 3rem;
    background-color: black;
  }

  div.gamePage_image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.gamePage_desc {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-height: 40rem;
  }
  

  div.gamePage_desc p {
    background: aliceblue;
    border-style: inset;
    border-radius: .4rem;
    width: 80%;
    height: 80%;
    overflow-y: scroll;
    margin-bottom: 2rem;
    padding: 1.3rem;


  }

  }

  
`;

export default Game;
