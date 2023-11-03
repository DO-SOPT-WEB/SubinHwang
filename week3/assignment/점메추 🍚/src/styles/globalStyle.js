import { styled, createGlobalStyle } from "styled-components";
import BMHANNAWOFF from "../assets/fonts/BMHANNAProOTF.woff";
import BMEULJIRO from "../assets/fonts/BMEULJIRO.woff";
const GlobalStyle = createGlobalStyle`

* {
    @font-face {
        font-family: 'HANNA'; 
        src: url(${BMHANNAWOFF}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'EULJIRO'; 
        src: url(${BMEULJIRO}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
}

#root {
  max-width: 1080px;
  margin:0 auto;
}
html{
    background: #2BC1BC;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  color: #fff;
  font-family: 'HANNA';
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
button{
    border:none;
    font-family:"EULJIRO";

    cursor:pointer;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

export default GlobalStyle;

export const Header = styled.header`
  padding: 20px 0;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
