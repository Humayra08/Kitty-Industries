import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const lampHoldersCeilingRoseConfig: SeriesConfig = {
  seriesName: 'Lamp Holders & Ceiling Rose',
  seriesPath: '/products/accessories/others/lamp-holders-ceiling-rose',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

// NOTE: KRCH-01S (Decorative Multi Lamp Holder Round Silver) is not yet added — pending Cloudinary URL.
const rawLampHoldersCeilingRoseProducts: RawSeriesProduct[] = [
  { id: 1, title: 'DECORATIVE MULTI LAMP HOLDER ROUND GOLDEN', subtitle: 'Round, Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031093/Round_Decorative_Lamp_Holder_KRCH-01G_uretwk.png', modelNo: 'KRCH-01G', productType: 'Lamp Holder', features: ['Golden'] },
  { id: 2, title: 'DECORATIVE MULTI LAMP HOLDER SQUARE GOLDEN', subtitle: 'Square, Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031041/Square_Decorative_Lamp_Holder_KSCH-01G_htsfrk.png', modelNo: 'KSCH-01G', productType: 'Lamp Holder', features: ['Golden'] },
  { id: 3, title: 'DECORATIVE MULTI LAMP HOLDER SQUARE SILVER', subtitle: 'Square, Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031035/Round_Decorative_Lamp_Holder_KSCH-01S_jiwdcr.png', modelNo: 'KSCH-01S', productType: 'Lamp Holder', features: ['Silver'] },
  { id: 4, title: 'DECORATIVE CEILING ROSE ROUND GOLDEN', subtitle: 'Round, Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031081/DECORATIVE_CEILING_ROSE_ROUND_GOLDEN_zfkdm1.png', modelNo: 'KRCH-CR-06R', productType: 'Ceiling Rose', features: ['Golden'] },
  { id: 5, title: 'DECORATIVE CEILING ROSE ROUND SILVER', subtitle: 'Round, Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031079/DECORATIVE_CEILING_ROSE_ROUND_SILVER_kjgeyf.png', modelNo: 'KRCH-CR-10R', productType: 'Ceiling Rose', features: ['Silver'] },
  { id: 6, title: 'DECORATIVE CEILING ROSE SQUARE GOLDEN', subtitle: 'Square, Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031057/DECORATIVE_CEILING_ROSE_SQUARE_GOLDEN_ikara0.png', modelNo: 'KSCH-CR-06S', productType: 'Ceiling Rose', features: ['Golden'] },
  { id: 7, title: 'DECORATIVE CEILING ROSE SQUARE SILVER', subtitle: 'Square, Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031062/DECORATIVE_CEILING_ROSE_SQUARE_SILVER_j2bdcx.png', modelNo: 'KSCH-CR-10S', productType: 'Ceiling Rose', features: ['Silver'] },
  { id: 8, title: 'KITTY COLOUR MULTI LAMP HOLDER GOLDEN (G2227)', subtitle: 'Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031066/Multi_Lamp_Holder_G-2227_jubc0l.png', modelNo: 'G2227', productType: 'Lamp Holder', features: ['Golden'] },
  { id: 9, title: 'KITTY COLOUR MULTI LAMP HOLDER GOLDEN (G3327)', subtitle: 'Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031085/Multi_Lamp_Holder_G-3327_zqhmlx.png', modelNo: 'G3327', productType: 'Lamp Holder', features: ['Golden'] },
  { id: 10, title: 'KITTY COLOR MULTI LAMP HOLDER SILVER', subtitle: 'Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031035/Multi_Lamp_Holder_S-2228_n8s4ww.png', modelNo: 'S2228', productType: 'Lamp Holder', features: ['Silver'] },
  { id: 11, title: 'KITTY COLOUR MULTI LAMP HOLDER SILVER', subtitle: 'Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031068/Multi_Lamp_Holder_S-3328_nenydv.png', modelNo: 'S3328', productType: 'Lamp Holder', features: ['Silver'] },
  { id: 12, title: 'KITTY COLOUR MULTI CEILING ROSE GOLDEN', subtitle: 'Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031028/MULTI_CEILING_ROSE_GOLD._G-5298_fs2xic.png', modelNo: 'G5298', productType: 'Ceiling Rose', features: ['Golden'] },
  { id: 13, title: 'KITTY COLOR MULTI CEILING ROSE GOLDEN', subtitle: 'Golden', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031028/Multi_Ceilling_Rose_G-3298_e3dlk7.png', modelNo: 'G3298', productType: 'Ceiling Rose', features: ['Golden'] },
  { id: 14, title: 'KITTY COLOR MULTI CEILING ROSE SILVER (S5288)', subtitle: 'Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031027/MULTI_CEILING_ROSE_SILVER._S-5288_svn3zi.png', modelNo: 'S5288', productType: 'Ceiling Rose', features: ['Silver'] },
  { id: 15, title: 'KITTY COLOR MULTI CEILING ROSE SILVER (S3288)', subtitle: 'Silver', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031026/MULTI_CEILING_ROSE_SILVER._S-3288_rmav7r.png', modelNo: 'S3288', productType: 'Ceiling Rose', features: ['Silver'] },
  { id: 16, title: 'LA HOLDER MULTI B22+E27 (B2284M)', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031041/BAKELITE_MULTI_LAMP_HOLDER._B-2284M_ohbr3q.png', modelNo: 'B2284M', productType: 'Lamp Holder', features: [] },
  { id: 17, title: 'LA HOLDER MULTI B22+E27 (B2285M)', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031074/BAKELITE_MULTI_LAMP_HOLDER._B-2285M_ielljy.png', modelNo: 'B2285M', productType: 'Lamp Holder', features: [] },
  { id: 18, title: 'KITTY CHALTA CEILING ROSE', subtitle: 'Chalta', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031084/KITTY_CHALTA_CEILING_ROSE._KCH-03_znnbbb.png', modelNo: 'KCH-03', productType: 'Ceiling Rose', features: [] },
  { id: 19, title: 'KITTY CHALTA LAMP HOLDER (PIN)', subtitle: 'Chalta, B22', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031044/KITTY_CHALTA_LAMP_HOLDER_B22._KCH-B22_c7pjhm.png', modelNo: 'KCH-B22', productType: 'Lamp Holder', features: [] },
  { id: 20, title: 'KITTY CHALTA LAMP HOLDER (THREAD)', subtitle: 'Chalta, E27', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031022/KITTY_CHALTA_LAMP_HOLDER_E27._KCH-E27_ilhmdw.png', modelNo: 'KCH-E27', productType: 'Lamp Holder', features: [] },
  { id: 21, title: 'KITTY HEXAGON CEILING ROSE', subtitle: 'Hexagon', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031022/KITTY_HEXAGON_CEILING_ROSE._KHR-03_knygio.png', modelNo: 'KHR-03', productType: 'Ceiling Rose', features: [] },
  { id: 22, title: 'KITTY HEXAGON LAMP HOLDER (B22)', subtitle: 'Hexagon, B22', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031082/KITTY_HEXAGON_LAMP_HOLDER_B22._KH-B22_gjlsn6.png', modelNo: 'KH-B22', productType: 'Lamp Holder', features: [] },
  { id: 23, title: 'KITTY HEXAGON LAMP HOLDER (E27)', subtitle: 'Hexagon, E27', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031028/KITTY_HEXAGON_LAMP_HOLDER_E27._KH-E27_pkcho6.png', modelNo: 'KH-E27', productType: 'Lamp Holder', features: [] },
  { id: 24, title: 'KITTY BAKELITE CEILING ROSE', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031079/KITTY_BAKELITE_CEILING_ROSE._B-2030_l7cbc1.png', modelNo: 'B2030', productType: 'Ceiling Rose', features: [] },
  { id: 25, title: 'KITTY BAKELITE LAMP HOLDER (PIN)', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031024/KITTY_BAKELITE_LAMP_HOLDER..B-2022_ys2opo.png', modelNo: 'B2022', productType: 'Lamp Holder', features: [] },
  { id: 26, title: 'KITTY BAKELITE LAMP HOLDER (THREAD)', subtitle: 'Bakelite', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031079/KITTY_BAKELITE_LAMP_HOLDER_E27._B-2027_psbf8c.png', modelNo: 'B2027', productType: 'Lamp Holder', features: [] },
  { id: 27, title: 'KITTY PREMIUM CEILING ROSE', subtitle: 'Premium', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031028/PREMIUM_CEILING_ROSE._B-5825_mnfetu.png', modelNo: 'B5825', productType: 'Ceiling Rose', features: [] },
  { id: 28, title: 'KITTY PREMIUM LAMP HOLDER (SP-B2262)', subtitle: 'Premium, B22', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031043/KITTY_PREMIUM_LAMP_HOLDER_B22._B-2262_fhkekk.png', modelNo: 'B2262', productType: 'Lamp Holder', features: [] },
  { id: 29, title: 'KITTY PREMIUM LAMP HOLDER (SP-E2762)', subtitle: 'Premium, E27', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031046/KITTY_PREMIUM_LAMP_HOLDER_E27._E-2762_fi4cos.png', modelNo: 'E2762', productType: 'Lamp Holder', features: [] },
  { id: 30, title: 'KITTY PREMIUM LAMP HOLDER (SS-B2272)', subtitle: 'Premium, B22', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031082/KITTY_PREMIUM_LAMP_HOLDER_B22._B-2272_mt3bz1.png', modelNo: 'B2272', productType: 'Lamp Holder', features: [] },
  { id: 31, title: 'KITTY PREMIUM LAMP HOLDER (SS-E2772)', subtitle: 'Premium, E27', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031045/KITTY_PREMIUM_LAMP_HOLDER_E27._E-2772_ipmvx0.png', modelNo: 'E2772', productType: 'Lamp Holder', features: [] },
  { id: 32, title: 'PENDENT HOLDER (B22)', subtitle: 'Pendent Holder', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031043/KITTY_PANDENT_LAMP_HOLDER_B22._KT-PHP-22_ehtoyr.png', modelNo: 'KT-PHP-22', productType: 'Lamp Holder', features: [] },
  { id: 33, title: 'PENDENT HOLDER (E27)', subtitle: 'Pendent Holder', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031081/KITTY_PANDENT_LAMP_HOLDER._E27._KT-PHE-27_jcg3tq.png', modelNo: 'KT-PHE-27', productType: 'Lamp Holder', features: [] },
  { id: 34, title: 'CEILING ROSE (4X4)', subtitle: 'Ceiling Rose', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031020/KITTY_CEILING_ROSE_4_4_emyu20.png', modelNo: 'B5821', productType: 'Ceiling Rose', features: [] },
];

export const lampHoldersCeilingRoseProductTypes = ['Lamp Holder', 'Ceiling Rose'];
export const lampHoldersCeilingRoseFeatureList = ['Golden', 'Silver'];

export const lampHoldersCeilingRoseCatalog: CatalogProduct[] = buildSeriesCatalog(rawLampHoldersCeilingRoseProducts, lampHoldersCeilingRoseConfig);
