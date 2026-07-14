import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const ledLinearTubeBattenLightConfig: SeriesConfig = {
  seriesName: 'Linear Tube (Batten) Light',
  seriesPath: '/products/led-lighting/linear-tube-batten-light',
  categoryName: 'LED Lighting',
  categoryPath: '/products/led-lighting',
  imageFolder: '',
};

const rawLedLinearTubeBattenLightProducts: RawSeriesProduct[] = [
  {
    id: 1,
    title: 'ECO OVAL LED BATTEN LIGHT',
    subtitle: 'Power: 40W, 4 Feet',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047464/KITTY_ECO_OVAL_BATTEN_LIGHT._OVAL-1200-40W_yawdnv.png',
    modelNo: 'KITTY-OVAL-1200-40W',
    productType: 'Eco Series',
    features: ['Oval', '40W', '4 Feet'],
  },
  {
    id: 2,
    title: 'ECO SLIM LED BATTEN LIGHT',
    subtitle: 'Power: 40W, 4 Feet',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047462/KITTY_ECO_SLIM_BATTEN_LIGHT._SLIM-1200-40W_ts6vvq.png',
    modelNo: 'KITTY-SLIM-1200-40W',
    productType: 'Eco Series',
    features: ['Slim', '40W', '4 Feet'],
  },
  {
    id: 3,
    title: 'DECO SERIES LED LINEAR TUBE (BATTEN) LIGHT',
    subtitle: 'Power: 10W/20W/40W',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784046977/DECO_LED_LINEAR_TUBE_-10W-20W-40W_lobhfu.png',
    modelNo: 'Kitty-K2CD-600-10W - Kitty-K2CD-1200-40W',
    productType: 'Deco Series',
    features: ['10W', '20W', '40W'],
  },
  {
    id: 4,
    title: 'EURO SERIES LED LINEAR TUBE (BATTEN) LIGHT',
    subtitle: 'Power: 20W/40W',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047601/EURO_SERIES_LED_BATTEN_40W_4FEET_20W_2FEET_n19zcz.png',
    modelNo: 'Kitty-K2CE-600-20W - Kitty-K2CE-1200-40W',
    productType: 'Euro Series',
    features: ['20W', '40W'],
  },
  {
    id: 5,
    title: 'KITTY SQUARE LED BATTEN LIGHT',
    subtitle: 'Power: 60W, 4 Feet',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047733/SQUARE_SHAPE_LED_BATTEN_TUBE_LIGHT_60W_sjngqf.png',
    modelNo: 'BSQL1200-60WATT',
    productType: 'Kitty Series',
    features: ['Square', '60W', '4 Feet'],
  },
  {
    id: 6,
    title: 'KITTY OVAL LED BATTEN LIGHT',
    subtitle: 'Power: 10W/20W/40W',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047752/OVAL_SHAPE_LED_LINEAR_TUBE_BATTEN_LIGHT_hoky8i.png',
    modelNo: 'Kitty-BCO300-10 watt - KITTY-BC1200-40 WATT',
    productType: 'Kitty Series',
    features: ['Oval', '10W', '20W', '40W'],
  },
  {
    id: 7,
    title: 'KITTY SLIM LED BATTEN LIGHT',
    subtitle: 'Power: 10W/20W/40W',
    image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784047749/SLIM_SHAPE_LED_LINEAR_TUBE_BATTEN_LIGHT_SIZE__10W_20W_40W_ceneg5.png',
    modelNo: 'Kitty-BCS300-10 watt - KITTY-BSL1200-40WATT',
    productType: 'Kitty Series',
    features: ['Slim', '10W', '20W', '40W'],
  },
];

export const ledLinearTubeBattenLightProductTypes = ['Eco Series', 'Deco Series', 'Euro Series', 'Kitty Series'];

export const ledLinearTubeBattenLightCatalog: CatalogProduct[] = buildSeriesCatalog(rawLedLinearTubeBattenLightProducts, ledLinearTubeBattenLightConfig);
