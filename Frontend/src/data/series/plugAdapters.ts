import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const plugAdaptersConfig: SeriesConfig = {
  seriesName: 'Plug & Adapters',
  seriesPath: '/products/accessories/others/plug-adapters',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

const rawPlugAdaptersProducts: RawSeriesProduct[] = [
  { id: 1, title: '10A 2 PIN MULTI ADAPTER SOCKET WITH FUSE', subtitle: 'Multi Adapter', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031010/10A_2PIN_MULTI_ADAPTER_SOCKET_WITH_FUSE._7896_jjwfke.png', modelNo: '7896', features: [] },
  { id: 2, title: '13A 3 PIN MULTI ADAPTER SOCKET WITH FUSE', subtitle: 'Multi Adapter', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031012/13A_3pin_multi_adapter_socket_7196_pfkam3.png', modelNo: '7196', features: [] },
  { id: 3, title: '2 PIN TRAVEL ADAPTER', subtitle: 'Travel Adapter', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031070/2pin_travel_adapter_633L_usyo46.png', modelNo: '633L', features: [] },
  { id: 4, title: '15A 3 PIN PLUG WITH NEON', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031037/15A_3pin_AC_plug_KT-315_pr30nx.png', modelNo: 'KT-315', features: [] },
  { id: 5, title: '15A 3 PIN PLUG', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031056/15A_3pin_plug_Bakelite_305_dfdr5d.png', modelNo: '305', features: [] },
  { id: 6, title: '13A 3 PIN PLUG (UNBREAKABLE)', subtitle: 'Unbreakable', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031055/13A_3PIN_PLUG_UNBREAKABLE._L306BSL_f6tdid.png', modelNo: 'L306BSL', features: [] },
  { id: 7, title: '13A 3 PIN PLUG (BREAKABLE) BAKELITE', subtitle: 'With Fuse', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031037/13A_3PIN_PLUG_WITH_FUSE_BAKELITE._5678_jjnloh.png', modelNo: '5678', features: [] },
  { id: 8, title: '16A 2 PIN EARTHING PLUG 10A 250V', subtitle: 'Earthing Plug', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031051/10A_2pin_Earthing_Plug_630_uxsvws.png', modelNo: '630', features: [] },
  { id: 9, title: '10A 2 PIN PLUG (WHITE & RED)', subtitle: '2 Pin Plug', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031050/10A_2PIN_PLUG_RED_WHITE._KT-CP-16_e0n0xp.png', modelNo: 'KT-CP16', features: [] },
  { id: 10, title: '10A 2 PIN PLUG (YELLOW)', subtitle: '2 Pin Plug', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031035/10A_2pin_plug_Yellow_KT-YP16_g9hhk4.png', modelNo: 'KT-YP16', features: [] },
  { id: 11, title: '8A 3 PIN PLUG (WHITE & RED)', subtitle: '3 Pin Plug', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031053/8A_3PIN_PLUG._KT-NTP-10_j17th1.png', modelNo: 'KT-NTP-10', features: [] },
  { id: 12, title: '2 PIN ROUND SOCKET', subtitle: 'Round Socket', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031065/Round_25pin_socket_KT-82S_c0bper.png', modelNo: 'KT-82S', features: [] },
];

export const plugAdaptersCatalog: CatalogProduct[] = buildSeriesCatalog(rawPlugAdaptersProducts, plugAdaptersConfig);
