import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section id="hero">
      <div className="background">
        <img src="https://afd.gov.bd/sites/default/files/inline-images/BUP%20Pic%20111.jpg" alt="" />
      </div>
      <div className="content">
        <div className="search">
          <div className="container">
            <label>Which Leave you want to take </label>
            <input id="search-location" type="text" placeholder="Your Leave Type" />
          </div>
          <div className="container">
            <label>Check-in</label>
            <input id="search-inDate" type="date" />
          </div>
          <div className="container">
            <label>Check-out</label>
            <input id="search-outDate" type="date" />
          </div>
          <button type="submit" onClick={() => console.log("Nothing")}>
            Apply
          </button>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
  .background {
    position: absolute;
    z-index: -99;
    height: 100vh;
    width: 100vw;
    img {
      width: 100%;
      filter: brightness(90%);
    }
  }
  .content {
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .search {
      text-shadow: 1px 1px 2px lightgrey, 0 0 1em lightgrey, 0 0 0.2em lightgrey;
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      padding-top: 5rem;
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;

export default Hero;
