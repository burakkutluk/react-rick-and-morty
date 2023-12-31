import styled from "styled-components";

export const HomeContainer = styled.div`
  //Animations
  @keyframes gifMove {
    0% {
      transform: rotate(0deg) translateX(2000px);
    }

    100% {
      transform: rotate(-8deg) translateX(0px) translateY(2rem);
    }
  }

  @keyframes hide {
    0% {
      transform: rotate(-8deg) translateX(0px);
    }

    100% {
      transform: rotate(0deg) translateX(2000px) translateY(0);
    }
  }

  @keyframes show {
    0% {
      transform: rotate(20deg) translateX(2000px) translateY(0);
    }

    100% {
      transform: rotate(-8deg) translateX(0px) translateY(2rem);
    }
  }

  //Start
  height: calc(100vh - 150px);

  width: 100%;
  max-width: 1100px;
  margin: 0rem auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    height: inherit;
    min-height: calc(100vh - 90px);
  }

  .gif-wrapper {
    position: fixed;
    right: 0;

    width: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: -1;
  }

  img#home-gif {
    position: relative;
    max-width: 400px;
    max-height: 650px;

    @media (max-width: 786px) {
      display: none;
    }

    transition: all 2s;
    animation: gifMove 1s forwards;

    &.hide {
      animation: hide 1.5s forwards;
    }
    &.show {
      animation: show 1s forwards;
      animation: gifMove 1s forwards;
    }
  }

  .apresentation {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (max-width: 786px) {
      margin-top: 6rem;
    }
  }

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
  }

  .img_container{
    width: 30%;
  }

  .info{
    font-size: 3vw;
    display: flex;
    flex-direction: column;
    float:left;
  }

  img{
    border-radius: 50%;
  }

  .fav{
    width: 10%;
    margin-left: 1rem;
    cursor: pointer;
  }

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    width: 90%;
    margin-bottom: 3rem;
    font-style: italic;
    color: white;
    font-family: 'M PLUS 1 Code', sans-serif;
  }

  p {
    font-size: 1.5rem;
    color: hsl(var(--saturated-green));
    margin-bottom: 1rem;
  }

  .apresentation .text {
    color: hsl(var(--saturated-green));
    margin-bottom: 4rem;
    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }

    @media (max-width: 786px) {
      margin-bottom: 2rem;
      h1 {
        font-size: 3rem;
      }
    }
  }

  .apresentation .search {
    input {
      height: 40px;
      border: 0;
      border-bottom: 1px solid hsl(var(--saturated-green));
      max-width: 360px;
      width: 100%;
      outline: none;
      font-size: 1.5rem;
      padding: 1rem;

      color: #fff;
      background: 0;
    }
  }
`;
