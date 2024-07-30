import { useCallback, useEffect, useState } from "react";
import { PolicyList } from "../api/__mocks__/mockPolicies";
import { getPolicies } from "../api/policies";

export const usePolicies = (
  search: string | null
): {
  data: PolicyList;
  isLoading: boolean;
  isError: boolean;
  freshData: () => Promise<void>;
} => {
  const [data, setData] = useState<PolicyList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchPolicies = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const resp = await getPolicies(search!);
      setData(resp);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    search && fetchPolicies();
  }, [fetchPolicies, search]);

  return { data, isError, isLoading, freshData: fetchPolicies };
};
