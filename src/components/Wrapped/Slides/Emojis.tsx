import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";

function Emojis({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer>
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        Seems like your favorite emoji is "{statistics.emoji.mostUsedEmoji.emoji}" and you used it
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.emoji.mostUsedEmoji.count} duration={2} />
        <br />
        times
      </FatHeading>
      <HideForTime time={500}>
        <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          and you also used {statistics.emoji.emojisUsed.toLocaleString()} other
          emojis
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default Emojis;
