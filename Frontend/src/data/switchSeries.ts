export interface SwitchSeries {
  name: string;
}

/** Finish/series lineup offered across both Gang and Piano switch & socket product lines. */
export const switchSeriesList: SwitchSeries[] = [
  { name: 'ART SERIES' },
  { name: 'Blanko' },
  { name: 'DOREN SERIES GOLDEN' },
  { name: 'DOREN SERIES WHITE' },
  { name: 'GLORIA SERIES' },
  { name: 'OPPLE SERIES' },
  { name: 'VENUS SERIES' },
  { name: 'VERONA SERIES' },
  { name: 'VIP SERIES GOLDEN' },
  { name: 'VIP SERIES WHITE' },
  { name: 'ZHILIK SERIES GOLDEN' },
  { name: 'ZHILIK SERIES WHITE' },
];

export const seriesSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');
