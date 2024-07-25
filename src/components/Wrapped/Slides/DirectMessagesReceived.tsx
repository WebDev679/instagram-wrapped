import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import FatHeading from "../MainHeading";
import InfoText from "../InfoText";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";

function DirectMessagesReceived({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer>
      <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000" >
        You have received a total of
      </InfoText>
      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.directMessages.dmReceived} duration={2} />{" "}
        <br />
        DMs
      </FatHeading>


      {statistics.directMessages.topSender1 && (
        <HideForTime time={500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            and got a lot of them from the following
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topSender1 && (
        <HideForTime time={1000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
            1. {statistics.directMessages.topSender1}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topSender2 && (
        <HideForTime time={1500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          2. {statistics.directMessages.topSender2}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topSender3 && (
        <HideForTime time={2000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          3. {statistics.directMessages.topSender3}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topSender4 && (
        <HideForTime time={2500}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          4. {statistics.directMessages.topSender4}
          </InfoText>
        </HideForTime>
      )}

      {statistics.directMessages.topSender5 && (
        <HideForTime time={3000}>
          <InfoText className="animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          5. {statistics.directMessages.topSender5}
          </InfoText>
        </HideForTime>
      )}
    </WrappedContainer>
  );
}

export default DirectMessagesReceived;
