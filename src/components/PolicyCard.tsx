import { Policy } from "../api/policies";
import { formatDate } from "../utils/formatDate";

type PolicyCardProps = {
  policy: Policy;
  onClick: (policy: Policy) => void;
};

export const PolicyCard = ({ policy, onClick }: PolicyCardProps) => {
  const { vrn, startDate, policyId } = policy;

  return (
    <div className="result-item">
      <div className="result-item__header">
        <div className="badge">{policyId}</div>
        <div className="result-item__date">
          {formatDate(new Date(startDate))}
        </div>
      </div>
      <div className="result-item__vehicle ">{vrn}</div>
      <button className="button" onClick={() => onClick(policy)}>
        Show details
      </button>
    </div>
  );
};
