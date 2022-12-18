interface Igoods {
    id: number,
    category: string,
    name: string,
    brand: string,
    photo: string[],
    price: number,
    inStock: number,
    rating: number
  };

interface Idb extends Igoods {};

const bd: Array<Idb> = [
  {
    id: 1,
    category: 'Electric guitar',
    name: 'Parallel universe whiteguard strat MN VBL',
    brand: 'Fender',
    photo: ['./assets/img/0176062707_gtr_frt_001_rr.jpeg', './assets/img/0176062707_gtr_back_001_rl.jpeg', './assets/img/0176062707_gtr_cntbdyright_001_nr.jpeg', './assets/img/0176062707_gtr_frtbdydtl_001_nr.jpeg'],
    price: 1802,
    inStock: 18,
    rating: 4.42
  },
  {
    id: 2,
    category: 'Electric guitar',
    name: 'RG370AHMZ BMT',
    brand: 'Ibanez',
    photo: ['./assets/img/RG370AHMZ_BMT_1P_01.jpeg', './assets/img/225589_113-1200x800.jpeg', './assets/img/225589_1117-1200x800.jpeg', './assets/img/225589_115-1200x800.jpeg'],
    price: 532,
    inStock: 14,
    rating: 4.01
  },
  {
    id: 3,
    category: 'Semi-acoustic guitars',
    name: 'BC-V90B BK',
    brand: 'Vox',
    photo: ['./assets/img/232091_1-1200x800.jpeg', './assets/img/232091_2-1200x800.jpeg', './assets/img/232091_3-1200x800.jpeg', './assets/img/232091_4-1200x800.jpeg'],
    price: 1260,
    inStock: 22,
    rating: 4.71
  },
  {
    id: 4,
    category: 'Semi-acoustic guitars',
    name: 'Casino natural',
    brand: 'Epiphone',
    photo: ['./assets/img/230112_EPIPHONE CASINO NATURAL_1.jpeg', './assets/img/230112_EPIPHONE CASINO NATURAL_2-1200x800.jpeg', './assets/img/230112_EPIPHONE CASINO NATURAL_3-1200x800.jpeg', './assets/img/230112_EPIPHONE CASINO NATURAL_4-1200x800.jpeg'],
    price: 780,
    inStock: 10,
    rating: 4.56
  },
  {
    id: 5,
    category: 'Electric guitar',
    name: 'Flying V prophecy black aged gloss',
    brand: 'Epiphone',
    photo: ['./assets/img/230996_1-1200x800.jpeg', './assets/img/230996_2-1200x800.jpeg', './assets/img/230996_3-1200x800.jpeg', './assets/img/230996_4-1200x800.jpeg'],
    price: 1005,
    inStock: 7,
    rating: 4.78
  },
  {
    id: 6,
    category: 'Classic guitar',
    name: 'PRO-1 Classic',
    brand: 'Epiphone',
    photo: ['./assets/img/228188_1-1200x800.jpeg', './assets/img/228188_013-1200x800.jpeg', './assets/img/228188_015-1200x800.jpeg', './assets/img/228188_017-1200x800.jpeg'],
    price: 205,
    inStock: 23,
    rating: 4.81
  },
  {
    id: 7,
    category: 'Classic guitar',
    name: 'C-40BL',
    brand: 'Yamaha',
    photo: ['./assets/img/960872_YAMAHA_C-40BL_1-1200x800.jpeg', './assets/img/960872_YAMAHA_C-40BL_2-1200x800.jpeg', './assets/img/960872_YAMAHA_C-40BL_3-1200x800.jpeg', './assets/img/1077929-1200x800.jpeg'],
    price: 162,
    inStock: 11,
    rating: 4.75
  },
  {
    id: 8,
    category: 'Classic guitar',
    name: 'GA6CE AM',
    brand: 'Ibanez',
    photo: ['./assets/img/2111148_112-1200x800.jpeg', './assets/img/2111148_113-1200x800.jpeg', './assets/img/2111148_114-1200x800.jpeg', './assets/img/2111148_115-1200x800.jpeg'],
    price: 224,
    inStock: 5,
    rating: 4.32
  },
  {
    id: 9,
    category: 'Bass guitar',
    name: 'Player plus precision bass PF 3TSB',
    brand: 'Fender',
    photo: ['./assets/img/232229_1-1200x800.jpeg', './assets/img/232229_2-1200x800.jpeg', './assets/img/232229_4-1200x800.jpeg', './assets/img/232229_3-1200x800.jpeg'],
    price: 1320,
    inStock: 28,
    rating: 4.91
  },
  {
    id: 10,
    category: 'Bass guitar',
    name: 'Jack Casady bass metallic gold',
    brand: 'Epiphone',
    photo: ['./assets/img/231819_1-1200x800.jpeg', './assets/img/231819_2-1200x800.jpeg', './assets/img/231819_3-1200x800.jpeg', './assets/img/231819_4-1200x800.jpeg'],
    price: 820,
    inStock: 11,
    rating: 4.43
  },
  {
    id: 11,
    category: 'Semi-acoustic guitars',
    name: 'G6136TG players edition falcon midnight sapphire',
    brand: 'Gretsch',
    photo: ['./assets/img/232380_1-1200x800.jpeg', './assets/img/232380_2-1200x800.jpeg', './assets/img/232380_3-1200x800.jpeg', './assets/img/232380_4-1200x800.jpeg'],
    price: 4580,
    inStock: 2,
    rating: 4.87
  },
  {
    id: 12,
    category: 'Bass guitar',
    name: 'SR5PBLTD DEL',
    brand: 'Ibanez',
    photo: ['./assets/img/230759_1-1200x800.jpeg', './assets/img/230759_2-1200x800.jpeg', './assets/img/230759_3-1200x800.jpeg', './assets/img/230759_4-1200x800.jpeg'],
    price: 1540,
    inStock: 6,
    rating: 4.95
  },
  {
    id: 13,
    category: 'Electric guitar',
    name: 'American acoustasonic stratocaster sonic blue',
    brand: 'Fender',
    photo: ['./assets/img/230161_1-1200x800.jpeg', './assets/img/230161_2-1200x800.jpeg', './assets/img/230161_3-1200x800.jpeg', './assets/img/230161_4-1200x800.jpeg'],
    price: 2400,
    inStock: 3,
    rating: 4.83
  },
  {
    id: 14,
    category: 'Electric acoustic guitar',
    name: 'J-200EC Studio VS',
    brand: 'Epiphone',
    photo: ['./assets/img/A002332_epiphone_j-200ec_studio_vs_01-1200x800.jpeg', './assets/img/A002332_epiphone_j-200ec_studio_vs_02-1200x800.jpeg', './assets/img/A002332_epiphone_j-200ec_studio_vs_03-1200x800.jpeg', './assets/img/A002332_epiphone_j-200ec_studio_vs_04-1200x800.jpeg'],
    price: 765,
    inStock: 6,
    rating: 4.76
  },
  {
    id: 15,
    category: 'Electric acoustic guitar',
    name: 'PF15ECE NT',
    brand: 'Ibanez',
    photo: ['./assets/img/213669_1-1200x800.jpeg', './assets/img/1071049-1200x800.jpeg', './assets/img/1071084-1200x800.jpeg', './assets/img/1071079-1200x800.jpeg'],
    price: 305,
    inStock: 11,
    rating: 4.61
  },
  {
    id: 16,
    category: 'Electric acoustic guitar',
    name: '224CE-K DLX',
    brand: 'Taylor Guitars',
    photo: ['./assets/img/1184735-1200x800.jpeg', './assets/img/1184740-1200x800.jpeg', './assets/img/227222_3-1200x800.jpeg', './assets/img/227222_2-1200x800.jpeg'],
    price: 2000,
    inStock: 1,
    rating: 4.32
  },
  {
    id: 17,
    category: 'Electric guitar',
    name: 'Acoustasonic player telecaster brushed black',
    brand: 'Fender',
    photo: ['./assets/img/232357_1-1200x800.jpeg', './assets/img/232357_2-1200x800.jpeg', './assets/img/232357_3-1200x800.jpeg', './assets/img/232357_4-1200x800.jpeg'],
    price: 1950,
    inStock: 6,
    rating: 4.88
  },
  {
    id: 18,
    category: 'Electric guitar',
    name: 'American acoustasonic telecaster black paisley ltd',
    brand: 'Fender',
    photo: ['./assets/img/232604_1-1200x800.jpeg', './assets/img/232604_2-1200x800.jpeg', './assets/img/232604_3-1200x800.jpeg', './assets/img/232604_5-1200x800.jpeg'],
    price: 2650,
    inStock: 4,
    rating: 4.72
  },
  {
    id: 19,
    category: 'Ukulele',
    name: 'UC-S1 SBB',
    brand: 'Carpathian',
    photo: ['./assets/img/229733_111-1200x800.jpeg', './assets/img/229733_112-1200x800.jpeg', './assets/img/229733_113-1200x800.jpeg', './assets/img/229733_114-1200x800.jpeg'],
    price: 689,
    inStock: 12,
    rating: 4.18
  },
  {
    id: 20,
    category: 'Ukulele',
    name: 'Venice soprano black WN',
    brand: 'Fender',
    photo: ['./assets/img/228177_01-1200x800.jpeg', './assets/img/228177_113-1200x800.jpeg', './assets/img/228177_112-1200x800.jpeg', './assets/img/228177_02-1200x800.jpeg'],
    price: 110,
    inStock: 23,
    rating: 4.45
  },
  {
    id: 21,
    category: 'Ukulele',
    name: 'UC-S1B Walnut',
    brand: 'Carpathian',
    photo: ['./assets/img/231263_111-1200x800.jpeg', './assets/img/231263_116-1200x800.jpeg', './assets/img/231263_112-1200x800.jpeg', './assets/img/231263_119-1200x800.jpeg'],
    price: 66,
    inStock: 19,
    rating: 4.67
  },
  {
    id: 22,
    category: 'MIDI keyboard',
    name: 'MPK mini MK3',
    brand: 'AKAI',
    photo: ['./assets/img/230527_01-1200x800.jpeg', './assets/img/230527_02-1200x800.jpeg', './assets/img/230527_03-1200x800.jpeg', './assets/img/230527_04-1200x800.jpeg'],
    price: 1260,
    inStock: 27,
    rating: 4.86
  },
  {
    id: 23,
    category: 'MIDI keyboard',
    name: 'MPK249',
    brand: 'AKAI',
    photo: ['./assets/img/219261_115-1200x800.jpeg', './assets/img/219261_113-1200x800.jpeg', './assets/img/219261_114-1200x800.jpeg', './assets/img/219261_119-1200x800.jpeg'],
    price: 482,
    inStock: 3,
    rating: 4.97
  },
  {
    id: 24,
    category: 'MIDI keyboard',
    name: 'Microkey Y2-37',
    brand: 'Korg',
    photo: ['./assets/img/222271_115-1200x800.jpeg', './assets/img/222271_114-1200x800.jpeg', './assets/img/222271_0111-1200x800.jpeg', './assets/img/222271_1112-1200x800.jpeg'],
    price: 131,
    inStock: 18,
    rating: 4.82
  },
  {
    id: 25,
    category: 'Synthesizer',
    name: 'Circuit Tracks',
    brand: 'Novation',
    photo: ['./assets/img/230952_2-1200x800.jpeg', './assets/img/230952_novation_circuit_tracks_02-1200x800.jpeg', './assets/img/230952_novation_circuit_tracks_03-1200x800.jpeg', './assets/img/230952_novation_circuit_tracks_04-1200x800.jpeg'],
    price: 499,
    inStock: 26,
    rating: 4.47
  },
  {
    id: 26,
    category: 'Synthesizer',
    name: 'Wavestate',
    brand: 'Korg',
    photo: ['./assets/img/229876_1-1200x800.jpeg', './assets/img/229876_126-1200x800.jpeg', './assets/img/229876_113-1200x800.jpeg', './assets/img/229876_112-1200x800.jpeg'],
    price: 828,
    inStock: 17,
    rating: 4.57
  },
  {
    id: 27,
    category: 'Synthesizer',
    name: 'Volca-nubass',
    brand: 'Korg',
    photo: ['./assets/img/228888_KORG VOLCA-NUBASS_01-1200x800.jpeg', './assets/img/228888_116-1200x800.jpeg', './assets/img/228888_113-1200x800.jpeg', './assets/img/228888_117-1200x800.jpeg'],
    price: 1599,
    inStock: 8,
    rating: 3.96
  },
  {
    id: 28,
    category: 'Drum kit',
    name: 'LSP32CS-TWS',
    brand: 'Tama',
    photo: ['./assets/img/229624_TAMA LSP32CS-TWS_1-1200x800.jpeg', './assets/img/227652_TAMA LHK38CS-SVH_01-1200x800.jpeg', './assets/img/231009_4-1200x800.jpeg', './assets/img/231009_3-1200x800.jpeg'],
    price: 1500,
    inStock: 4,
    rating: 4.65
  },
  {
    id: 29,
    category: 'Drum kit',
    name: 'SG50H6C W',
    brand: 'Tama',
    photo: ['./assets/img/1188160-1200x800.jpeg', './assets/img/1188175-1200x800.jpeg', './assets/img/1188180-1200x800.jpeg', './assets/img/1188170-1200x800.jpeg'],
    price: 730,
    inStock: 5,
    rating: 4.71
  },
  {
    id: 30,
    category: 'Drum kit',
    name: 'MBS42S-SKA',
    brand: 'Tama',
    photo: ['./assets/img/232719_tama_mbs42s-ska_1-1200x800.jpeg', './assets/img/232719_tama_mbs42s-ska_2-1200x800.jpeg', './assets/img/232719_tama_mbs42s-ska_3-1200x800.jpeg', './assets/img/232719_tama_mbs42s-ska_4-1200x800.jpeg'],
    price: 1360,
    inStock: 8,
    rating: 4.92
  }
];

export default bd;