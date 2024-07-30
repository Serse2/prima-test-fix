import { mockPolicies } from "./__mocks__/mockPolicies";

export interface Policy {
  policyId: string;
  customerNationalId: string;
  customerName: string;
  vrn: string;
  startDate: string;
  endDate: string;
}

export function getPolicies(search: string): Promise<Policy[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(
        !search
          ? []
          : mockPolicies.filter(({ vrn }) => {
              return vrn.includes(search);
            })
      );
    }, 0);
  });
}
