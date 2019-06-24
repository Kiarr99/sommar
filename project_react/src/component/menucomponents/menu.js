import React from 'react';
import styled from 'styled-components'

//colors
const Body1 = styled.body `
    height: 100vh; /* gör att body tar upp hela hemsidan*/
    margin: 0;
    padding: 0;
    display: flex;
    
    background-color: var(--mainDarkblue);

    a {
        color: var(--mainRed);
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
    }
    .Unordered_list {
        display: flex;
        margin-right: 20%;
        flex-direction: column;
        justify-content: space-between;
        list-style-type: none;
        font-size: 400%;
        
    }
   
    
`;

const Li = styled.li`
    width: 120%;
    transition: 0.3s;
    

    &:hover {
        margin-left: 15%;
    }




`; 





function Menu() {
  return (
    <Body1>
        
        <ul className = "Unordered_list">
            <Li>
                <a href = "hem">
                    Hem
                </a>
            </Li>
            <Li>
                <a>
                    Årskurs 1  
                </a>
            </Li>
            <Li>
                <a>
                    Årskurs 2
                </a>
            </Li>
            <Li>
                <a>
                    Årskurs 3
                </a>
            </Li>
            <Li>
                <a>
                    Om oss
                </a>
            </Li>            
        </ul>
    </Body1>
    
  );
}

export default Menu;
