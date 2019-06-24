import React from 'react';
import styled from 'styled-components'







const Footerwrapper = styled.footer `
  background: var(--mainDarkblue);
  
  hr {
    margin: 0;
    padding: 0;
    width: 100%;
    border-color: var(--mainGrey); /* To change color of hr, apply border-color */
  }

  

`;
//After reading the documentations we can do the following instead of using className
const Div1 = styled.div `
  height: 12rem;  

  margin-top:-1rem;
  background: var(--mainDarkblue);
  transition: 1s;

  p {
    /* årskurs*/
    color: var(--mainWhite);
    font-family: 'Montserrat', sans-serif;
    margin-left: 3.5%;
    padding-top: 1rem;
  }

  h1 {
    color: var(--mainRed);
    font-size: 400%;
    font-family: 'Montserrat', sans-serif;
    margin-left: 3.5%;
    margin-top: -0.2%;
  }
  
    &:hover {
      background: #ff7e5f;  /* fallback for old browsers */
      margin-left: 10%;
    }




`;

const Div2 = styled(Div1) `
&:hover {
    background: #d9a7c7;;  /* fallback for old browsers */
     
    }


`;

const Div3 = styled(Div1) `
&:hover {
    background: #a8ff78;  /* fallback for old browsers */
    
    }


`;
const Div4 = styled(Div1) `
  height: 14rem; 
  .omoss {
        color: var(--mainRed);
        font-family: 'Montserrat', sans-serif;
        display:flex;
        justify-content: center;
        margin-top: 5%;
        font-size: 400%;
      }

  &:hover {
      background: #FFEFBA;  /* fallback for old browsers */
      
      }


  `;

function Footer() {
  return (
        <Footerwrapper> 
          <hr>
          </hr>
          <Div1>
          <p>
            Årskurs
          </p>
          <h1>1</h1>
          </Div1>
          <hr>
          </hr> 
          <Div2>
          <p>
            Årskurs
          </p>
          <h1>2</h1>
          </Div2>
          <hr>
          </hr> 
          
          <Div3>
          <p>
            Årskurs
          </p>
          <h1>3</h1>
          </Div3>
          <hr>
          </hr> 
          <Div4>
          <p>
              
          </p>
          <h2 className = "omoss">Om oss</h2>
          </Div4>

        </Footerwrapper>
  );
}

export default Footer;
