import React, { useCallback } from "react";
import { HelpGuide } from "../components/helpGuides/helpGuide";
import { MainPage } from "./helpGuide/mainPage";

export const Limitations = () => {
  const handlePrint = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.print();
  }, []);

  const handleExpandCollapse = useCallback((checked: boolean) => {
    const guide = document.getElementById("help-guide");
    if (!guide) return;
    const checkboxes = guide.querySelectorAll<HTMLInputElement>(".qg-accordion input[type='checkbox']");
    checkboxes.forEach((box) => {
      box.checked = checked;
    });
  }, []);

  const guideContent = (
    <MainPage
      onPrint={handlePrint}
      onExpandAll={() => handleExpandCollapse(true)}
      onCollapseAll={() => handleExpandCollapse(false)}
    />
  );

  return (
    <>
      <div>
        <h1>Limitations of Label Buster</h1>

        <p>
          Foods with complex labelling requirements are excluded from Label Buster. The following questions will help
          you to work out if you can use Label Buster for your food.
        </p>

        <div>
          Is your food:
          <abbr className="required" title="(required)">
            *
          </abbr>
          <ul>
            <li>
              <span>
                an{" "}
                <a className="link" target="_self" href="#alcoholic-drinks">
                  alcoholic drink
                </a>
              </span>
            </li>
            <li>
              a{" "}
              <a className="link" href="#caffeinated-drinks" target="_self">
                formulated caffeinated drink,
              </a>
            </li>
            <li>
              an{" "}
              <a className="link" href="#drinks-electrolyte" target="_self">
                electrolyte drink
              </a>
            </li>
            <li>
              <a className="link" href="#drinks-made" target="_self">
                drink made from cereals, nuts, and/or seeds
              </a>
            </li>
            <li>
              a drink base (solid or liquid) that is used to make any of the drinks above?
            </li>
          </ul>
        </div>

        <p className="formio-component-htmlelement">
          <small className="hint">
            For example: Beer, wine, spirits, energy drink or breakfast drink. Select no if your food contains alcohol
            as an ingredient but is not a drink (e.g.: brandy custard, rum balls).
          </small>
        </p>
      </div>

      <HelpGuide heading="Help guide" content={guideContent} initialOpen={false} />
    </>
  );
};
