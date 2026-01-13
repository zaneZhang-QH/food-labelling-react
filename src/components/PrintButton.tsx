import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

interface PrintButtonProps {
  contentSelector?: string;
}

export const PrintButton = ({ contentSelector }: PrintButtonProps = {}) => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = useCallback(() => {
    if (isPrinting) {
      return;
    }

    const target =
      (contentSelector && document.querySelector(contentSelector)) ||
      document.querySelector("#help-guide .help-guide-content");
    if (!target) {
      window.print();
      return;
    }
 
    setIsPrinting(true);
    document.body.classList.add("print-help-guide");

    const cloned = target.cloneNode(true) as HTMLElement;
    cloned
      .querySelectorAll<HTMLElement>(
        ".btn-print, .help-guide-close, .top-block"
      )
      .forEach((node) => node.remove());

    cloned
      .querySelectorAll<HTMLElement>(".accordion-collapse")
      .forEach((panel) => panel.classList.add("show"));
    cloned
      .querySelectorAll<HTMLElement>(".accordion-button")
      .forEach((button) => {
        button.classList.remove("collapsed");
        button.setAttribute("aria-expanded", "true");
      });

    const printContainer = document.createElement("div");
    printContainer.id = "print-help-guide";
    printContainer.appendChild(cloned);
    document.body.appendChild(printContainer);

    const cleanup = () => {
      const existing = document.getElementById("print-help-guide");
      if (existing) {
        existing.remove();
      }
      document.body.classList.remove("print-help-guide");
      setIsPrinting(false);
      window.removeEventListener("afterprint", cleanup);
    };

    window.addEventListener("afterprint", cleanup);
    requestAnimationFrame(() => {
      window.print();
    });
  }, [contentSelector, isPrinting]);

  return (
    <a
      role="button"
      onClick={(event) => {
        event.preventDefault();

        handlePrint();
      }}
      className="controls btn-print"
      aria-label="Print this help guide"
    >
      {isPrinting ? (
        <>
          <FontAwesomeIcon icon={faPrint} spin />
          <span>Preparing...</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faPrint} />
          <span>Print</span>
        </>
      )}
    </a>
  );
};
