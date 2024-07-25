import React from "react";
import WrappedContainer, { WrappedSlideProps } from "../WrappedContainer";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import getShareUrl from "@/lib/utils/getShareUrl";
import { Loader2, Share2 } from "lucide-react";
import shareImage from "@/lib/utils/shareImage";
import { trackEvent } from "@/lib/analytics";
import formatTimeLength from "@/lib/utils/formatTimeLength";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Assume Card components are similar to material-UI cards


function Roundup({ statistics }: WrappedSlideProps) {
  const [isLoadingShareImage, setIsLoadingShareImage] = React.useState(false);

  const { amount: totalWatchTimeAmount, unit: totalWatchTimeUnit } =
    formatTimeLength(statistics.useTime.totalUsageTimeSec);
  const totalWatchTimeMins = Math.round(
    statistics.useTime.totalUsageTimeSec / 60
  );

  const { amount: averageSessionLengthAmount, unit: averageSessionLengthUnit } =
    formatTimeLength(statistics.useTime.averageSessionLengthSec);

    const formatKey = (key: string) => {
      const spacedKey = key.replace(/([A-Z])/g, ' $1').replace(/(\d+)$/g, ' $1').trim();
      return spacedKey.charAt(0).toUpperCase() + spacedKey.slice(1);  // Capitalize the first letter
    };

    const statsEntries = Object.entries(statistics).slice(1);


  return (
    <WrappedContainer bg="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="md:p-12 flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold animate-in slide-in-from-bottom fade-in duration-1000 mb-8">
          This is your Instagram Wrapped
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {statsEntries.map(([category, details]) => (
            <Card key={category} className="bg-zinc-900 text-zinc-200">
              <CardHeader className="font-bold text-lg">
                {category.toUpperCase() === "DIRECTMESSAGES" ? "DIRECT MESSAGES" : (category.toUpperCase() === "EXTERNALTRACKING" ? "EXTERNAL TRACKING" : category.toUpperCase())}
              </CardHeader>
              <CardContent>
                {Object.entries(details).map(([key, value]) => {
                  if (key === "mostUsedEmoji" || key === "leastUsedEmoji") { // Replace "specialKey" with your specific condition
                    return (
                      <div key={key} className="py-2 border-b border-zinc-800">
                        <strong>{formatKey(key)}:</strong> {value.emoji}
                      </div>
                    );
                  }
                  else if (key === "topSearchValue") { // Replace "specialKey" with your specific condition
                    return (
                      <div key={key} className="py-2 border-b border-zinc-800">
                        <strong>{formatKey(key)}:</strong> {value.value}
                      </div>
                    );
                  }
                  else if (key === "longestSession") { // Replace "specialKey" with your specific condition
                    return (
                      <div key={key} className="py-2 border-b border-zinc-800">
                        <strong>{formatKey(key)}:</strong> {value.lengthSec}
                      </div>
                    );
                  }
                  else if (key === "mostActiveWeekday") { // Replace "specialKey" with your specific condition
                    return (
                      <div key={key} className="py-2 border-b border-zinc-800">
                        <strong>{formatKey(key)}:</strong> {value.weekday}
                      </div>
                    );
                  }
                  else if (key === "mostActiveHour") { // Replace "specialKey" with your specific condition
                    return (
                      <div key={key} className="py-2 border-b border-zinc-800">
                        <strong>{formatKey(key)}:</strong> {value.toLocaleString()}:00
                      </div>
                    );
                  }
                  return (
                  <div key={key} className="py-2 border-b border-zinc-800">
                    <strong>{formatKey(key)}:</strong> {value.toLocaleString()}
                  </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          onClick={async () => {
            setIsLoadingShareImage(true);
            const url = getShareUrl(statistics);
            await shareImage(url);
            trackEvent("share_image");
            setTimeout(() => {
              setIsLoadingShareImage(false);
            }, 1000);
          }}
          className="mt-12 w-full max-w-xs"
          disabled={isLoadingShareImage}
        >
          {isLoadingShareImage ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <>
              Share your wrapped
            </>
          )}
        </Button>
      </div>
    </WrappedContainer>
  );
}

export default Roundup;
