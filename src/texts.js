const en = {
  beforeLoad: 'Load a deck to start playing!',
  loading: 'Loading...',
  afterLoad: 'Loaded!',
  secondLoad: 'Load a different deck?',
  inputLabel: 'Drag or select the images for the cards',
  nextCard: 'Next Card',
  shuffle: 'Shuffle Deck',
};

const es = {
  beforeLoad: '¡Carga una baraja para comenzar a jugar!',
  loading: 'Cargando...',
  afterLoad: '¡Cargado!',
  secondLoad: '¿Cargar una baraja diferente?',
  inputLabel: 'Arrastra o selecciona las imágenes para las cartas',
  nextCard: 'Siguiente Carta',
  shuffle: 'Revolver Baraja',
};

const ja = {
  beforeLoad: 'カードをロードして遊びましょう',
  loading: 'ロード中…',
  afterLoad: 'ロード完了',
  secondLoad: '別のカードをロードしますか？',
  inputLabel: 'カードの画像をドロップか選択してください',
  nextCard: '次のカード',
  shuffle: 'カードをシャッフルする',
};

const TEXTS = {
  en,
  es,
  ja,
};

const getLang = () => document.documentElement.getAttribute('lang');

export const LANGUAGES = ['en', 'es', 'ja'];

export const t = key => TEXTS[getLang()][key] || key;
