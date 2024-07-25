import Statistic from "./Statistic";

export type ActivityStatisticResult = {
  commentsWritten: number;
  likedComments: number;
  likedPosts: number;
  likedReels: number,

  topPostAccount1: string | null,
  topPostAccount2: string | null,
  topPostAccount3: string | null,
  topPostAccount4: string | null,
  topPostAccount5: string | null,

  topReelAccount1: string | null,
  topReelAccount2: string | null,
  topReelAccount3: string | null,
  topReelAccount4: string | null,
  topReelAccount5: string | null,
  
  pollsParticipated: number;
  storyLikes: number;
  storiesPosted: number;
};

export default class ActivityStatistic extends Statistic<ActivityStatisticResult> {
  name = "ActivityStatistic";

  calculateResult(): ActivityStatisticResult {
    const posts =
      this.wrapped.userData.activity.likedPosts
        ?.filter((post) => post.isPost)
        .map((post) => post.account) ?? [];

    const reels =
    this.wrapped.userData.activity.likedPosts
      ?.filter((post) => post.isReel)
      .map((post) => post.account) ?? [];

    const likesPerAccountPost = posts.reduce((acc, sender) => {
      acc[sender] = (acc[sender] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);


    const likesPerAccountReel = reels.reduce((acc, sender) => {
      acc[sender] = (acc[sender] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedPosts = Object.entries(likesPerAccountPost).sort(
      ([, a], [, b]) => b - a
    );

    const sortedReels = Object.entries(likesPerAccountReel).sort(
      ([, a], [, b]) => b - a
    );
    //const topSender = sortedSenders[0]?.[0] ?? null;

    const topPosts = sortedPosts.slice(0, 6) ?? null;

    const topReels = sortedReels.slice(0, 7) ?? null;

    return {
      commentsWritten: this.wrapped.userData.activity.comments?.length ?? 0,
      likedComments: this.wrapped.userData.activity.likedComments?.length ?? 0,
      likedPosts: this.wrapped.userData.activity.likedPosts?.filter((post) => post.isPost)
      .length ?? 0,
      likedReels: this.wrapped.userData.activity.likedPosts?.filter((post) => post.isReel)
      .length ?? 0,
      topPostAccount1: topPosts[0][0],
      topPostAccount2: topPosts[1][0],
      topPostAccount3: topPosts[2][0],
      topPostAccount4: topPosts[3][0],
      topPostAccount5: topPosts[4][0],

      topReelAccount1: topReels[0][0],
      topReelAccount2: topReels[1][0],
      topReelAccount3: topReels[2][0],
      topReelAccount4: topReels[3][0],
      topReelAccount5: topReels[4][0],

      pollsParticipated:
        this.wrapped.userData.activity.participatedPolls?.length ?? 0,
      storyLikes: this.wrapped.userData.activity.storyLikes?.length ?? 0,
      storiesPosted: this.wrapped.userData.activity.stories?.length ?? 0,
    };
  }

  getDefaultValue(): ActivityStatisticResult {
    return {
      commentsWritten: 0,
      likedComments: 0,
      likedPosts: 0,
      likedReels: 0,
      topPostAccount1: null,
      topPostAccount2: null,
      topPostAccount3: null,
      topPostAccount4: null,
      topPostAccount5: null,

      topReelAccount1: null,
      topReelAccount2: null,
      topReelAccount3: null,
      topReelAccount4: null,
      topReelAccount5: null,
      pollsParticipated: 0,
      storyLikes: 0,
      storiesPosted: 0,
    };
  }
}
