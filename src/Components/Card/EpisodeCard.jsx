import { StyledCard } from "./style.js";
import episodeThumnail from "../../Assets/episodeThumbnail.jpeg";
import { Link, Route, useNavigate } from "react-router-dom";
import PageDetail from "../../Pages/Details/PageDetail.jsx";

export const EpisodeCard = ({ id, image, name, air_date, episode }) => {

  const navigate = useNavigate();

  return (
    <StyledCard key={id}>
      <div className="main" onClick={() => navigate(`/pageDetail/${id}`)}>
        <img  src={episodeThumnail} alt={name} />
        <h3 >{name}</h3>
      </div>
      <div className="description">
        <p>
          <b>Air_date:</b> {air_date}
        </p>
        <p>
          <b>Episode:</b> {episode}
        </p>
      </div>
    </StyledCard>
  );
};
