import { CloseIcon } from "./Icons";
import { Policy } from "../api/policies";
import { formatDate } from "../utils/formatDate";

interface DialogProps {
  policy: Policy | null;
  open?: boolean;
  onClose?: () => void;
}

export const Dialog = ({ policy, open = false, onClose }: DialogProps) => {
  if (!policy) {
    return <></>;
  }
  return (
    <section className={`dialog ${open && "dialog--open"}`}>
      <div className="dialog__wrapper">
        <header>
          <h2 className="badge">{policy.policyId}</h2>
          <button className="close-button" onClick={onClose}>
            <CloseIcon />
          </button>
        </header>
        <dl>
          <div>
            <dt>Vehicle registration</dt>
            <dd>{policy.vrn}</dd>
          </div>
          <div>
            <dt>Customer name</dt>
            <dd>{policy.customerName}</dd>
          </div>
          <div>
            <dt>Policy id</dt>
            <dd>{formatDate(new Date(policy.startDate))}</dd>
          </div>
          <div>
            <dt>Customer national ID</dt>
            <dd>{policy.customerNationalId}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
