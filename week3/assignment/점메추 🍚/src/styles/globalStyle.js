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
    background: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.white};
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
    font-size:${({ theme }) => theme.fontSize.sm};
    cursor:pointer;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
`;

export default GlobalStyle;

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

export const Quetion = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
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
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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
    border-color: ${({ theme }) => theme.colors.white} transparent transparent
      transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;
export const BalloonText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
export const WhiteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.3s;
`;
export const RadioBalloon = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
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
    border-color: ${({ theme }) => theme.colors.white} transparent transparent
      transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.colors.secondary};
  }
  &:checked + label > p {
    color: ${({ theme }) => theme.colors.white};
  }
  &:checked + label::before {
    border-color: ${({ theme }) => theme.colors.secondary} transparent
      transparent transparent;
    color: ${({ theme }) => theme.colors.white};
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
    box-shadow: 0 0 8px 4px ${({ theme }) => theme.colors.secondary};
    transition: 0.3s;
  }
`;
export const PrevButton = styled(Button)`
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.darkGrey};
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 8px 4px ${({ theme }) => theme.colors.grey};
    transition: 0.3s;
  }
`;
