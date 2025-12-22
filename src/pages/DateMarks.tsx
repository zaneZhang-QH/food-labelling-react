import { useState } from "react";
import { InfoAlert } from "../components/GlobalWarnings";
import { RadioGroup } from "../components/RadioGroup";
import { Input } from "../components/Input";

export const DateMarks = () => {
  const [shelfLife2DaysChoice, setShelfLife2DaysChoice] = useState<
    string | null
  >(null);
  const [shelfLife7DaysChoice, setShelfLife7DaysChoice] = useState<
    string | null
  >(null);
  const [shelfLifeCertainDaysChoice, setShelfLifeCertainDaysChoice] = useState<
    string | null
  >(null);
  const [dateMarkType, setDateMarkType] = useState<string | null>(null);
  const [dateValue, setDateValue] = useState("");
  const [lotIdentification, setLotIdentification] = useState("");

  const toggleInvalidState = (el: HTMLInputElement | HTMLSelectElement) => {
    if (el.value.trim()) {
      el.classList.remove("is-invalid");
    } else {
      el.classList.add("is-invalid");
    }
  };

  const renderDateMarkBlock = () => (
    <div className="food-date-mark-select">
      <p style={{ fontWeight: "bold", display: "flex" }}>
        What type of date mark do you need for your food?{" "}
        <abbr className="required" title="(required)" style={{ color: "red" }}>
          *
        </abbr>
      </p>
      <RadioGroup
        inline={false}
        name="dateMark"
        options={[
          { label: "Use-by date", value: "use-by" },
          { label: "Best-before date", value: "best-before" },
          { label: "Baked-on date", value: "baked-on" },
          { label: "Baked-for date", value: "baked-for" },
          { label: "Do not need a date mark", value: "none-mark" },
        ]}
        value={dateMarkType || ""}
        onChange={(val) => setDateMarkType(val)}
      />

      {dateMarkType && dateMarkType !== "none-mark" && (
        <div className="food-date-input-block">
          <p style={{ fontWeight: "bold", display: "flex" }}>
            What is the date for the food?{" "}
            <abbr
              className="required"
              title="(required)"
              style={{ color: "red" }}
            >
              *
            </abbr>
          </p>

          <p>
            <small>
              The date will usually be in the date format of:
              <ul>
                <li>
                  dd/mm/yyyy (e.g.: 15/3/2020) for food with a shelf life of 3
                  months or less, or
                </li>
                <li>
                  mmm/yyyy (e.g.: Apr 2021) for food with a shelf life of more
                  than 3 months.
                </li>
              </ul>
            </small>
          </p>

          <Input
            type="text"
            id="food-date"
            label="Food date"
            displayLabel={false}
            hint="Leave this question blank if the food is not packaged or does not need a date mark."
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            onInput={(e) => toggleInvalidState(e.currentTarget)}
            onBlur={(e) => toggleInvalidState(e.currentTarget)}
            invalidMessage="Date must be entered when type of date mark is selected"
            required
          />

          <Input
            type="text"
            id="lotIdentification-optional"
            label="Lot identification"
            hint="Lot identification helps identify food. You must include lot identification if you are not using a date mark. If your date mark is your lot identification, leave blank; otherwise enter a lot identification below."
            value={lotIdentification}
            displayLabel={false}
            required={false}
            onChange={(e) => setLotIdentification(e.target.value)}
          />
        </div>
      )}

      {dateMarkType === "none-mark" && (
        <Input
          type="text"
          id="lotIdentification-required"
          label="Lot identification"
          hint="Lot identification helps identify food. You must include lot identification if you are not using a date mark."
          value={lotIdentification}
          displayLabel={false}
          required
          invalidMessage="The lot identification is mandatory"
          onChange={(e) => setLotIdentification(e.target.value)}
          onInput={(e) => toggleInvalidState(e.currentTarget)}
          onBlur={(e) => toggleInvalidState(e.currentTarget)}
        />
      )}
    </div>
  );

  return (
    <>
      <div>
        <h1>Date marks</h1>
        <figure style={{ display: "flex" }} className="">
          <figcaption>
            Foods that should be eaten before a certain date for health and
            safety reasons must be labelled with a use-by date. Other food that
            should be eaten in 2 years must have a best-before date.
          </figcaption>
          <img
            className="image-ratio-2x3  position-x-center position-y-center"
            src="https://www.qld.gov.au/?a=145668"
            alt="Example food label with the business name and the street address of the food business."
          ></img>
        </figure>
      </div>

      <div>
        <div className="shelf-life-2days-block">
          <p style={{ fontWeight: "bold", display: "flex" }}>
            Does your food have a shelf life of more than 2 years?
            <abbr
              className="required"
              title="(required)"
              style={{ color: "red" }}
            >
              *
            </abbr>
          </p>
          <p>
            <small>
              For example:
              <ul>
                <li>Apricot jam in a bottle that has been heat treated</li>
                <li>Canned peaches</li>
              </ul>
            </small>
          </p>

          <RadioGroup
            name="shelfLife2DaysChoice"
            options={[
              { label: "Yes", value: "1" },
              { label: "No", value: "2" },
            ]}
            value={shelfLife2DaysChoice}
            onChange={setShelfLife2DaysChoice}
            inline
          />

          {shelfLife2DaysChoice === "1" && (
            <>
              <InfoAlert
                alertHeading=" No date mark is required"
                alertMessage={
                  <>
                    <p>
                      No date marking information is required for a food with a
                      shelf life of more than 2 years. If date marking is not
                      required, a food business must add a lot identification so
                      that the food can be identified.
                    </p>
                  </>
                }
              />
              {renderDateMarkBlock()}
            </>
          )}
        </div>

        {shelfLife2DaysChoice === "2" && (
          <div className="shelf-life-7days-block">
            <p style={{ fontWeight: "bold", display: "flex" }}>
              Is your food bread, with a shelf life of less than 7 days?
              <abbr
                className="required"
                title="(required)"
                style={{ color: "red" }}
              >
                *
              </abbr>
            </p>

            <RadioGroup
              name="shelfLife7DaysChoice"
              options={[
                { label: "Yes", value: "1" },
                { label: "No", value: "2" },
              ]}
              value={shelfLife7DaysChoice}
              onChange={setShelfLife7DaysChoice}
              inline
            />

            {shelfLife7DaysChoice === "1" && (
              <>
                <InfoAlert
                  alertHeading="Best-before, baked-on or baked-for date"
                  alertMessage={
                    <>
                      <p>
                        Bread with a shelf life of less than 7 days can be
                        labelled using either a:
                        <ul>
                          <li>Best-before date</li>
                          <li>Baked-for date</li>
                          <li>Baked-on date</li>
                        </ul>
                      </p>
                    </>
                  }
                />
                {renderDateMarkBlock()}
              </>
            )}
          </div>
        )}

        {shelfLife7DaysChoice === "2" && (
          <>
            <div>
              <p style={{ fontWeight: "bold", display: "flex" }}>
                Does your food need to be eaten before a certain date because of
                health and safety?
                <abbr
                  className="required"
                  title="(required)"
                  style={{ color: "red" }}
                >
                  *
                </abbr>
              </p>
              <p>
                <small>
                  For example:
                  <ul>
                    <li>
                      Food that may contain bacteria that will grow at fridge
                      temperatures (e.g.: Listeria)
                    </li>
                    <li>
                      Perishable ready-to-eat food that will spoil (become
                      mouldy, rancid or soured) before it becomes unsafe (e.g.:
                      deli salads, prepared salads).
                    </li>
                  </ul>
                </small>
              </p>
            </div>

            <RadioGroup
              name="shelfLifeCertainDaysChoice"
              options={[
                { label: "Yes", value: "1" },
                { label: "No", value: "2" },
              ]}
              value={shelfLifeCertainDaysChoice}
              onChange={setShelfLifeCertainDaysChoice}
              inline
            />

            {shelfLifeCertainDaysChoice === "1" && (
              <>
                <InfoAlert
                  alertHeading=" Use-by date"
                  alertMessage={
                    <p>
                      These foods must be labelled with a use-by date because
                      they may become unsafe to eat after the use-by date has
                      passed. A food may look, smell and taste ok but be unsafe
                      to eat.
                    </p>
                  }
                />
                {renderDateMarkBlock()}
              </>
            )}

            {shelfLifeCertainDaysChoice === "2" && (
              <>
                <InfoAlert
                  alertHeading="Best-before date"
                  alertMessage={
                    <p>
                      A best-before date is required for all foods with a shelf
                      life of 2 years or less that do not need a use-by date.
                      The best-before date is the date up to which the food
                      remains with good appearance, smell and taste, and keeps
                      any qualities for which a claim has been made.
                    </p>
                  }
                />
                {renderDateMarkBlock()}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
