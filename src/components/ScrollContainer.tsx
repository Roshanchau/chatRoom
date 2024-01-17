import React, { useRef, useState, useEffect, useCallback, ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const outerDiv = useRef<HTMLDivElement>(null);
  const innerDiv = useRef<HTMLDivElement>(null);

  const prevInnerDivHeight = useRef<number | null>(null);

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const outerDivHeight = outerDiv.current?.clientHeight;
    const innerDivHeight = innerDiv.current?.clientHeight;
    const outerDivScrollTop = outerDiv.current?.scrollTop;

    if (
      prevInnerDivHeight.current === null ||
      (outerDivHeight && innerDivHeight && outerDivScrollTop === prevInnerDivHeight.current - outerDivHeight)
    ) {
      outerDiv.current?.scrollTo({
        top: innerDivHeight! - outerDivHeight!,
        left: 0,
        behavior: prevInnerDivHeight.current ? "smooth" : "auto",
      });
    } else {
      setShowScrollButton(true);
    }

    prevInnerDivHeight.current = innerDivHeight ?? null;
  }, [children]);

  const handleScrollButtonClick = useCallback(() => {
    const outerDivHeight = outerDiv.current?.clientHeight;
    const innerDivHeight = innerDiv.current?.clientHeight;

    outerDiv.current?.scrollTo({
      top: innerDivHeight! - outerDivHeight!,
      left: 0,
      behavior: "smooth",
    });

    setShowScrollButton(false);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <div
        ref={outerDiv}
        style={{
          position: "relative",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <div
          ref={innerDiv}
          style={{
            position: "relative",
          }}
        >
          {children}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          backgroundColor: "red",
          color: "white",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: showScrollButton ? 1 : 0,
          pointerEvents: showScrollButton ? "auto" : "none",
        }}
        onClick={handleScrollButtonClick}
      >
        New message!
      </button>
    </div>
  );
};

export default ScrollContainer;
