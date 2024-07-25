import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import getComparableActivity from "@/lib/utils/getComparableActivity";
import HideForTime from "../HideForTime";

function WatchTimeComparableActivity({ statistics }: WrappedSlideProps) {
  const comparableActivity = getComparableActivity(
    statistics.useTime.totalUsageTimeSec
  );

  return (
    <WrappedContainer>
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        in that time you could've
      </InfoText>

      <HideForTime time={500}>
        <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500 max-w-xl mx-auto">
          {comparableActivity}
        </FatHeading>
      </HideForTime>
    </WrappedContainer>
  );
}

export default WatchTimeComparableActivity;
