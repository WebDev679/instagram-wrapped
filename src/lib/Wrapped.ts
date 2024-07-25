import Statistic from "./Statistics/Statistic";
import { InstagramUserData } from "./types";
import * as Sentry from "@sentry/nextjs";

import ProfileStatistic, {
  ProfileStatisticResult,
} from "./Statistics/ProfileStatistics";
import DmStatistic, { DmStatisticResult } from "./Statistics/DmStatistics";
import ActivityStatistic, {
  ActivityStatisticResult,
} from "./Statistics/ActivityStatistics";
import SearchStatistic, {
  SearchStatisticResult,
} from "./Statistics/SearchStatistics";
import ExternalTrackingStatistic, {
  ExternalTrackingStatisticResult,
} from "./Statistics/ExternalTrackingStatistics";
import EmojiStatistic, {
  EmojiStatisticResult,
} from "./Statistics/EmojiStatistics";
import UseTimeStatistic, {
  UseTimeStatisticResult,
} from "./Statistics/UseTimeStatistic";

export type Statistics = {
  name: string;
  profile: ProfileStatisticResult;
  directMessages: DmStatisticResult;
  activity: ActivityStatisticResult;
  search: SearchStatisticResult;
  emoji: EmojiStatisticResult;
  useTime: UseTimeStatisticResult;
};

export const SAMPLE_STATISTICS: Statistics = {
  name: "Walter White",
  profile: {
    unfollowedCount: 3,
    publicPrivateChanges: 7,
    profilePhotoChanges: 9,
    storiesPosted: 220,
  },
  directMessages: {
    dmSent: 2222,
    dmReceived: 1800,
    reelsShared: 670,
    postsShared: 152,
    tiktoksShared: 410,
    topSender1: "Eva",
    topSender2: "Milo",
    topSender3: "Liam",
    topSender4: "Zoe",
    topSender5: "Oscar",
    topReceiver1: "Sophie",
    topReceiver2: "Nathan",
    topReceiver3: "Julia",
    topReceiver4: "Victor",
    topReceiver5: "Isabella",
    mostActiveHour: "18",
  },
  activity: {
    commentsWritten: 134,
    likedComments: 560,
    likedPosts: 1894,
    likedReels: 3120,
    topPostAccount1: "Ben",
    topPostAccount2: "Chloe",
    topPostAccount3: "Dexter",
    topPostAccount4: "Ella",
    topPostAccount5: "Frank",
    topReelAccount1: "Gwen",
    topReelAccount2: "Harry",
    topReelAccount3: "Ivy",
    topReelAccount4: "Jack",
    topReelAccount5: "Kara",
    pollsParticipated: 721,
    storyLikes: 489,
    storiesPosted: 120,
  },
  search: {
    topSearchValue: {
      value: "bestCoffeeShops",
      count: 204,
    },
  },
  emoji: {
    emojisUsed: 64,
    mostUsedEmoji: {
      emoji: "💀",
      count: 293,
    },
    leastUsedEmoji: {
      emoji: "🤔",
      count: 1,
    },
  },
  useTime: {
    totalUsageTimeSec: 60 * 60 * 24 * 7 * 2,
    totalSessions: 1474,
    averageSessionLengthSec: 158,
    longestSession: {
      startTime: new Date(),
      endTime: new Date(),
      lengthSec: 120815,
    },
    mostActiveWeekday: {
      weekday: "Friday",
      averageUsageTime: 480.65,
    },
  },
};

export default class Wrapped {
  public demoMode = false;
  public possiblyEmptyExport = false;

  constructor(public userData: InstagramUserData) {
    if (
      !userData.accountConnections ||
      userData.accountConnections.following?.length === 0
    ) {
      this.possiblyEmptyExport = true;
    }
  }

  public getStatistics(): Statistics {
    console.log("Getting statistics", this.userData);

    if (this.demoMode) {
      return SAMPLE_STATISTICS;
    }

    return {
      name: this.userData.accountInformation.name ?? "you",
      profile: this.calculateStatistic(ProfileStatistic),
      directMessages: this.calculateStatistic(DmStatistic),
      activity: this.calculateStatistic(ActivityStatistic),
      search: this.calculateStatistic(SearchStatistic),
      //externalTracking: this.calculateStatistic(ExternalTrackingStatistic),
      emoji: this.calculateStatistic(EmojiStatistic),
      useTime: this.calculateStatistic(UseTimeStatistic),
    };
  }

  private calculateStatistic<T>(
    statistic: new (wrapped: Wrapped) => Statistic<T>
  ): T {
    const statisticInstance = new statistic(this);

    try {
      return statisticInstance.calculateResult();
    } catch (e) {
      Sentry.captureException(
        new Error(`Failed to calculate statistic ${statistic.name}`),
        {
          extra: {
            originalException: e,
          },
        }
      );
      console.log(`Failed to calculate statistic ${statistic.name}`, e);
      return statisticInstance.getDefaultValue();
    }
  }
}
