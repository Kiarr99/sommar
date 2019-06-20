import React from 'react';
import styled from 'styled-components'

const Footerwrapper = styled.footer `
  background: var(--mainDarkblue);
  margin: -0.5rem;
  margin-top: -1rem;
  
  p {
    color: var(--mainWhite);
    font-family: 'Montserrat', sans-serif;
    margin-left: 3.5%;
  }
  h1 {
    color: var(--mainRed);
    font-size: 400%;
    font-family: 'Montserrat', sans-serif;
    margin-left: 3.5%;
    margin-top: -0.2%;
  }

  .container-1 {
    height: 11rem;
  }
  .container-2 {
    height: 11rem;
  }
  .container-3 {
    height: 11rem;
  }

  .container-4 {
    height: 8rem;
  }
    .omoss {
      color: var(--mainRed);
      font-family: 'Montserrat', sans-serif;
      display:flex;
      justify-content: center;
      margin-top: 5%;
      font-size: 400%;
    }
  hr {
    border-color: var(--mainGrey); /* To change color of hr, apply border-color */
  }



`

function Footer() {
  return (
        <Footerwrapper> 
          <hr>
          </hr>
          <div className = "container-1">
          <p>
            Årskurs
          </p>
          <h1>1</h1>
          </div>
          <hr>
          </hr> 
          <div className = "container-2">
          <p>
            Årskurs
          </p>
          <h1>2</h1>
          </div>
          <hr>
          </hr> 
          
          <div className = "container-3">
          <p>
            Årskurs
          </p>
          <h1>3</h1>
          </div>
          <hr>
          </hr> 
          <div className = "container-4">
          <p>
              
          </p>
          <h2 className = "omoss">Om oss</h2>
          </div>

        </Footerwrapper>
  );
}

export default Footer;
