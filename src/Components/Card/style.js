import styled from 'styled-components'

export const StyledCard = styled.div`
 
  width: 20rem;
  height: 30rem;
  //background: linear-gradient(0deg, rgba(156,234,46,1) 20%, rgba(103,150,37,1) 90%, rgba(67,99,21,1) 100%); 
  //border: 1px solid rgba(156,234,46,1);
  border-radius: 0.5rem;
  padding: 1rem;
  background: rgba(0, 0,0 , 0.2);
  box-shadow: hsl(var(--saturated-green)) 0px 0px 30px -20px;
  
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'M PLUS 1 Code', sans-serif;

  transition: all 1s;
  transform: perspective(1px) translateZ(0);
  animation: show 0.5s 0s forwards, flutuate 2s 0.5s infinite;

  @media (max-width: 320px) {
    height:  35rem;
  }

  //animations

  @keyframes show {
    0% {
      transform: translateY(2000px);
      
    }

    100% {
      transform:  translateY(-16px);
    }
  }

  @keyframes flutuate {
  0% {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  50% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px) ;
  }
  100% {
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
  }
  }
  
  .main {
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    align-items: center;
    position: relative;
 
    color: hsl(var(--text-gray));
  }

  img {
    width: 100%;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: hsl(var(--saturated-green));
    padding: 5px;
    background: linear-gradient(0deg, rgba(156,234,46,1) 20%, rgba(103,150,37,1) 90%, rgba(67,99,21,1) 100%); 
    box-shadow: hsl(var(--saturated-green)) 0px 12px 50px -15px;
    cursor: pointer;
  }
  
  h3 {
    font-size: 2rem ;
    font-family: 'M PLUS 1 Code', sans-serif;
    height: 8rem;
    cursor: pointer;
  }

  .fav{
    height: 1rem;
    color:red;
    margin-top: -65px;
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  p{
    text-align: left;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    width: 100%;
    height: 8rem;
    gap: 10px;
    color: rgba(156,234,46,1);
    padding: 0.5rem;
    border-radius: 0.5rem;
    
    //background: linear-gradient(180deg, rgba(156,234,46,1) 0%, rgba(103,150,37,1) 150%, rgba(67,99,21,1) 200%); 
    
    @media(max-width: 786px) {
      position: relative;
      left: 0rem;
      bottom: 1.5rem;
      background: none;
    }
  }

  
  
`