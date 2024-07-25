import { Statistics } from "../Wrapped";
import { ShareImageData } from "../types";

export default function getShareUrl(statistics: Statistics) {
  const data: ShareImageData = {
    name: statistics.name,
    storiesPosted: statistics.activity.storiesPosted,
    dmReceived: statistics.directMessages.dmReceived,
    topReceiver: statistics.directMessages.topReceiver1!,
    dmSent: statistics.directMessages.dmSent,
    topSender: statistics.directMessages.topSender1!,
    reelsShared: statistics.directMessages.reelsShared,
    postsLiked: statistics.activity.likedPosts,
    reelsLiked: statistics.activity.likedReels,
    topPostAccount: statistics.activity.topPostAccount1!,
    topReelAccount: statistics.activity.topReelAccount1!,
    commentsWritten: statistics.activity.commentsWritten,
  };

  const url = new URL("/api/image", window.location.href);
  url.searchParams.set("data", JSON.stringify(data));

  return url.toString();
}
