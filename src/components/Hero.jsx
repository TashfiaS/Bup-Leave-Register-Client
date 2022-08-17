import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import StatusTable from "./StatusTable";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
    <Section id="hero" className="flex flex-col">
      <div className="background">
        <img src="https://scontent.fdac10-1.fna.fbcdn.net/v/t39.30808-6/281130564_7861038507239640_8419094957020165798_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGDjowOPYwUEbf4J39gFsIYcEStp2XLRjNwRK2nZctGMykZxCXj23LEt4oXpGlDrMbrE0sqQDCShxeCyQ2UL3oF&_nc_ohc=JfDTly5a4rgAX9LfEzS&_nc_ht=scontent.fdac10-1.fna&oh=00_AT8BbHd5zrhf9F8fKpnhutdqQYJvxUHzrgKka2t2YFeLow&oe=63010864" alt="" />
      </div>
      <div className="content p-12">
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
      <StatusTable></StatusTable></>
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
    height: 100%;
    width: 100%;
    img {
      height: 100vh;
      width: 100vw;
      object-fit: cover;
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
      height: 100vh;
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
