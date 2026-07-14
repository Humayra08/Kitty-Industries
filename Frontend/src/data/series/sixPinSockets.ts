import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const sixPinSocketsConfig: SeriesConfig = {
  seriesName: '6 Pin Sockets',
  seriesPath: '/products/accessories/others/6-pin-sockets',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

const rawSixPinSocketsProducts: RawSeriesProduct[] = [
  { id: 1, title: 'KITTY 6 PIN UNIVERSAL SOCKET WITH NEON', subtitle: 'Single', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031042/KITTY_6_PIN_UNIVERSAL_SOCKET_SINGLE._BS002_jp6zf3.png', modelNo: 'BS002', features: [] },
  { id: 2, title: 'KITTY DOUBLE 13A & 2 PIN UNIVERSAL SOCKET WITH NEON', subtitle: 'Double', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031019/KITTY_6_PIN_UNIVERSAL_SOCKET_DOUBLE._qrc7ia.png', modelNo: 'BS003', features: [] },
  { id: 3, title: 'KITTY 32A DP SWITCH WITH NEON', subtitle: 'DP Switch', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031062/KT432A_iu1xyg.png', modelNo: 'KT432A', features: [] },
  { id: 4, title: 'HTC 6 PIN UNIVERSAL SOCKET', subtitle: '6 Pin Socket', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031041/HTC_6PIN_UNIVERSAL_SOCKET._HTC7525_qjeymz.png', modelNo: 'HTC7525', features: [] },
  { id: 5, title: 'TDK 6 PIN UNIVERSAL SOCKET', subtitle: '6 Pin Socket', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031070/TDK_6PIN_UNIVERSAL_SOCKET._TDK9106_jqqxml.png', modelNo: 'TDK9106', features: [] },
  { id: 6, title: 'TESLA 6 PIN UNIVERSAL SOCKET WITH NEON', subtitle: '6 Pin Socket', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031051/TESLA_6PIN_UNIVERSAL_SOCKET._TS628_h143il.png', modelNo: 'TS628', features: [] },
  { id: 7, title: 'CERAMIC COMBINED SOCKET (3X1) WITH NEON', subtitle: 'Combined Socket', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031080/Ceramic_Combined_Socket_3x1_with_neon._KT-3315_jdp6ru.png', modelNo: 'KT-3315', features: [] },
  { id: 8, title: 'ALPINE PLUS 5 PIN UNIVERSAL SOCKET', subtitle: 'With Neon', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031040/ALPINE_PLUS_5_PIN_UNIVERSAL_SOCKET_SWITCH_WITH_NEON._AP-500_u46d6f.png', modelNo: 'AP-500', features: [] },
];

export const sixPinSocketsCatalog: CatalogProduct[] = buildSeriesCatalog(rawSixPinSocketsProducts, sixPinSocketsConfig);
