import React, { useEffect } from "react";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collapse from "bootstrap/js/dist/collapse";
import type { Section } from "./DateMarkPage";



const generalRequirements: Section[] = [
  {
    id: "business-details",
    heading: "Business details",
    content: (
      <>
        <p>
          Business details are the name and address of the food business that is the supplier, manufacturer, packer, vendor
          or importer of the food.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a href="http://www.comlaw.gov.au/Series/F2015L00386" target="_blank" rel="noopener">
              Standard 1.2.1
            </a>{" "}
            Requirements to have labels or otherwise provide information
          </li>
          <li>
            <a href="http://www.comlaw.gov.au/Series/F2015L00389" target="_blank" rel="noopener">
              Standard 1.2.2
            </a>{" "}
            Information requirements - food identification
          </li>
        </ul>
        <i>Food Standards Australia and New Zealand</i>
        <ul>
          <li>
            <a
              href="https://www.foodstandards.gov.au/code/userguide/pages/overviewoffoodlabell1267.aspx"
              target="_blank"
              rel="noopener"
            >
              User Guides - Overview of Food Labelling
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

const extraRequirements: Section[] = [
  {
    id: "vending-food",
    heading: "Food sold from a vending machine",
    content: (
      <>
        <p>
          <b>If your food is sold from a vending machine:</b>
          <br />
          The name and business address of the supplier of the vending machine must be clearly displayed on the vending
          machine.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank" rel="noopener">
              Standard 1.2.1
            </a>{" "}
            Requirements to have labels or otherwise provide information
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hamper-food",
    heading: "Food sold in a hamper",
    content: (
      <>
        <p>
          If your food is sold in a hamper (e.g. gourmet cheese, olives and nuts in a gift box with cheese knife):
          <br />
          The name and address of the supplier of the hamper must be provided with the hamper.
        </p>
        <p>
          Note: Labelling information must be provided for each item of food in the hamper. This can include information on a
          label for packaged food, or information provided in a product sheet for unpackaged food.
        </p>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank" rel="noopener">
              Standard 1.2.1
            </a>{" "}
            Requirements to have labels or otherwise provide information
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "kava-root",
    heading: "Kava and kava root",
    content: (
      <>
        <p>
          <b>If the food for sale is not in a package and consists of kava root:</b>
          <br />
          The name and address for the supplier of the kava root must:
        </p>
        <ul>
          <li>Be displayed with the food; or</li>
          <li>Accompany the food for sale</li>
        </ul>
        <h4>Further reading</h4>
        <i>Australia New Zealand Food Standards Code</i>
        <ul>
          <li>
            <a href="https://www.legislation.gov.au/Series/F2015L00386" target="_blank" rel="noopener">
              Standard 1.2.1
            </a>{" "}
            Requirements to have labels or otherwise provide information
          </li>
        </ul>
      </>
    ),
  },
];

const renderAccordion = (sections: Section[], groupId: string) => (
  <div className="accordion-group">
    <div className="accordion-toggle">
      <button
        className="accordion-toggle-btn accordion-toggle-btn--closed"
        type="button"
        onClick={(e) => {
          const group = document.getElementById(groupId);
          if (!group) return;
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
          const btn = e.currentTarget;
          btn.classList.toggle("accordion-toggle-btn--open", anyClosed);
          btn.classList.toggle("accordion-toggle-btn--closed", !anyClosed);
          btn.textContent = anyClosed ? "Close all" : "Open all";
        }}
      >
        Open all
      </button>
    </div>
    <div className="accordion" id={groupId}>
      {sections.map((section, index) => {
        const headingId = `${section.id}-heading`;
        const collapseId = section.id;
        const isFirst = index === 0;
        return (
          <div className="accordion-item" key={section.id}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isFirst}
                aria-controls={collapseId}
              >
                {section.heading}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
              aria-labelledby={headingId}
              data-bs-parent={`#${groupId}`}
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

type BusinessDetailsPageProps = {
  activeSectionId?: string | null;
};

export const BusinessDetailsPage = ({ activeSectionId = null }: BusinessDetailsPageProps) => {
  useEffect(() => {
    if (!activeSectionId) return;
    const target = document.getElementById(activeSectionId);
    if (!target) return;
    const instance = Collapse.getOrCreateInstance(target, { toggle: false });
    instance.show();
    target.scrollIntoView({ behavior: "smooth" });
  }, [activeSectionId]);

  return (
    <div className="side-padding vertical-padding">
      <a className="controls btn-print" role="button">
        <FontAwesomeIcon icon={faPrint} />
        Print
      </a>

      <h2>General requirements</h2>
      {renderAccordion(generalRequirements, "business-general")}

      <h2 style={{ marginTop: "32px" }}>Food with extra requirements</h2>
      {renderAccordion(extraRequirements, "business-extra")}
    </div>
  );
};
