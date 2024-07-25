import { InstagramDirectMessage } from "../types";
import Statistic from "./Statistic";

export type DmStatisticResult = {
  dmSent: number;
  dmReceived: number;

  reelsShared: number;
  postsShared: number;
  tiktoksShared: number;

  topSender1: string | null;
  topSender2: string | null;
  topSender3: string | null;
  topSender4: string | null;
  topSender5: string | null;

  topReceiver1: string | null;
  topReceiver2: string | null;
  topReceiver3: string | null;
  topReceiver4: string | null;
  topReceiver5: string | null;

  mostActiveHour: string | null;
};

export default class DmStatistic extends Statistic<DmStatisticResult> {
  name = "DmStatistic";

  calculateResult(): DmStatisticResult {
    const senders =
      this.wrapped.userData.directMessages
        ?.filter((dm) => !dm.isUserSender)
        .map((dm) => dm.sender) ?? [];

    const receivers =
      this.wrapped.userData.directMessages
        ?.filter((dm) => dm.isUserSender)
        .map((dm) => dm.receiver) ?? [];

    const messagesPerSender = senders.reduce((acc, sender) => {
      acc[sender] = (acc[sender] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);


    const messagesPerReceiver = receivers.reduce((acc, receiver) => {
      acc[receiver] = (acc[receiver] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const sortedSenders = Object.entries(messagesPerSender).sort(
      ([, a], [, b]) => b - a
    );

    const sortedReceivers = Object.entries(messagesPerReceiver).sort(
      ([, a], [, b]) => b - a
    );
    //const topSender = sortedSenders[0]?.[0] ?? null;

    const topSenders = sortedSenders.slice(0, 6) ?? null;

    const topReceivers = sortedReceivers.slice(0, 7) ?? null;


    return {
      dmSent:
        this.wrapped.userData.directMessages?.filter((dm) => dm.isUserSender)
          .length ?? 0,
      dmReceived:
        this.wrapped.userData.directMessages?.filter((dm) => !dm.isUserSender)
          .length ?? 0,

      reelsShared:
        this.wrapped.userData.directMessages?.filter((dm) => dm.isReelShare)
          .length ?? 0,
      postsShared:
        this.wrapped.userData.directMessages?.filter((dm) => dm.isPostShare)
          .length ?? 0,
      tiktoksShared:
        this.wrapped.userData.directMessages?.filter((dm) => dm.isTikTokShare)
          .length ?? 0,

          topSender1: topSenders[0][0],
          topSender2: topSenders[1][0],
          topSender3: topSenders[2][0],
          topSender4: topSenders[3][0],
          topSender5: topSenders[4][0],



          topReceiver1: topReceivers[0][0],
          topReceiver2: topReceivers[1][0],
          topReceiver3: topReceivers[2][0],
          topReceiver4: topReceivers[3][0],
          topReceiver5: topReceivers[4][0],

      mostActiveHour: this.getMostActiveHour(
        this.wrapped.userData.directMessages?.filter((dm) => !dm.isUserSender)
      ),
    };
  }

  getDefaultValue(): DmStatisticResult {
    return {
      dmSent: 0,
      dmReceived: 0,

      reelsShared: 0,
      postsShared: 0,
      tiktoksShared: 0,

      topSender1: null,
      topSender2: null,
      topSender3: null,
      topSender4: null,
      topSender5: null,

    topReceiver1: null,
    topReceiver2: null,
    topReceiver3: null,
    topReceiver4: null,
    topReceiver5: null,

      mostActiveHour: null,
    };
  }

  private getMostActiveHour(messages: InstagramDirectMessage[]) {
    let hours: Record<number, number> = {};

    for (const message of messages) {
      const date = new Date(message.timestamp * 1000);
      const hour = date.getHours();

      hours[hour] = (hours[hour] ?? 0) + 1;
    }

    const sortedHours = Object.entries(hours).sort(([, a], [, b]) => b - a);
    const mostActiveHour = sortedHours[0]?.[0] ?? null;

    return mostActiveHour;
  }
}
