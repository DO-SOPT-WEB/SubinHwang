import mainCharacter from "../assets/img/character.png";
import { styled } from "styled-components";

const Character = styled.img`
  width: 150px;
`;

export default function MainCharacter() {
  return <Character src={mainCharacter} alt="캐릭터" />;
}
