export interface ScreenshotItem {
  src: string;
  alt: string;
}

export interface ScreenshotGridProps {
  screenshots: ScreenshotItem[];
  onImageClick: (index: number) => void;
}

export interface PhoneMockupProps {
  screenshots: ScreenshotItem[];
  onImageClick: (index: number) => void;
  indexOffset: number;
}
