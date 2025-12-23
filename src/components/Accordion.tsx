import React, { useEffect, useId } from "react";
import Collapse from "bootstrap/js/dist/collapse";

export type AccordionSection = {
  id: string;
  heading: React.ReactNode;
  content: React.ReactNode;
  /** Defaults to false for all except the first section. */
  defaultOpen?: boolean;
};

type AccordionProps = {
  sections: AccordionSection[];
  /** Supply a stable id if you need to control this accordion from elsewhere. */
  groupId?: string;
  /** When provided, the matching section will be opened whenever it changes. */
  activeSectionId?: string | null;
  /** Show the “Open all/Close all” control. */
  showToggleAll?: boolean;
};

/**
 * QGDS accordion rendered in React while preserving the QGDS/Bootstrap classes and behaviours.
 */
export const Accordion: React.FC<AccordionProps> = ({
  sections,
  groupId,
  activeSectionId,
  showToggleAll = true,
}) => {
  const fallbackId = useId();
  const resolvedGroupId = groupId ?? `accordion-${fallbackId}`;

  useEffect(() => {
    const group = document.getElementById(resolvedGroupId);
    if (!group) return;

    const cleanups: Array<() => void> = [];

    // "Open all / Close all" behaviour.
    const toggleAllButton = group.parentElement?.querySelector<HTMLButtonElement>(
      ".accordion-toggle-btn"
    );
    if (toggleAllButton) {
      const toggleAllHandler = (event: Event) => {
        event.preventDefault();
        const collapses = Array.from(group.querySelectorAll<HTMLElement>(".accordion-collapse"));
        const anyClosed = collapses.some((el) => !el.classList.contains("show"));

        collapses.forEach((el) => {
          const instance = Collapse.getOrCreateInstance(el, { toggle: false });
          if (anyClosed) {
            instance.show();
          } else {
            instance.hide();
          }
        });

        toggleAllButton.classList.toggle("accordion-toggle-btn--open", anyClosed);
        toggleAllButton.classList.toggle("accordion-toggle-btn--closed", !anyClosed);
        toggleAllButton.textContent = anyClosed ? "Close all" : "Open all";
      };
      toggleAllButton.addEventListener("click", toggleAllHandler);
      cleanups.push(() => toggleAllButton.removeEventListener("click", toggleAllHandler));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [resolvedGroupId]);

  // Open a specific section when requested.
  useEffect(() => {
    if (!activeSectionId) return;
    const target = document.getElementById(`collapse-${activeSectionId}`);
    if (!target) return;
    const instance = Collapse.getOrCreateInstance(target, { toggle: false });
    instance.show();
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeSectionId]);

  return (
    <div className="accordion-group">
      {showToggleAll && (
        <div className="accordion-toggle">
          <button
            className="accordion-toggle-btn accordion-toggle-btn--closed"
            type="button"
          >
            Open all
          </button>
        </div>
      )}

      <div className="accordion" id={resolvedGroupId}>
        {sections.map((section, index) => {
          const headingId = `heading-${section.id}`;
          const collapseId = `collapse-${section.id}`;
          const isOpen = section.defaultOpen ?? index === 0;

          return (
            <div className="accordion-item" key={section.id}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={isOpen}
                  aria-controls={collapseId}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(collapseId);
                    if (!target) return;
                    Collapse.getOrCreateInstance(target, { toggle: false }).toggle();
                  }}
                >
                  {section.heading}
                </button>
              </h2>

              <div
                id={collapseId}
                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                aria-labelledby={headingId}
                role="region"
              >
                <div className="accordion-body">{section.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
