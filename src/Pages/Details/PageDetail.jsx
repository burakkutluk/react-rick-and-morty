import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeContainer } from "./pageDetailStyle.js";
import morty from "../../Assets/morty.gif";

const PageDetail = () => {
  const params = useParams();
  const episodeId = params.id;

  const [episodeData, setEpisodeData] = useState(null);
  const [characterData, setCharacterData] = useState(null);
  const [gifPos, setGifPos] = useState("");
  const [cardInfo, setCardInfo] = useState();

  function getItemBackToScene() {
    if (!cardInfo) setGifPos("show");
  }

  function removeItemFromScene() {
    setGifPos("hide");
  }

  const getCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((response) => setCharacterData(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => setEpisodeData(response.data))
      .catch((error) => console.error(error));

  }, [episodeData]);



  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <HomeContainer>
      <div></div>
      <div>
        <h2>{episodeData.name}</h2>
        <p>Air Date: {episodeData.air_date}</p>
        <p>Episode: {episodeData.episode}</p>
      </div>
      <div className="gif-wrapper">
        <img className={gifPos} id="home-gif" src={morty} alt="morty" />
      </div>
    </HomeContainer>
  );
};

export default PageDetail;
