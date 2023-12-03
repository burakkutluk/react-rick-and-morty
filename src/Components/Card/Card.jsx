import { useNavigate } from 'react-router-dom';
import { StyledCard } from './style.js'

export const Card = ({id, image, name, status, species, location}) => {

  const navigate = useNavigate()

 return (
  <StyledCard key={id}>
    <div className="main" onClick={()=>navigate(`/characterDetail/${id}`)}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
    <div className="description">
      <p><b>Status:</b> {status}</p>
      <p><b>Specie:</b> {species}</p>
    </div>
  </StyledCard>
 )
};
