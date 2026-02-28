export interface Level {
  id: number;
  letter: string;
  instructions: string;
  // Using 'any' here to keep compatibility with require() image imports
  imageSource: any;
}

