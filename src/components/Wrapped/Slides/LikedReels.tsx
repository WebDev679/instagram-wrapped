import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";

function LikedReels({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer>
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        You have liked a total of
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.likedReels} duration={2} />
        <br />
        reels
      </FatHeading>

      {statistics.activity.topReelAccount1 && (
        <HideForTime time={500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            and liked a lot of them from the following
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topReelAccount1 && (
        <HideForTime time={1000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            1. {statistics.activity.topReelAccount1}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topReelAccount2 && (
        <HideForTime time={1500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          2. {statistics.activity.topReelAccount2}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topReelAccount3 && (
        <HideForTime time={2000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          3. {statistics.activity.topReelAccount3}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topReelAccount4 && (
        <HideForTime time={2500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          4. {statistics.activity.topReelAccount4}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topReelAccount5 && (
        <HideForTime time={3000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          5. {statistics.activity.topReelAccount5}
          </InfoText>
        </HideForTime>
      )}
    </WrappedContainer>
  );
}

export default LikedReels;
 