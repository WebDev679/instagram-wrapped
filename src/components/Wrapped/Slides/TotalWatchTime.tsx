import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import formatTimeLength from "@/lib/utils/formatTimeLength";
import HideForTime from "../HideForTime";

function TotalWatchTime({ statistics }: WrappedSlideProps) {
  const { amount, unit } = formatTimeLength(
    statistics.useTime.totalUsageTimeSec
  );
  const watchTimeMins = Math.round(statistics.useTime.totalUsageTimeSec / 60);

  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        Your total use time for Instagram in the past year was
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={watchTimeMins} duration={2} /> <br />
        minutes
      </FatHeading>

      <HideForTime time={500}>
        <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          That's {amount} {unit}!
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default TotalWatchTime;
