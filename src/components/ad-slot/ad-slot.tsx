"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID } from "@/lib/constants";
import type { AdSlotProps } from "@/types/ad-slot";
import styles from "./ad-slot.module.scss";

type AdsByGoogleWindow = Window & {
  adsbygoogle?: Array<Record<string, unknown>>;
};

export function AdSlot({
  slot,
  format = "auto",
  layout,
  responsive = true,
  className,
}: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    pushed.current = true;
    try {
      const w = window as AdsByGoogleWindow;
      w.adsbygoogle = w.adsbygoogle ?? [];
      w.adsbygoogle.push({});
    } catch {
      pushed.current = false;
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <div className={`${styles.wrap}${className ? ` ${className}` : ""}`} aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
