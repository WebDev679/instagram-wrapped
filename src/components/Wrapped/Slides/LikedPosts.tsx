import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";


function LikedPosts({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000">
        You have liked a total of
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.likedPosts} duration={2} />
        <br />
        posts
      </FatHeading>

      {statistics.activity.topPostAccount1 && (
        <HideForTime time={500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            and liked a lot of them from the following
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topPostAccount1 && (
        <HideForTime time={1000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            1. {statistics.activity.topPostAccount1}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topPostAccount2 && (
        <HideForTime time={1500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          2. {statistics.activity.topPostAccount2}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topPostAccount3 && (
        <HideForTime time={2000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          3. {statistics.activity.topPostAccount3}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topPostAccount4 && (
        <HideForTime time={2500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          4. {statistics.activity.topPostAccount4}
          </InfoText>
        </HideForTime>
      )}

      {statistics.activity.topPostAccount5 && (
        <HideForTime time={3000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          5. {statistics.activity.topPostAccount5}
          </InfoText>
        </HideForTime>
      )}
    </WrappedContainer>
  );
}

export default LikedPosts;
 