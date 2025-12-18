import type React from "react";

type NavHandlers = {
  handleNextClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  handleBackClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const createNavHandlers = (onNext?: () => void, onBack?: () => void): NavHandlers => {
  return {
    handleNextClick: (event) => {
      event.preventDefault();
      onNext?.();
    },
    handleBackClick: (event) => {
      event.preventDefault();
      onBack?.();
    },
  };
}
