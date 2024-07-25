import { ShareImageDataSchema } from "@/lib/types";
import { ImageResponse } from "next/server";
import ModernContainer from "@/components/Image/ModernContainer";
import StatisticCard from "@/components/Image/StatisticCard";
import SimpleFooter from "@/components/Image/SimpleFooter";

export const runtime = "edge";

const interBlack = fetch(
  new URL("./Inter/Inter-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const interBlackData = await interBlack;

  const { searchParams } = new URL(request.url);
  const reqData = ShareImageDataSchema.safeParse(
    JSON.parse(searchParams.get("data") ?? "{}")
  );

  if (!reqData.success) {
    return new Response("Invalid request", { status: 400 });
  }

  const { data } = reqData;

  return new ImageResponse(
    (
      <ModernContainer>
      <h1 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "48px", marginBottom: "40px" }}>
        {data.name}'s Wrapped for Instagram
      </h1>
      <StatisticCard title="Stories posted" value={data.storiesPosted.toLocaleString()} />
      <StatisticCard title="DMs received" value={data.dmReceived.toLocaleString()} />
      <StatisticCard title="Top Receiver" value={data.topReceiver.toLocaleString()} />
      <StatisticCard title="DMs sent" value={data.dmSent.toLocaleString()} />
      <StatisticCard title="Top sender" value={data.topSender.toLocaleString()} />
      <StatisticCard title="Reels shared via DM" value={data.reelsShared.toLocaleString()} />
      <StatisticCard title="Posts liked" value={data.postsLiked.toLocaleString()} />
      <StatisticCard title="Favorite Account for Posts" value={data.topPostAccount.toLocaleString()} />
      <StatisticCard title="Reels liked" value={data.reelsLiked.toLocaleString()} />
      <StatisticCard title="Favorite Account for Reels" value={data.topReelAccount.toLocaleString()} />
      <StatisticCard title="Comments posted" value={data.commentsWritten.toLocaleString()} />
      <SimpleFooter />
    </ModernContainer>
    ),
    {
      width: 1080,
      height: 1920,
      fonts: [
        {
          name: "Inter",
          data: interBlackData,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );
}
