import { WrappedSlideProps } from "@/components/Wrapped/WrappedContainer";
import EventEmitter from "events";
import Intro from "@/components/Wrapped/Slides/Intro";
import StoriesPosted from "@/components/Wrapped/Slides/StoriesPosted";
import UnfollowedCount from "@/components/Wrapped/Slides/UnfollowedCount";
import DirectMessagesReceived from "@/components/Wrapped/Slides/DirectMessagesReceived";
import DirectMessagesSent from "@/components/Wrapped/Slides/DirectMessagesSent";
import ReelsShared from "@/components/Wrapped/Slides/ReelsShared";
import Comments from "@/components/Wrapped/Slides/Comments";
import Polls from "@/components/Wrapped/Slides/Polls";
import PublicPrivateChanges from "@/components/Wrapped/Slides/PublicPrivateChanges";
import Roundup from "@/components/Wrapped/Slides/Roundup";
import MostSearchedTerm from "@/components/Wrapped/Slides/MostSearchedTerm";
import { trackEvent } from "../analytics";
import { Statistics } from "../Wrapped";
import Emojis from "@/components/Wrapped/Slides/Emojis";
import TotalWatchTime from "@/components/Wrapped/Slides/TotalWatchTime";
import WatchTimeComparableActivity from "@/components/Wrapped/Slides/WatchTimeComparableActivity";
import LikedPosts from "@/components/Wrapped/Slides/LikedPosts";
import LikedReels from "@/components/Wrapped/Slides/LikedReels";

export type Slide = {
  name: string;
  component: React.FC<WrappedSlideProps>;
  duration: number;
  skip?: (statistics: Statistics) => boolean;
};

const SLIDES: Slide[] = [
  {
    name: "Intro",
    component: Intro,
    duration: 6000,
  },
  {
    name: "TotalWatchTime",
    component: TotalWatchTime,
    duration: 6000,
    skip: (statistics) => statistics.useTime.totalUsageTimeSec === 0,
  },
  {
    name: "WatchTimeComparableActivity",
    component: WatchTimeComparableActivity,
    duration: 6000,
    skip: (statistics) => statistics.useTime.totalUsageTimeSec === 0,
  },
  {
    name: "LikedPosts",
    component: LikedPosts,
    duration: 6000,
    skip: (statistics) => statistics.activity.likedPosts === 0,
  },
  {
    name: "LikedReels",
    component: LikedReels,
    duration: 6000,
    skip: (statistics) => statistics.activity.likedReels === 0,
  },
  {
    name: "StoriesPosted",
    component: StoriesPosted,
    duration: 6000,
  },
  {
    name: "PublicPrivateChanges",
    component: PublicPrivateChanges,
    duration: 6000,
    skip: (statistics) => statistics.profile.publicPrivateChanges === 0,
  },
  {
    name: "DirectMessagesReceived",
    component: DirectMessagesReceived,
    duration: 6000,
    skip: (statistics) => statistics.directMessages.dmReceived === 0,
  },
  {
    name: "DirectMessagesSent",
    component: DirectMessagesSent,
    duration: 6000,
    skip: (statistics) => statistics.directMessages.dmReceived === 0,
  },
  {
    name: "Emojis",
    component: Emojis,
    duration: 6000,
    skip: (statistics) => statistics.emoji.mostUsedEmoji.count === 0,
  },
  {
    name: "ReelsShared",
    component: ReelsShared,
    duration: 6000,
    skip: (statistics) => statistics.directMessages.reelsShared === 0,
  },
  {
    name: "Comments",
    component: Comments,
    duration: 6000,
    skip: (statistics) => statistics.activity.commentsWritten === 0,
  },
  {
    name: "Polls",
    component: Polls,
    duration: 6000,
  },
  {
    name: "Roundup",
    component: Roundup,
    duration: 6000,
  },
];

export default class WrappedPlayer extends EventEmitter {
  public currentSlide: Slide | null = null;

  public async play(statistics: Statistics) {
    for (let i = 0; i < SLIDES.length; i++) {
      const slide = SLIDES[i];

      if (slide.skip && slide.skip(statistics)) {
        continue;
      }

      this.currentSlide = slide;
      trackEvent(`slide-${slide.name}`);

      this.emit("update");
      await this.wait(slide.duration);
    }
  }

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
