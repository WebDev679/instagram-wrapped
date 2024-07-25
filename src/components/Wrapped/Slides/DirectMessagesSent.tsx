import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";

function DirectMessagesSent({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000">
        You have sent a total of
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.directMessages.dmSent} duration={2} />{" "}
        <br />
        DMs
      </FatHeading>


      {statistics.directMessages.topReceiver1 && (
        <HideForTime time={500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            and sent a lot of them to the following
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topReceiver1 && (
        <HideForTime time={1000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            1. {statistics.directMessages.topReceiver1}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topReceiver2 && (
        <HideForTime time={1500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          2. {statistics.directMessages.topReceiver2}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topReceiver3 && (
        <HideForTime time={2000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          3. {statistics.directMessages.topReceiver3}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topReceiver4 && (
        <HideForTime time={2500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          4. {statistics.directMessages.topReceiver4}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topReceiver5 && (
        <HideForTime time={3000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          5. {statistics.directMessages.topReceiver5}
          </InfoText>
        </HideForTime>
      )}
    </WrappedContainer>
  );
}

export default DirectMessagesSent;
