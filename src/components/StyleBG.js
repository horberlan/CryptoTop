import { createGlobalStyle } from "styled-components";
 const StyleBG = createGlobalStyle`
*{
margin:0;
padding:0;
}
section{
position:relative;
width: 100%;
height:100vh;
background:#222222;
display:flex;
flex-direction: column;
overflow:hidden;
}
section .BgRow{
position:relative;
top:-50%;
width:100%;
display:flex;
padding: 10px 0;
white-space:nowrap;
font-size:64px; 
transform: rotate(-30deg);
}
i{
color: rgba(0,0,0,0.5);
transition:1%;
padding:0 50px;
user-select:none;
cursor:default;
}
i:hover{
transition:0%;
color:#0f0;
text-shadow: 0 0 120px #0f0;
}
section .BgRow div {
animation: animate1 80s linear infinite;
animation-delay:-40s;
}
section .BgRow div:nth-child(2) {
animation: animate2 80s linear infinite;
animation-delay:-40s;
}
@keyframes animate1 {
0% {
transform:translateX(100%);
}
100%{
transform: translateX(-100%);
}
}
@keyframes animate2 {
0% {
transform:translateX(0%);
}
100%{
transform: translateX(-200%);
}
}

section .BgRow:nth-child(even) div {
animation: animate3 80s linear infinite;
animation-delay:-40s;
}
section .BgRow:nth-child(even) div:nth-child(2) {
animation: animate4 80s linear infinite;
animation-delay:-40s;
}
@keyframes animate3 {
0% {
transform:translateX(-100%);
}
100%{
transform: translateX(100%);
}
}
@keyframes animate4 {
0% {
transform:translateX(-100%);
}
100%{
transform: translateX(0%);
}
}

`;

export default StyleBG;