"use client";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WrappedPlayer from "@/lib/Player/WrappedPlayer";
import React, { useEffect, useState } from "react";
import WrappedContainer, { WrappedSlideProps } from "./WrappedContainer";
import { Loader2 } from "lucide-react";

const LoadingPlayerComponent = (props: WrappedSlideProps) => {
  return (
    <WrappedContainer>
      <Loader2 size={32} className="animate-spin" />
    </WrappedContainer>
  );
};

function WrappedPlayerComponent({

  ...props
}: {

} & WrappedSlideProps) {
  const [player] = useState(() => new WrappedPlayer());
  const [, forceUpdateState] = useState(0);
  const forceUpdate = () => forceUpdateState((s) => s + 1);
  useEffect(() => {
    player.on("update", forceUpdate);
    player.play(props.statistics);

    return () => {
      player.off("update", forceUpdate);
    };
  }, []);


  const Component = player.currentSlide?.component || LoadingPlayerComponent;

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={player.currentSlide?.name || "none"}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <div className="slide-container">
            <Component {...props} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default WrappedPlayerComponent;
