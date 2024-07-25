import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import HideForTime from "../HideForTime";
import CountUp from "react-countup";

function ReelsShared({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        and you shared a total of 
      </InfoText>

      <HideForTime time={500}>
        <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500 max-w-xl mx-auto">
          <CountUp end={statistics.directMessages.reelsShared} duration={2} />
        </FatHeading>
      </HideForTime>

      <HideForTime time={2000}>
        <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-2000">
          reels.
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default ReelsShared;
