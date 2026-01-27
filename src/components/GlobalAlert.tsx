type AlertVariant = "info" | "warning" | "success";

type AlertProps = {
  alertHeading: string;
  alertMessage: React.ReactNode;
  alertLink?: string;
  variant?: AlertVariant;
};

export const SeekProAdvice = () => {
  return (
    <div
      className="alert alert-warning d-flex flex-column gap-2"
      role="alert"
      aria-label="Warning alert"
    >
      <h2 className="alert-heading h5 m-0">Seek professional advice</h2>
      <p className="mb-0">
        Thank you for your interest in Label Buster. Unfortunately, Label Buster
        does not provide labelling information for these drinks. We recommend
        you seek professional advice from a food labelling consultant to prepare
        your food label.
      </p>
    </div>
  );
};

export const Alert = ({
  alertHeading,
  alertMessage,
  alertLink,
  variant = "info",
}: AlertProps) => {
  return (
    <div
      className={`alert alert-${variant} d-flex flex-column gap-2`}
      role="alert"
      aria-label={`${variant} alert`}
    >
      <h2 className="alert-heading h5 m-0">{alertHeading}</h2>
      <div className="d-flex flex-column gap-2">
        {alertMessage}
        {alertLink && (
          <a className="align-self-start" href={alertLink}>
            Find out more
          </a>
        )}
      </div>
    </div>
  );
};
