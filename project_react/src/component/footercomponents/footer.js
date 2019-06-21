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
    height: 12rem;
    transition: 0.3;
    background-color: var(--mainDarkblue);
    &:hover {
      background-color: #d9a7c7;  /* fallback for old browsers */
      background-color: -webkit-linear-gradient(to right, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */  
      background-color: linear-gradient(to right, #fffcdc, #d9a7c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    }
  };
  .container-2 {
    height: 12rem;
  }
  .container-3 {
    height: 12rem;
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
//After reading the documentations we can do the following instead of using className
const Div1 = styled.div `
  height: 12rem;  
  background: var(--mainDarkblue);

  transition: 1s;
  
    &:hover {
      background: #ff7e5f;  /* fallback for old browsers */
     
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
