import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeContainer } from "./style.js";
import { MdFavoriteBorder } from "react-icons/md";

const CharacterDetail = () => {
  const params = useParams();
  const episodeId = params.id;

  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${episodeId}`)
      .then((response) => setEpisodeData(response.data))
      .catch((error) => console.error(error));
  }, [episodeId]);

  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <HomeContainer>
      <div>
        <div className="img_container">
          <img src={episodeData.image} alt={episodeData.name} />
        </div>
        <div className="info">
          <h2>{episodeData.name}</h2>
          <p>Status: {episodeData.status}</p>
          <p>Species: {episodeData.species}</p>
          <p>Gender: {episodeData.gender}</p>
          <p>Origin: {episodeData.origin.name}</p>
          <p>Location: {episodeData.location.name}</p>
        </div>
      </div>
    </HomeContainer>
  );
};

export default CharacterDetail;
