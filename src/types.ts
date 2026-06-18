export type RatingType = 'stars' | 'numbers';

export interface ContentState {
  title: string;
  subtitle: string;
  ratingType: RatingType;
  rating: number;
  options: string[];
  allowComments: boolean;
  submitButtonText: string;
  thankYouTitle: string;
  thankYouSubtitle: string;
  thankYouButtonText: string;
  mediaUrl: string;
}

export interface StyleState {
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  buttonColor: string;
  buttonTextColor: string;
  fontSize: number;
  fontWeight: number;
  borderRadius: number;
  buttonWidth: number;
  buttonHeight: number;
  selectedColor: string;
  unselectedColor: string;
}
