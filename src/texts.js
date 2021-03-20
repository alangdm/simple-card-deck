const TEXTS = {
  beforeLoad: 'Load a deck to start playing!',
  loading: 'Loading...',
  afterLoad: 'Loaded!',
  secondLoad: 'Load a different deck?',
  inputLabel: 'Select the images for the cards',
  nextCard: 'Next Card',
  shuffle: 'Shuffle Deck',
};

export const t = key => TEXTS[key] || key;
