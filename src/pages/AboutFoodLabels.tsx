type AboutFoodLabelsProps = {
  onBack?: () => void;
  onNext?: () => void;
};

export const AboutFoodLabels = ({ onBack, onNext }: AboutFoodLabelsProps) => {

    const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNext?.();
    };

    const handleBackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onBack?.();
    }

  return (
    <>
      <div>
        <h1>About food labels</h1>

        <p>Select on the food label sections below to learn about labels.</p>

        <figure className="no-max-width">
          <img
            className="image-ratio-3x2  position-x-center position-y-center"
            src="https://www.qld.gov.au/?a=148648"
            alt="An example label for strawberry yoghurt"
          />
        </figure>

        <div className="accordion-group">
          <div className="accordion-toggle">
            <button
              className="accordion-toggle-btn accordion-toggle-btn--closed"
              type="button"
            >
              Open all
            </button>
          </div>
          <div className="accordion" id="accordion-group-1">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-One">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-One"
                  aria-expanded="true"
                  aria-controls="collapse-One"
                >
                  1 Food name and description
                </button>
              </h2>

              <div
                id="collapse-One"
                className="accordion-collapse collapse show"
                aria-labelledby="heading-One"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    Food labels must show the name of the food to help identify
                    the food.
                  </p>

                  <p>
                    The name and description of the food must reflect its true
                    nature. For example, strawberry yoghurt must contain
                    strawberries. If the yoghurt contained strawberry flavouring
                    rather than real fruit, then the name would need to indicate
                    that it is strawberry-flavoured yoghurt.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145669"
                      alt="Example food label with a food name and description."
                    />
                  </figure>

                  <p>
                    If the name of the food does not reflect its true nature,
                    then you must include a description of the true nature on
                    the label. For example, Luke’s Hot’s Sauce (
                    <i>red chilli pepper sauce</i>).
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Two">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Two"
                  aria-expanded="false"
                  aria-controls="collapse-Two"
                >
                  2 Business details
                </button>
              </h2>

              <div
                id="collapse-Two"
                className="accordion-collapse collapse show"
                aria-labelledby="heading-Two"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    To help customers identify where food has come from or to
                    use for a food recall when food is unsafe, a food label must
                    include the following business details:
                  </p>
                  <ul>
                    <li>name of the business supplying the food</li>
                    <li>
                      business address in Australia or New Zealand, or a
                      description of the location, of the premises where the
                      business is being operated. A postal address cannot be
                      used.
                    </li>
                  </ul>
                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145666"
                      alt="Example food label with the business name and the street address of the food business."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Three">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Three"
                  aria-expanded="false"
                  aria-controls="collapse-Three"
                >
                  3 Weights
                </button>
              </h2>

              <div
                id="collapse-Three"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Three"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    The National Measurement Institute is responsible for making
                    sure food is measured and weighed correctly, and that the
                    food is labelled with the correct weight and unit.
                  </p>

                  <p>
                    For example, food labelled as being 500g should weigh 500g
                    and use the metric system of grams (g), kilograms (kg),
                    millilitres (mL), litres (L), etc.
                  </p>

                  <p>
                    Visit the
                    <a
                      href="https://www.industry.gov.au/regulations-and-standards/buying-and-selling-goods-and-services-by-weights-and-other-measures"
                      target="_blank"
                    >
                      NMI website
                    </a>
                    for more information on how to comply with the laws around
                    weights and other measures.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145675"
                      alt="Example food label with the weight of the food."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Four">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Four"
                  aria-expanded="false"
                  aria-controls="collapse-Four"
                >
                  4 Date marks
                </button>
              </h2>

              <div
                id="collapse-Four"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Four"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    Food packaged with a shelf life of 2 years or less must show
                    a date mark.
                  </p>

                  <p>
                    Foods that should be eaten before a certain date for health
                    and safety reasons must be labelled with a use-by date.
                    Otherwise, a best-before date is required if the food has a
                    shelf life of less than 2 years. Although it may be safe to
                    eat the food after the best-before date, the food may have
                    lost quality or some nutritional value.
                  </p>

                  <p>
                    Bread with a shelf-life of less than 7 days, can use a
                    baked-for date or baked-on date instead of a best-before
                    date.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145668"
                      alt="Example food label with a date mark such as a use by date, best before date, baked on, or baked for date."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Five">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Five"
                  aria-expanded="false"
                  aria-controls="collapse-Five"
                >
                  5 Lot identification
                </button>
              </h2>

              <div
                id="collapse-Five"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Five"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    The lot identification means a number or other information
                    that identifies where the food was made and the batch it was
                    part of. It is not always necessary to include a lot
                    identification on a label if a date mark, business name and
                    address can identify the food. If date marking is not
                    required, lot identification must be added so that the food
                    can be identified.
                  </p>
                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145672"
                      alt="Example food label with the lot identification."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Six">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Six"
                  aria-expanded="false"
                  aria-controls="collapse-Six"
                >
                  6 Storage conditions and directions for use
                </button>
              </h2>

              <div
                id="collapse-Six"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Six"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    <b>Storage conditions</b>
                    <br />
                    To keep food until its best-before or use-by date include
                    storage conditions on your label.
                  </p>
                  <p>
                    <b>Directions for use</b>
                    <br />A food label must have directions on how to use or
                    prepare the food if needed for health and safety reasons.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145674"
                      alt="Example food label with storage conditions and directions for use."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Seven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Seven"
                  aria-expanded="false"
                  aria-controls="collapse-Seven"
                >
                  7 Ingredients
                </button>
              </h2>

              <div
                id="collapse-Seven"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Seven"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    A food label must contain a list of ingredients. The Food
                    Standards Code has rules that describe how each ingredient
                    must be listed, how it is named, extra requirements if an
                    ingredient contains allergens, and how the list is
                    formatted.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145670"
                      alt="Example food label with a list of ingredients."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Eight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Eight"
                  aria-expanded="false"
                  aria-controls="collapse-Eight"
                >
                  8 Advisory statements, warning statements and declarations
                </button>
              </h2>

              <div
                id="collapse-Eight"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Eight"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    A food label must contain a list of ingredients. The Food
                    Standards Code has rules that describe how each ingredient
                    must be listed, how it is named, extra requirements if an
                    ingredient contains allergens, and how the list is
                    formatted.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145670"
                      alt="Example food label with a list of ingredients."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Nine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Nine"
                  aria-expanded="false"
                  aria-controls="collapse-Nine"
                >
                  9 Nutrition information panel
                </button>
              </h2>

              <div
                id="collapse-Nine"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Nine"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    The nutrition information panel (NIP) shows the number of
                    servings in the package and the average amounts in a serving
                    of food and per 100 grams (or 100 millilitres) of food for:
                  </p>
                  <ul>
                    <li>energy (in kilojoules)</li>
                    <li>protein</li>
                    <li>fat (including saturated fat)</li>
                    <li>carbohydrates (including sugars)</li>
                    <li>sodium</li>
                  </ul>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145671"
                      alt="Example food label with nutrition information panel."
                    />
                  </figure>

                  <p>
                    If a nutrition, health or related claim is made, the NIP
                    must also show the amount of nutrient or substance. For
                    example: the amount of calcium must be shown in the
                    nutrition information panel if a claim about calcium is
                    made.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading-Ten">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-Ten"
                  aria-expanded="false"
                  aria-controls="collapse-Ten"
                >
                  10 Claims
                </button>
              </h2>

              <div
                id="collapse-Ten"
                className="accordion-collapse collapse"
                aria-labelledby="heading-Ten"
                role="region"
              >
                <div className="accordion-body">
                  <p>
                    There are strict requirements about claims that can be made
                    and how they should be written on a label.
                  </p>

                  <p>
                    Nutrition content claims are claims about the content of
                    certain nutrients or substances in a food. For example,
                    contains calcium.
                  </p>

                  <p>
                    Health claims refer to a relationship between food and
                    health. For example, calcium for bone and teeth.
                  </p>

                  <figure>
                    <img
                      src="https://www.qld.gov.au/?a=145667"
                      alt="Example food label with nutrition or health claims."
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
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
    </>
  );
};
