import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";

const comment = {
  0: "Preferring the sidelines? That's cool.",
  10: "Quite the reserved observer, I see.",
  50: "Occasionally stepping into the spotlight, aren’t you?",
  100: "You love being in the thick of it all!",
  300: "Your enthusiasm is contagious!",
  500: "Always in the middle of the conversation!",
};

function Comments({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer>
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        You wrote
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.commentsWritten} duration={2} />
        <br />
        comments
      </FatHeading>
      <HideForTime time={700}>
        <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-700">
          {lookup(statistics.activity.commentsWritten, comment)}
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}   

export default Comments;
