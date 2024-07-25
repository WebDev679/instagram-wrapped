import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";

const commentsOnPolls = {
  0: "Looks like you're still waiting for that perfect poll!",
  10: "A cautious voter, aren’t you? Every poll counts.",
  50: "Getting into the swing of things — your opinion matters!",
  100: "A poll powerhouse! Your input is shaping trends.",
};

function Polls({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000">
        You answered
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.pollsParticipated} duration={2} />
        <br />
        polls
      </FatHeading>
      <HideForTime time={700}>
        <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000 delay-700">
          {lookup(statistics.activity.pollsParticipated, commentsOnPolls)}
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default Polls;
 