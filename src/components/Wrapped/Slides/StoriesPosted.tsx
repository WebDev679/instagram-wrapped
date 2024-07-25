import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import InfoText from "../InfoText";
import FatHeading from "../MainHeading";
import CountUp from "react-countup";
import HideForTime from "../HideForTime";
import lookup from "@/lib/utils/lookup";

const commentsOnStories = {
  0: "It seems you prefer to watch from the sidelines—mystery has its charm!",
  10: "Dipping your toes in the storytelling waters, nice start!",
  20: "Gaining momentum, your stories are getting noticed!",
  100: "A regular storyteller! Your followers must be delighted.",
  300: "You're the star of the show! Your stories light up feeds.",
  400: "Your storytelling marathon is impressive! Time for a creative pause?",
  1000: "You’re practically a celebrity! But remember, quality over quantity."
};

function StoriesPosted({ statistics }: WrappedSlideProps) {
  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500" text="text-starship-400">
      <InfoText className="!text-zinc-200">
        Over the past year, you have posted
      </InfoText>

      <FatHeading className="animate-in slide-in-from-bottom fade-in duration-1000">
        <CountUp end={statistics.activity.storiesPosted} duration={2} />
        <br />
        stories
      </FatHeading>

      <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
        and liked <CountUp end={statistics.activity.storyLikes} duration={2} />{" "}
        stories in total.
      </InfoText>
      <HideForTime time={500}>
        <InfoText className="!text-zinc-200 animate-in slide-in-from-bottom fade-in duration-1000 delay-500">
          {lookup(statistics.activity.storiesPosted, commentsOnStories)}
        </InfoText>
      </HideForTime>
    </WrappedContainer>
  );
}

export default StoriesPosted;
