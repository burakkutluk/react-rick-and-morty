import { useNavigate } from "react-router-dom";
import { StyledCard } from "./style.js";
import { MdFavoriteBorder } from "react-icons/md";

export const Card = ({ id, image, name, status, species, location }) => {
  const navigate = useNavigate();

  return (
    <StyledCard key={id}>
      <div className="main" >
        <img src={image} alt={name} onClick={() => navigate(`/characterDetail/${id}`)}/>
        <h3 onClick={() => navigate(`/characterDetail/${id}`)}>{name}</h3>
        <div className="fav">
          <MdFavoriteBorder size={50} />
        </div>
      </div>
      <div className="description">
       
        <p>
          <b>Status:</b> {status}
        </p>
        <p>
          <b>Specie:</b> {species}
        </p>
      </div>
    </StyledCard>
  );
};
