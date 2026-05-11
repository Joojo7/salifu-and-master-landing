export type AdSlotFormat = "auto" | "fluid" | "rectangle";

export type AdSlotProps = {
  slot: string;
  format?: AdSlotFormat;
  layout?: string;
  responsive?: boolean;
  className?: string;
};
