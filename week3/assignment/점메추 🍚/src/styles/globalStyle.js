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
    box-sizing : border;
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
    font-size:1rem;
    cursor:pointer;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

export default GlobalStyle;

export const HeaderWrapper = styled.header`
  padding: 20px 0;
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  height: calc(100vh - 70px);
  text-align: center;
`;
export const Title = styled.h1`
  font-size: 1.8rem;
`;
export const Quetion = styled.h2`
  font-size: 3rem;
  font-weight: 100;
`;
export const Character = styled.img`
  width: 150px;
`;
export const Answer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 0 0;
`;
export const Balloon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;

  margin: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;
export const BalloonText = styled.p`
  color: #000;
  font-size: 1.5rem;
`;
export const WhiteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  margin: 20px;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #13868d;
  color: #fff;
  transition: 0.3s;
`;
export const RadioBalloon = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;

  margin: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  &:checked {
    background: red;
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: #13868d;
  }
  &:checked + label > p {
    color: #fff;
  }
  &:checked + label::before {
    border-color: #13868d transparent transparent transparent;
    color: #fff;
  }
`;

export const ButtonSection = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  justify-content: space-between;
  width: 750px;
`;

export const DisabledNextButton = styled(Button)`
  opacity: 50%;
  cursor: not-allowed;
`;
export const ActiveNextButton = styled(Button)`
  &:hover {
    box-shadow: 0 0 8px 4px #13868d;
    transition: 0.3s;
  }
`;
export const PrevButton = styled(Button)`
  background: #dadada;
  color: #333;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 8px 4px #dadada;
    transition: 0.3s;
  }
`;
