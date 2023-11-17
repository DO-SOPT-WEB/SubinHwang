import { Balloon, BalloonText } from "../styles/commonStyle";

import MainSection from "../components/MainSection";
import { RECOMMEND_BY } from "../utils/recommendType";
import { PAGE } from "../utils/page";

export default function TypeSelectPage({ nextPage }) {
  const contents = (
    <>
      <Balloon onClick={() => nextPage(PAGE.TYPE_SELECT, RECOMMEND_BY.TYPE)}>
        <BalloonText>{RECOMMEND_BY.TYPE}</BalloonText>
      </Balloon>
      <Balloon onClick={() => nextPage(PAGE.TYPE_SELECT, RECOMMEND_BY.RANDOM)}>
        <BalloonText>{RECOMMEND_BY.RANDOM}</BalloonText>
      </Balloon>
    </>
  );

  return (
    <>
      <MainSection page={PAGE.TYPE_SELECT} contents={contents} />
    </>
  );
}
