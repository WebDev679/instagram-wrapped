"use client";
import Wrapped from "@/lib/Wrapped";
import React from "react";
import dynamic from "next/dynamic";
import FileUpload from "@/components/Preparation/FileUpload";
import WrappedCreator from "@/lib/WrappedCreator";
import WrappedContainer from "@/components/Wrapped/WrappedContainer";
import FatHeading from "@/components/Wrapped/MainHeading";
import InfoText from "@/components/Wrapped/InfoText";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, PlayCircle } from "lucide-react";
import IntroInformation from "@/components/Wrapped/IntroInformation";
import MutedText from "@/components/Wrapped/MutedText";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { trackEvent } from "@/lib/analytics";
import HideForTime from "@/components/Wrapped/HideForTime";
import * as Sentry from "@sentry/nextjs";
dayjs.extend(localizedFormat);

const WrappedPlayerComponent = dynamic(
  () => import("@/components/Wrapped/WrappedPlayerComponent"),
  {
    ssr: false,
  }
);

function InstagramWrappedAppPage() {
  const [page, setPageRaw] = React.useState("intro");
  const setPage = (page: string) => {
    setPageRaw(page);
    window.scrollTo(0, 0);
    trackEvent("page_" + page);
  };
  const [wrapped, setWrapped] = React.useState<Wrapped | null>(null);

  return (
    <div>

      {page === "intro" && (
        <IntroInformation
          onContinue={() => setPage("upload")}
          onDemo={async () => {
            trackEvent("demo");
            setPage("loading");

            const creator = new WrappedCreator();
            const wrapped = creator.forDemoMode();
            setWrapped(wrapped);

            trackEvent("demo_ready");
            setPage("demo");
          }}
        />
      )}

      {page === "upload" && (
        <FileUpload
          onFileSelect={async (file) => {
            setPage("loading");
            trackEvent("file_selected");

            if (file.name.endsWith(".txt")) {
              setPage("text");
              trackEvent("text_error");
              return;
            }

            if (!file.name.endsWith(".json") && !file.name.endsWith(".zip")) {
              setPage("unknown_file");
              trackEvent("unknown_file_error");
              trackEvent("unknown_file_error_" + file.name.split(".").pop());
              return;
            }

            const creator = new WrappedCreator();
            let wrapped: Wrapped;
            try {
              wrapped = await creator.fromFile(file);
              setWrapped(wrapped);

              trackEvent("file_loaded");
            } catch (e) {
              trackEvent("load_error");
              console.error(e);
              setPage(creator.isTextExport ? "text" : "error");
              return;
            }

            try {
              console.log("stats", wrapped?.getStatistics());
            } catch (e) {
              Sentry.captureException(
                new Error("Exception when calculating statistics"),
                {
                  extra: {
                    originalError: e,
                  },
                }
              );
            }

            if (wrapped.possiblyEmptyExport) {
              trackEvent("possibly_empty");
              setPage("possibly_empty");
             } 
             else {
              setPage("ready")
             }
          }}
        />
      )}

      {page === "error" && (
        <WrappedContainer>
          <FatHeading>There was a processing error. Please try again.</FatHeading>
          <Button
            onClick={() => {
              setPage("upload");
              trackEvent("try_again");
            }}
          >
            Try again
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "possibly_empty" && (
        <WrappedContainer>
          <FatHeading>There is some missing data in your export. It might be because of area and privacy restrictions.</FatHeading>
          <Button
            onClick={() => {
              setPage("ready");
              trackEvent("possibly_empty_continue");
            }}
          >
            Continue anyway
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "text" && (
        <WrappedContainer>
          <FatHeading>Wrong file format. Remember to export data as JSON.</FatHeading>
          <Button
            onClick={() => {
              setPage("intro");
              trackEvent("text_error_go_back");
            }}
          >
            Go back
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "unknown_file" && (
        <WrappedContainer>
          <FatHeading>Unknown file format</FatHeading>
          <Button
            onClick={() => {
              setPage("intro");
              trackEvent("text_error_go_back");
            }}
          >
            Go back
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </WrappedContainer>
      )}

      {page === "demo" && (
        <WrappedContainer>
          <FatHeading>We have completed your Wrapped! (Demo Mode)</FatHeading>
          <MutedText className="max-w-xl mx-auto">
            This is simply a demo of this application and does not reflect your data.
            <br />        
          </MutedText>
          <Button
            onClick={() => {
              setPage("play");
              trackEvent("play_demo_click");
            }}
          >
            Play demo
            <PlayCircle className="ml-2" size={16} />
          </Button>
        </WrappedContainer>
      )}

      {page === "loading" && (
        <WrappedContainer>
          <Loader2 size={32} className="animate-spin" />
          <InfoText className="text-base">
            Processing your data...
          </InfoText>
          <HideForTime time={8000}>
            <MutedText className="text-sm">
              This is taking longer than expected...
            </MutedText>
          </HideForTime>
          <HideForTime time={15000}>
            <MutedText className="text-sm text-center">
              This should've been done by now...
              <br />
              If it doesn't start soon try reloading
              <br />
              the page and uploading your Instagram data export again.
            </MutedText>
          </HideForTime>
        </WrappedContainer>
      )}


      {page === "ready" && (
        <WrappedContainer>
          <FatHeading>We have completed your Wrapped!</FatHeading>

          <Button
            onClick={() => {
              setPage("play");
              trackEvent("play");
            }}
          >
            Play
            <PlayCircle className="ml-2" size={16} />
          </Button>
        </WrappedContainer>
      )}

      {page === "play" && (
        <WrappedPlayerComponent
          statistics={wrapped!.getStatistics()}
          isDemo={wrapped!.demoMode}
        />
      )}

      {page === "play" &&
        wrapped?.demoMode &&
        !localStorage.getItem("_hide_demo") && (
          <div></div>
        )}
    </div>
  );
}

export default InstagramWrappedAppPage;
