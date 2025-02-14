import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";

function PublicPrivateChanges({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000">
        You've switched between public and private{" "}
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.profile.publicPrivateChanges} duration={2} />{" "}
        times
      </FatHeading>
    </WrappedContainer>
  );
}

export default PublicPrivateChanges;
