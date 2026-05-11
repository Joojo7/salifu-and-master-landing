import {
  CONSENT_CHANGE_EVENT,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type ConsentRecord,
  type ConsentStatus,
} from "@/types/consent";

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    status,
    timestamp: Date.now(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  updateGoogleConsent(status);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: status }));
}

type GtagFn = (
  command: "consent",
  action: "update",
  params: Record<string, "granted" | "denied">,
) => void;

function updateGoogleConsent(status: ConsentStatus): void {
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  const value = status === "accepted" ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}
