export interface FeatureCardData {
  key: string;
  image: string;
}

export interface FeatureCardProps {
  data: FeatureCardData;
  isActive: boolean;
  title: string;
  description: string;
}

export interface CarouselControlsProps {
  total: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
}
