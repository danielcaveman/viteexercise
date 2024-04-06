export const apiUrl = "http://13.40.200.183";
export const userId = 2;

export type Headers = {
  "Content-Type": string;
  Authorization: string;
};

export const headers = {
  "Content-Type": "application/json",
  Authorization: `token-valid-for-${userId}`,
};
