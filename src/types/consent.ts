export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "sm-consent";
export const CONSENT_CHANGE_EVENT = "sm-consent-change";

export type ConsentStatus = "accepted" | "rejected";

export type ConsentRecord = {
  version: number;
  status: ConsentStatus;
  timestamp: number;
};
