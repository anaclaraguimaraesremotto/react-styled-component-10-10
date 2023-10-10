import styled from 'styled-components'

// primeira letra maiuscula
export const DivComp1 = styled.div`
    border: 3px solid blue;
    background-color: lightblue;
    padding: 20px;

    h2{
        text-align: center;
        color: blue;
    }

    p{
        text-align: justify;
        color: darkblue ;
    }

`

export const Button = styled.button`
    /* se for ? positivo azul : se nao cinza */
    background-color: ${(props)=> props.$isOn ? "#00f" : "#999"};
    border-radius: 5px;
    padding: 5px;
    color: white;
    border: none;
`