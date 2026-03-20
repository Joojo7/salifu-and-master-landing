export interface LightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
