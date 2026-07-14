import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const pianoIconSeriesConfig: SeriesConfig = {
  seriesName: 'Piano Switch Socket',
  seriesPath: '/products/switch-socket/piano-switch-socket',
  categoryName: 'Piano Switch Socket',
  categoryPath: '/products/switch-socket',
  imageFolder: '',
};

const rawPianoIconSeriesProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: '1 WAY PIANO SWITCH',
    subtitle: '1 Way Piano Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017642/Icon_1_way_switch_K-3551_di9hwj.png',
    modelNo: 'K3551',
    productType: 'Switch',
    features: ['With Switch'],
  },
  {
    id: 2,
    title: '2 WAY PIANO SWITCH',
    subtitle: '2 Way Piano Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017642/Icon_2_way_switch_K-3551_akw2pa.png',
    modelNo: 'K3551-2',
    productType: 'Switch',
    features: ['With Switch'],
  },
  {
    id: 3,
    title: 'BELL PUSH SWITCH',
    subtitle: 'Bell Push Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017642/Icon_bellpush_switch_K-3553B_fj7xto.png',
    modelNo: 'K3553B',
    productType: 'Switch',
    features: ['With Switch'],
  },
  {
    id: 4,
    title: '2 PIN PIANO SOCKET',
    subtitle: '2 Pin Piano Socket',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017642/Icon_2_pin_socket_K-3552_quhohi.png',
    modelNo: 'K3552',
    productType: 'Socket',
    socketType: '2 Pin Socket',
    features: [],
  },
  {
    id: 5,
    title: 'FAN SPEED CONTROLLER',
    subtitle: 'Fan Speed Controller',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017644/Icon_Fandimmer_K-3560_sjvc5m.png',
    modelNo: 'K3560',
    productType: 'Fan Speed Controller',
    features: ['Fan Speed Control'],
  },
  {
    id: 6,
    title: 'INDICATING LAMP SWITCH',
    subtitle: 'Indicating Lamp Switch',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017642/Icon_indicating_lamp_K-3554L_jrvkpq.png',
    modelNo: 'K3554L',
    productType: 'Switch',
    features: ['With Neon'],
  },
  {
    id: 7,
    title: 'KIT KAT FUSE',
    subtitle: 'Kit Kat Fuse',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784017644/Icon_kit_kat_fuse_K-3556_jreane.png',
    modelNo: 'K3556',
    productType: 'Fuse',
    features: [],
  },
];

export const pianoIconSeriesProductTypes = ['Switch', 'Socket', 'Fan Speed Controller', 'Fuse'];
export const pianoIconSeriesSocketTypes = ['2 Pin Socket'];
export const pianoIconSeriesFeatureList = ['With Switch', 'With Neon', 'Fan Speed Control'];

export const pianoIconSeriesCatalog: CatalogProduct[] = buildSeriesCatalog(rawPianoIconSeriesProducts, pianoIconSeriesConfig);
