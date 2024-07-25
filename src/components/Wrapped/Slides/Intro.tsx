import React from "react";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import HideForTime from "../HideForTime";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";

function Intro({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
      Welcome, {statistics.name}!
      </FatHeading>

      <HideForTime time={500}>
        <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
        Ready to dive into your Instagram insights? Let’s get started!
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default Intro;
