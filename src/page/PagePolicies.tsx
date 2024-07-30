import { useState } from "react";
import { PolicySearch } from "../components/PolicySearch";
import { usePolicies } from "../hooks/usePolicies";
import { PolicyCard } from "../components/PolicyCard";
import { Policy } from "../api/policies";
import { Dialog } from "../components/Dialog";

export const PagePolicies = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [policy, setPolicy] = useState<Policy | null>(null);
  const { data, isError, isLoading } = usePolicies(search);

  return (
    <section>
      <PolicySearch cb={setSearch} />

      {search === null && <p>No search performed yet</p>}

      {isLoading && <p>Loader</p>}

      {isError && <p>Error from api</p>}

      {!isError && !isLoading && data.length === 0 && search !== null && (
        <p>No policies found</p>
      )}

      <ul className="result-list">
        {data.length > 0 &&
          data.map((policy) => (
            <li key={policy.vrn}>
              <PolicyCard policy={policy} onClick={setPolicy} />
            </li>
          ))}
      </ul>

      <Dialog
        policy={policy}
        open={Boolean(policy)}
        onClose={() => setPolicy(null)}
      />
    </section>
  );
};
