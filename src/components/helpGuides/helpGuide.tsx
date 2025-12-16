import React, { useState } from "react";
import "./helpGuide.css";

type HelpGuideProps = {
  heading?: string;
  content: React.ReactNode;
  calloutLabel?: string;
  initialOpen?: boolean;
};

export const HelpGuide: React.FC<HelpGuideProps> = ({
  heading = "Help guide",
  content,
  calloutLabel = "Help guide",
  initialOpen = false,
}) => {
  const [open, setOpen] = useState(initialOpen);

  return (
    <div id="help-guide">
      {!open && (
        <button
          type="button"
          className="help-guide-callout"
          onClick={() => setOpen(true)}
        >
          <i className="fa fa-book" />
          <span>{calloutLabel}</span>
        </button>
      )}

      {open && (
        <>
          <div className="overlay visible" onClick={() => setOpen(false)} />
          <div className="help-guide-content open-menu">
            <div className="top-block">
              <div className="side-padding">
                <i className="fa fa-book" />
                <h2>{heading}</h2>
              </div>
              <button
                type="button"
                className="btn btn-link help-guide-close"
                onClick={() => setOpen(false)}
              >
                Hide <i className="fa fa-arrow-right" />
              </button>
            </div>
            {content}
          </div>
        </>
      )}
    </div>
  );
};

