import { buildSeriesCatalog, type CatalogProduct, type RawSeriesProduct, type SeriesConfig } from '../catalog';

export const switchBoxConfig: SeriesConfig = {
  seriesName: 'Switch Box',
  seriesPath: '/products/accessories/others/switch-box',
  categoryName: 'Others',
  categoryPath: '/products/accessories/others',
  imageFolder: '',
};

const rawSwitchBoxProducts: RawSeriesProduct[] = [
  { id: 1, title: '1 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031067/1_HOLE_BOX._HB-235_ehaodb.png', modelNo: 'HB-235', features: [] },
  { id: 2, title: '2 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031055/2_HOLE_BOX._HB-236_pwsok5.png', modelNo: 'HB-236', features: [] },
  { id: 3, title: '3 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031073/3_HOLE_BOX._HB-237_d8xt0n.png', modelNo: 'HB-237', features: [] },
  { id: 4, title: '4 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031014/4_HOLE_BOX._HB-238_devqkc.png', modelNo: 'HB-238', features: [] },
  { id: 5, title: '5 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031020/5_HOLE_BOX._HB-239_sggxg9.png', modelNo: 'HB-239', features: [] },
  { id: 6, title: '6 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031017/6_HOLE_BOX._HB-240_mntiyc.png', modelNo: 'HB-240', features: [] },
  { id: 7, title: '7 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031010/7_HOLE_BOX._HB-241_vf261g.png', modelNo: 'HB-241', features: [] },
  { id: 8, title: '8 HOLE BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031011/8_HOLE_BOX._HB-242_vvfpcl.png', modelNo: 'HB-242', features: [] },
  { id: 9, title: 'JUNCTION BOX', subtitle: 'Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031059/JUNCTION_BOX._BOX_701_a3hht6.png', modelNo: 'Box-701', features: [] },
  { id: 10, title: 'L1 DISTRIBUTION BOX', subtitle: 'Distribution Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031046/L1_DISTRIBUTION_BOX._KL-1_q1uiuz.png', modelNo: 'KL-1', features: [] },
  { id: 11, title: 'L2 DISTRIBUTION BOX', subtitle: 'Distribution Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031047/L2_DISTRIBUTION_BOX._KL-2_a9qusj.png', modelNo: 'KL-2', features: [] },
  { id: 12, title: 'L3 DISTRIBUTION BOX', subtitle: 'Distribution Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031062/L3_DISTRIBUTION_BOX._KL-3_b2voqu.png', modelNo: 'KL-3', features: [] },
  { id: 13, title: '1 ALPHA SWITCH BOX', subtitle: 'Alpha Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031033/1_ALPHA_SWITCH_BOX_AB-804_oybiyr.png', modelNo: 'AB-804', features: [] },
  { id: 14, title: '2 ALPHA SWITCH BOX', subtitle: 'Alpha Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031074/2_ALPHA_SWITCH_BOX_AB-805_zqojsy.png', modelNo: 'AB-805', features: [] },
  { id: 15, title: '3 ALPHA SWITCH BOX', subtitle: 'Alpha Switch Box', image: 'https://res.cloudinary.com/dcdo4venk/image/upload/v1784031036/3_ALPHA_SWITCH_BOX_AB-806_j6gjmo.png', modelNo: 'AB-806', features: [] },
];

export const switchBoxCatalog: CatalogProduct[] = buildSeriesCatalog(rawSwitchBoxProducts, switchBoxConfig);
