import React from 'react';
import styled from 'styled-components'

const Bodywrapper = styled.body `
    display: relative;
    margin: -0.5rem;
    height: 25rem;
    margin-top: -4rem;
    background-color: #2A2F36; 
    overflow-x: visible;

    .container {
        background-color: #2A2F36; 
    }

    p{
        color: var(--mainWhite);
        position: relative;
        font-family: 'Montserrat', sans-serif;
        font-size: 400%;
        margin-left: 3.5%;

    }
    .last {
        margin-top: -5%;
    }
    

    .list {
        color: var(--mainWhite);
        margin-top: 15%;
        display: flex;
        justify-content:space-between;
        font-family: 'Montserrat', sans-serif;


        
    }
        .arskurs {
            margin-right: 3.5%;
            color: var(--mainGrey);
        }

    img {
        margin-right:20%;
        max-width: 20%;
        height: 22%;
    }
`
const Mark = styled.mark `
    color: var(--mainRed);
    background-color: var(--mainDarkblue);
    text-decoration: underline;

`




function Body() {
  return (
      <Bodywrapper>
          <div className = "container">
            <p className = "first">Välkommen, här finner du </p> <p className = "last"> <Mark>material</Mark>   för teknisk fysik.</p>
          </div>
          <div> 
                <ul>
                    <li className = "list">
                        <a>Om oss   <img src = "https://i.imgur.com/YlnoTG0.png"/> </a> 
                        <a className = "arskurs">Välj årskurs nedanför</a>
                    </li>
                </ul>
          </div>
      </Bodywrapper>
      
        
  );
}

export default Body;
