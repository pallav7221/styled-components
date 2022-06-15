import styled from "styled-components"


const Button = styled.button`
font-size:18px;
padding:6px;
color:white;
padding-left:${(props) => props.image ? "29px" : "6px"};
background-color:${(props) => props.green ? "#1bb76e" : props.blue ? "#6432f9" : "#1a193d"};
border-radius:5px;
border:none;
cursor: pointer;

`
const Div = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`

const Pic = styled.img`
position:relative;
left:27px;
top:7px
`

export { Button, Div, Pic }