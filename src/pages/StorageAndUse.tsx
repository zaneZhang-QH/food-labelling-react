import { useState } from "react";
import type { MouseEvent } from "react";
import { createNavHandlers } from "./help";
import { HelpGuide } from "../components/helpGuides/HelpGuide";
import {
  CheckboxWithInput,
  type InputConfig,
} from "../components/CheckboxGroup";
import { Input } from "../components/Input";
import { InfoAlert } from "../components/GlobalWarnings";
import { Textarea } from "../components/Textarea";

type StorageAndUseProps = {
  onBack?: () => void;
  onNext?: () => void;
};

interface CheckboxConfig {
  key: string;
  label: string;
  inputConfig?: InputConfig;
  renderChildren?: (
    data: FormData,
    handleChange: (field: keyof FormData, value: string) => void
  ) => React.ReactNode;
}

export const StorageAndUse = ({ onBack, onNext }: StorageAndUseProps) => {
  const [degreeFrom, setDegreeFrom] = useState<string>("");
  const [degreeTo, setDegreeTo] = useState<string>("");
  const [guideOpen, setGuideOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [storageChoices, setStorageChoices] = useState<string[]>([]);
  const [frozenChoices, setFrozenChoices] = useState<string[]>([]);
  const [refrigeratedDegree, setRefrigeratedDegree] = useState<string[]>([]);
  const [otherFrozenNote, setOtherFrozenNote] = useState<string>("");
  const [consumeWithin, setConsumeWithin] = useState<string>("");
  const [microwaveOnLevel, setMicrowaveOnLevel] = useState<string>("");
  const [microwaveOnTime, setMicrowaveOnTime] = useState<string>("");
  const [thawedWithin, setThawedzWithin] = useState<string>("");
  const [microwaveOn, setMicrowaveOn] = useState<string>("");

  const [formData, setFormData] = useState({
    washBeforeUse: false,
    storeAirtight: false,
    shakeWell: true,
    drainFood: false,
    keepRefrigerated: false,
    consumeWithin: false,
    consumeDays: "",
    thawBeforeCooking: false,
    cookFromFrozen: false,
    doNotRefreeze: false,
    useWithin: false,
    useHours: "48",
    notMicrowave: false,
    rawProduct: false,
    cookUntilSteaming: false,
    microwaveOn: false,
    microwavePower: "highsd",
    microwaveMinutes: "6 minutessds",
    refrigeratedDegree: "",
    cookFor: false,
    useMinutes: "48",
    cookForAt: "",
  });

  const frozenLabelMap: Record<string, string> = {
    "frozen-solid": "Keep frozen solid.",
    "frozen-solid-ready": "Keep frozen solid until ready to use.",
  };
  const frozenSummary = [
    ...frozenChoices
      .filter((val) => val in frozenLabelMap)
      .map((val) => frozenLabelMap[val]),
    ...(frozenChoices.includes("other") && otherFrozenNote
      ? [otherFrozenNote]
      : []),
  ].join(", ");

  const { handleBackClick, handleNextClick } = createNavHandlers(
    onNext,
    onBack
  );

  const handleGuideLink = (
    sectionId: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveSectionId(sectionId);
    setGuideOpen(true);
  };

  const toggleInvalidState = (el: HTMLInputElement | HTMLTextAreaElement) => {
    if (el.value.trim()) {
      el.classList.remove("is-invalid");
    } else {
      el.classList.add("is-invalid");
    }
  };

  const StorageConditionsCheckboxConfigs: CheckboxConfig[] = [
    {
      key: "coolDryConditions",
      label: "Store in cool dry conditions.",
    },
    {
      label: "Refrigerate after opening.",
      key: "refrigerateAfterOpening",
    },
    {
      label: "Refrigerate after purchase.",
      key: "refrigerateAfterPurchase",
    },
    {
      label: "Keep refrigerated at",
      key: "keepRefrigeratedAt",
      inputConfig: {
        inputKey: "refrigeratedDegree",
        type: "number",
        //   placeholder: "5",
        suffix: "°C",
        //   width: "80px",
      },
      renderChildren: (data, handleChange) => (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-700">to</span>
          <input
            type="number"
            value={data.refrigeratedDegree}
            onChange={(e) => handleChange("refrigeratedDegree", e.target.value)}
            //   placeholder="5"
            className="form-control"
            //   className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            //   style={{ width: "80px" }}
          />
          <span className="text-sm text-gray-700">°C</span>
        </div>
      ),
    },
    {
      label: "Keep refrigerated at or below",
      key: "keepRefrigeratedAtBelow",
      inputConfig: {
        inputKey: "refrigeratedDegree",
        type: "number",
        placeholder: "5",
        suffix: "°C",
      },
    },
    {
      label: "Keep frozen solid.",
      key: "keepFrozenSolid",
    },
    {
      label: "Keep frozen solid until ready to use.",
      key: "keepFrozenSolidReady",
    },
    { label: "Other, please enter.", key: "otherFrozen" },
  ];

  const DirectionForUseConfigs: CheckboxConfig[] = [
    {
      label: "Wash before use.",
      key: "washBeforeUse",
    },
    {
      label: "Once opened, store in an airtight container.",
      key: "storeAirtight",
    },
    {
      label: "Shake well before use.",
      key: "shakeWell",
    },
    {
      key: "drainFood",
      label: "Food should be drained before consumption.",
    },
    {
      key: "keepRefrigerated",
      label: "Once opened, keep refrigerated.",
    },
    {
      key: "consumeWithin",
      label: "Consume within",
      inputConfig: {
        inputKey: "consumeDays",
        suffix: "days of opening.",
        width: "100px",
      },
    },
    {
      key: "microwaveOn",
      label: "Microwave on",
      inputConfig: {
        inputKey: "microwavePower",
        placeholder: "high",
        width: "100px",
      },
      renderChildren: (data, handleChange) => (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-700">for</span>
          <input
            type="text"
            value={data.microwaveMinutes}
            onChange={(e) => handleChange("microwaveMinutes", e.target.value)}
            placeholder="6 minutes"
            className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ width: "140px" }}
          />
        </div>
      ),
    },
    {
      label: "Caution, contents may be hot after heating.",
      key: "cautionContentsHot",
    },
    {
      label: "Cook for",
      key: "cookFor",
      inputConfig: {
        inputKey: "useMinutes",
        placeholder: "48",
        suffix: "minutes",
        width: "100px",
      },
      renderChildren: (data, handleChange) => (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-700">at</span>

          <input
            type="number"
            value={data.cookForAt}
            onChange={(e) => handleChange("cookForAt", e.target.value)}
          />
          <span className="text-sm text-gray-700">°C.</span>
        </div>
      ),
    },
    {
      label: "Allow to stand for",
      key: "allowToStand",
      inputConfig: {
        inputKey: "standMinutes",
        placeholder: "5",
        suffix: "minutes before serving.",
        width: "100px",
      },
    },
    {
      label: "Do not refrigerate or reheat once heated.",
      key: "doNotRefrigerateOrReheat",
    },
    {
      label:
        "Care has been taken to remove all bones from this product, however some bones may remain.",
      key: "careTakenRemoveBones",
    },
    {
      label: "Other directions for use, please enter.",
      key: "otherDirectionsForUse",
      inputConfig: {
        inputKey: "otherDirectionsForUseDetails",
        textAreaInput: true,
      },
    },
    {
      label: "Cooking / preparation instructions, please enter.",
      key: "cookingPreparationInstructions",
      inputConfig: {
        inputKey: "cookingPreparationInstructionsDetails",
        textAreaInput: true,
      },
    },
  ];

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div>
        <div className="title-image">
          <h1>Date marks</h1>
          <figure style={{ display: "flex" }} className="">
            <figcaption>
              Storage conditions describe how to keep food until its best-before
              or use-by date. <br /> Directions for use are instructions for how
              to prepare the food so that it is ready to eat.
            </figcaption>
            <img
              src="https://www.qld.gov.au/?a=145924"
              alt="Example food label with storage conditions and directions for use."
            />
          </figure>
        </div>

        <div
          style={{ marginBottom: "20px" }}
          className="storage-condition-block"
        >
          <h3>Storage conditions</h3>
          <section>
            <article>
              <b>
                Select the
                <a
                  href="#use-by-date"
                  onClick={(e) => handleGuideLink("use-by-date", e)}
                >
                  {" "}
                  storage conditions{" "}
                </a>
                for your food.
              </b>
            </article>
            <article>
              <small>
                If your food has specific storage conditions to make sure it
                will keep until the best-before or use-by date, then you must
                include these on the label. Examples of some storage conditions
                have been included. You may select none, or one or more of
                these, depending on your requirements.
              </small>
            </article>
          </section>
          <div>
            {StorageConditionsCheckboxConfigs.map((config) => (
              <CheckboxWithInput
                key={config.key}
                label={config.label}
                checked={formData[config.key]}
                onChange={(val) => handleCheckboxChange(config.key, val)}
                inputConfig={config.inputConfig}
                inputValue={
                  config.inputConfig
                    ? formData[config.inputConfig.inputKey]
                    : ""
                }
                onInputChange={
                  config.inputConfig
                    ? (val) =>
                        handleInputChange(config.inputConfig.inputKey, val)
                    : null
                }
              >
                {config.renderChildren &&
                  config.renderChildren(formData, handleInputChange)}
              </CheckboxWithInput>
            ))}
          </div>
          <InfoAlert
            alertHeading="The storage conditions should be shown on the food label as:"
            alertMessage={
              <>
                Storage conditions: <span>{frozenSummary}</span>
              </>
            }
          />
        </div>

        <div className="direction-for-use-block">
          <div>
            <h3>Directions for use</h3>
            <section>
              <article>
                <b>
                  Select the
                  <a
                    href="#use-by-date"
                    onClick={(e) => handleGuideLink("use-by-date", e)}
                  >
                    {" "}
                    directions for use{" "}
                  </a>
                  for your food.
                </b>
              </article>
              <article>
                <small>
                  All food must include directions for the use if those
                  directions are required for health or safety reasons. The
                  directions for use are the instructions for how to prepare the
                  food so it is ready to eat. Examples of some directions for
                  use have been included. You may select none, or one or more of
                  these, depending on your requirements.
                </small>
              </article>
            </section>
          </div>

          {DirectionForUseConfigs.map((config) => (
            <CheckboxWithInput
              key={config.key}
              label={config.label}
              checked={formData[config.key]}
              onChange={(val) => handleCheckboxChange(config.key, val)}
              inputConfig={config.inputConfig}
              inputValue={
                config.inputConfig ? formData[config.inputConfig.inputKey] : ""
              }
              onInputChange={
                config.inputConfig
                  ? (val) => handleInputChange(config.inputConfig.inputKey, val)
                  : null
              }
            >
              {config.renderChildren &&
                config.renderChildren(formData, handleInputChange)}
            </CheckboxWithInput>
          ))}

          <InfoAlert
            alertHeading="The directions for use should be shown on the food label as:"
            alertMessage={
              <>
                Directions for use: Allow to stand for
                <span>{frozenSummary}</span>
              </>
            }
          />
        </div>
      </div>

      <div
        className="page-navigation-block"
        style={{ display: "flex", gap: "20px", marginTop: "20px" }}
      >
        <a className="btn btn-primary" role="button" onClick={handleBackClick}>
          <span className="btn-label-default">Back</span>
        </a>

        <a className="btn btn-primary" role="button" onClick={handleNextClick}>
          <span className="btn-label-default">Next</span>
        </a>

        <a
          className="btn btn-tertiary"
          target="_blank"
          data-progress-label="Loading"
        >
          <span className="btn-label-default">Cancel</span>
        </a>
      </div>

      <HelpGuide
        initialOpen={guideOpen}
        onOpenChange={setGuideOpen}
        content={null}
      />
    </>
  );
};
