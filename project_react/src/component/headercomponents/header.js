import React from 'react';
import styled from 'styled-components'
// gives a the google font 'Montserrat', you can check more fonts at google fonts

const Headwrapper = styled.header `
    display: relative;
    background: #2A2F36;
    margin: -8px;
    padding: 30px; /* Fixes the height*/ 
    color: #ffffff;
    .logo {
        position: absolute;
        /* top: 50%; left:15px; */ 
        color: #ffffff;
        margin-left: 20px;
        transform: translateY(10%); 
        img {
            width: 43px;
        }


    }

    nav {
        transform: translateX(20%);
        color: #ffffff;
        ul li {
             /* display: inline-block; gör att li elementen är på en linje */
            list-style-type: none;
        
    }
    .list {
        display:flex;
        justify-content: space-around;
    }
    

}
`
const A = styled.a`
    margin-right: 50%;
    margin-left: 27%;
    position:relative;
    font-size: 20px;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    left: -100px; 
    /* Animated underline */ 
    &:hover{
        position: relative;
        text-decoration:none;
    }
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #DC4133;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;   
    }

    &:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);

    }
    
        
`


function Header() {
  return (
        <Headwrapper> 
        
            <div className = "logo">
                <a>
                    <img src= "https://i.imgur.com/aJaw092.png" />
                </a>
            </div>

            <nav>
                <ul>
                    <li className = "list">
                        <A href = "/hem">Hem</A>
                        <A href = "/meny">Meny</A>
                    </li>
                </ul>
            </nav>

        </Headwrapper>
  );
}

export default Header;
