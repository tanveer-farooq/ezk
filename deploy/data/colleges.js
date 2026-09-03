// Education Zone Kashmir — MBBS in Bangladesh, session 2026–27.
// Source: BANGLADESH FEE 2026-2027 EDUCATION ZONE PARRAY PORA SRINAGAR.xlsx (55 colleges).
// Fees in USD for the full MBBS course as recorded in the sheet. `first` = first installment.
// `firstNote` = the sheet marked this installment with * (confirm at counselling).
// `hostel`: included | excluded | paid (hostelFee per month). `campus`: in | girls-in | close.
// `km` = approximate road distance from Dhaka (sheet value where given). `est` / `web` are admin-filled placeholders.

export const SITE = {
  name: 'Education Zone Kashmir',
  tagline: 'Authorized MBBS admission consultants for Bangladesh',
  session: '2026–27',
  phone: '+91 95601 02100',
  phoneHref: 'tel:+919560102100',
  whatsapp: 'https://wa.me/919560102100?text=Hi%20Education%20Zone%20Kashmir%2C%20I%20want%20to%20know%20about%20MBBS%20in%20Bangladesh',
  email: 'info@educationzonekashmir.com',
  address: 'Parray Pora, Srinagar, Jammu & Kashmir',
  hours: 'Mon–Sat · 10:00–18:00 IST',
  usdToInr: 88,
};

export const UNIVERSITIES = {
  dhaka: { label: 'University of Dhaka', short: 'Dhaka' },
  chittagong: { label: 'University of Chittagong', short: 'Chittagong' },
  rajshahi: { label: 'University of Rajshahi', short: 'Rajshahi' },
  sylhet: { label: 'Sylhet Medical University', short: 'Sylhet' },
  shmu: { label: 'SHMU, Khulna', short: 'SHMU Khulna' },
  bup: { label: 'Bangladesh University of Professionals', short: 'BUP' },
};

const C = (id, name, city, region, university, total, first, hostel, campus, km, extra = {}) => ({
  id, name, city, region, university, total, first, hostel, campus, km,
  firstNote: false, hostelFee: 0, hostelNote: '', girlsOnly: false, est: null, web: null, ...extra,
});

export const COLLEGES = [
  C('eastern-medical-college', 'Eastern Medical College', 'Cumilla', 'Cumilla', 'chittagong', 43000, 17000, 'included', 'in', 100),
  C('east-west-medical-college', 'East West Medical College', 'Dhaka', 'Dhaka', 'dhaka', 47000, 18000, 'included', 'in', 0),
  C('dhaka-national-medical-college', 'Dhaka National Medical College', 'Dhaka', 'Dhaka', 'dhaka', 48000, 20000, 'paid', 'girls-in', 0, { hostelFee: 100 }),
  C('bangladesh-medical-college', 'Bangladesh Medical College', 'Dhaka', 'Dhaka', 'dhaka', 49000, 25000, 'paid', 'close', 0, { hostelFee: 160 }),
  C('jahurul-islam-medical-college', 'Jahurul Islam Medical College', 'Bajitpur, Kishoreganj', 'Kishoreganj', 'dhaka', 45000, 20200, 'included', 'in', 110),
  C('tairunnessa-medical-college', 'Tairunnessa Memorial Medical College', 'Gazipur', 'Dhaka', 'dhaka', 42000, 12000, 'included', 'girls-in', 30),
  C('international-medical-college', 'International Medical College', 'Tongi, Gazipur', 'Dhaka', 'dhaka', 44000, 20000, 'included', 'in', 25),
  C('monno-medical-college', 'Monno Medical College', 'Manikganj', 'Manikganj', 'dhaka', 45000, 20000, 'included', 'in', 100),
  C('us-bangla-medical-college', 'US-Bangla Medical College', 'Narayanganj', 'Dhaka', 'dhaka', 40000, 15000, 'included', 'in', 25),
  C('popular-medical-college', 'Popular Medical College', 'Dhaka', 'Dhaka', 'dhaka', 43000, 20000, 'excluded', 'in', 0),
  C('enam-medical-college', 'Enam Medical College', 'Savar, Dhaka', 'Dhaka', 'dhaka', 45000, 20000, 'included', 'in', 25),
  C('shaheed-monsur-ali-medical-college', 'Shaheed Monsur Ali Medical College', 'Dhaka', 'Dhaka', 'dhaka', 43000, 19000, 'included', 'close', 0, { firstNote: true }),
  C('dr-sirajul-islam-medical-college', 'Dr. Sirajul Islam Medical College', 'Dhaka', 'Dhaka', 'dhaka', 44000, 23000, 'included', 'close', 0),
  C('tmss-medical-college', 'TMSS Medical College', 'Bogura', 'Bogura', 'rajshahi', 44000, 18000, 'included', 'in', 200, { firstNote: true, hostelNote: 'Food included' }),
  C('community-based-medical-college', 'Community Based Medical College', 'Mymensingh', 'Mymensingh', 'dhaka', 41000, 13500, 'included', 'in', 90),
  C('holy-family-red-crescent-medical-college', 'Holy Family Red Crescent Medical College', 'Dhaka', 'Dhaka', 'dhaka', 48250, 16250, 'excluded', 'in', 0),
  C('khwaja-yunus-ali-medical-college', 'Khwaja Yunus Ali Medical College', 'Enayetpur, Sirajganj', 'Sirajganj', 'rajshahi', 43100, 15000, 'included', 'in', 157, { firstNote: true }),
  C('ibn-sina-medical-college', 'Ibn Sina Medical College', 'Dhaka', 'Dhaka', 'dhaka', 40000, 26000, 'included', 'in', 0, { firstNote: true }),
  C('anwer-khan-modern-medical-college', 'Anwer Khan Modern Medical College', 'Dhaka', 'Dhaka', 'dhaka', 45000, 20000, 'excluded', 'in', 0),
  C('z-h-sikder-womens-medical-college', "Z. H. Sikder Women's Medical College", 'Dhaka', 'Dhaka', 'dhaka', 42000, 20000, 'included', 'in', 0, { girlsOnly: true }),
  C('uttara-womens-medical-college', "Uttara Women's Medical College", 'Dhaka', 'Dhaka', 'dhaka', 47000, 15000, 'paid', 'in', 0, { hostelFee: 130, girlsOnly: true }),
  C('ad-din-womens-medical-college', "Ad-din Women's Medical College", 'Dhaka', 'Dhaka', 'dhaka', 43500, 23500, 'included', 'close', 0, { girlsOnly: true }),
  C('kumudini-womens-medical-college', "Kumudini Women's Medical College", 'Mirzapur, Tangail', 'Tangail', 'dhaka', 45300, 15000, 'included', 'in', 70, { girlsOnly: true }),
  C('ad-din-sakina-womens-medical-college', "Ad-din Sakina Women's Medical College", 'Jashore', 'Jashore', 'rajshahi', 33500, 13500, 'excluded', 'in', 70, { girlsOnly: true }),
  C('sylhet-womens-medical-college', "Sylhet Women's Medical College", 'Sylhet', 'Sylhet', 'sylhet', 42000, 15000, 'included', 'in', 240, { girlsOnly: true }),
  C('prime-medical-college', 'Prime Medical College', 'Rangpur', 'Rangpur', 'rajshahi', 42500, 14500, 'included', 'in', 300),
  C('barind-medical-college', 'Barind Medical College', 'Rajshahi', 'Rajshahi', 'rajshahi', 38000, 11000, 'included', 'in', 246, { firstNote: true }),
  C('delta-medical-college', 'Delta Medical College', 'Dhaka', 'Dhaka', 'dhaka', 42000, 15000, 'included', 'in', 0),
  C('mainamoti-medical-college', 'Mainamoti Medical College', 'Cumilla', 'Cumilla', 'chittagong', 41000, 15000, 'included', 'in', 90),
  C('southern-medical-college', 'Southern Medical College', 'Chattogram', 'Chattogram', 'chittagong', 41000, 20000, 'included', 'in', 250, { firstNote: true }),
  C('dhaka-central-international-medical-college', 'Dhaka Central International Medical College', 'Dhaka', 'Dhaka', 'dhaka', 43200, 16600, 'included', 'close', 0, { firstNote: true }),
  C('dhaka-community-medical-college', 'Dhaka Community Medical College', 'Dhaka', 'Dhaka', 'dhaka', 38000, 17000, 'included', 'in', 0, { firstNote: true }),
  C('brahmanbaria-medical-college', 'Brahmanbaria Medical College', 'Brahmanbaria', 'Brahmanbaria', 'chittagong', 38000, 14000, 'included', 'in', 105),
  C('bashundhara-ad-din-medical-college', 'Bashundhara Ad-din Medical College', 'Keraniganj, Dhaka', 'Dhaka', 'dhaka', 36000, 20000, 'paid', 'in', 15, { hostelFee: 100, hostelNote: 'Food included' }),
  C('bikrampur-bhuiyan-medical-college', 'Bikrampur Bhuiyan Medical College', 'Munshiganj', 'Dhaka', 'dhaka', 30000, 15000, 'excluded', 'in', 40),
  C('universal-medical-college', 'Universal Medical College', 'Dhaka', 'Dhaka', 'dhaka', 42000, 20000, 'included', 'in', 0),
  C('gonoshasthaya-samaj-vittik-medical-college', 'Gonoshasthaya Samaj Vittik Medical College', 'Savar, Dhaka', 'Dhaka', 'dhaka', 40000, 15000, 'included', 'in', 25),
  C('shahabuddin-medical-college', 'Shahabuddin Medical College', 'Dhaka', 'Dhaka', 'dhaka', 40000, 25000, 'paid', 'in', 0, { firstNote: true, hostelFee: 120 }),
  C('central-medical-college', 'Central Medical College', 'Cumilla', 'Cumilla', 'chittagong', 41000, 15000, 'included', 'in', 100),
  C('monowara-sikder-medical-college', 'Monowara Sikder Medical College', 'Madhupur, Tangail', 'Tangail', 'dhaka', 37000, 13000, 'included', 'in', 160, { firstNote: true }),
  C('diabetic-association-medical-college', 'Diabetic Association Medical College', 'Faridpur', 'Faridpur', 'dhaka', 42000, 15000, 'included', 'in', 130),
  C('president-abdul-hamid-medical-college', 'President Abdul Hamid Medical College', 'Kishoreganj', 'Kishoreganj', 'dhaka', 35000, 12000, 'included', 'in', 120),
  C('jalalabad-ragib-rabeya-medical-college', 'Jalalabad Ragib-Rabeya Medical College', 'Sylhet', 'Sylhet', 'sylhet', 43959, 16000, 'included', 'in', 240, { firstNote: true }),
  C('north-east-medical-college', 'North East Medical College', 'Sylhet', 'Sylhet', 'sylhet', 44000, 17000, 'included', 'in', 240, { firstNote: true }),
  C('khulna-city-medical-college', 'Khulna City Medical College', 'Khulna', 'Khulna', 'shmu', 40000, 12000, 'paid', 'in', 270, { firstNote: true, hostelFee: 75 }),
  C('parkview-medical-college', 'Parkview Medical College', 'Sylhet', 'Sylhet', 'sylhet', 35000, 12000, 'excluded', 'in', 240, { firstNote: true }),
  C('city-medical-college', 'City Medical College', 'Gazipur', 'Dhaka', 'dhaka', 40000, 17000, 'included', 'in', 35, { hostelNote: 'Conditions apply' }),
  C('bgc-trust-medical-college', 'BGC Trust Medical College', 'Chattogram', 'Chattogram', 'chittagong', 36000, 10500, 'included', 'in', 250, { firstNote: true }),
  C('ad-din-akij-medical-college', 'Ad-din Akij Medical College', 'Khulna', 'Khulna', 'shmu', 33500, 13500, 'included', 'in', 270),
  C('marks-medical-college', 'Marks Medical College', 'Dhaka', 'Dhaka', 'dhaka', 39000, 15000, 'excluded', 'in', 0, { firstNote: true }),
  C('rangpur-community-medical-college', 'Rangpur Community Medical College', 'Rangpur', 'Rangpur', 'rajshahi', 42000, 16500, 'included', 'in', 300, { firstNote: true }),
  C('ustc-iahs', 'USTC — Institute of Applied Health Sciences (IAHS)', 'Chattogram', 'Chattogram', 'chittagong', 42000, 12000, 'included', 'in', 250),
  C('ashiyan-medical-college', 'Ashiyan Medical College', 'Dhaka', 'Dhaka', 'dhaka', 45000, 16000, 'included', 'in', 0),
  C('army-medical-college-bogura', 'Army Medical College, Bogura', 'Bogura', 'Bogura', 'bup', 45000, 20500, 'included', 'in', 200),
  C('army-medical-college-cumilla', 'Army Medical College, Cumilla', 'Cumilla', 'Cumilla', 'bup', 45000, 20500, 'included', 'in', 100),
];

export const REGIONS = [...new Set(COLLEGES.map(c => c.region))].sort();

export const RECOGNITION = [
  { k: 'BM&DC', v: 'Approved by Bangladesh Medical & Dental Council' },
  { k: 'WDOMS', v: 'Listed in the World Directory of Medical Schools (WHO / WFME)' },
  { k: 'NMC pathway', v: 'Graduates sit FMGE / NExT under NMC FMGL 2021 norms — check the current NMC advisory before applying' },
];

export const usd = n => '$' + Math.round(n).toLocaleString('en-US');
export const inrLakh = (usdAmt, rate) => {
  const l = (usdAmt * rate) / 100000;
  return '₹' + (l >= 10 ? l.toFixed(1) : l.toFixed(2)) + ' L';
};
export const universityLabel = k => (UNIVERSITIES[k] || {}).label || k;
export const universityShort = k => (UNIVERSITIES[k] || {}).short || k;
export const hostelText = c => c.hostel === 'included' ? 'Hostel included' + (c.hostelNote ? ' · ' + c.hostelNote : '')
  : c.hostel === 'paid' ? `Hostel $${c.hostelFee}/month` + (c.hostelNote ? ' · ' + c.hostelNote : '')
  : 'Hostel not included';
export const campusText = c => c.campus === 'in' ? 'In-campus hostel' : c.campus === 'girls-in' ? 'Girls hostel in campus' : 'Hostel close to campus';
export const distanceText = c => c.km === 0 ? 'Dhaka city' : c.km <= 50 ? `Greater Dhaka · ~${c.km} km` : `~${c.km} km from Dhaka`;
export const distanceBand = c => c.km <= 50 ? 'dhaka' : c.km <= 150 ? 'mid' : 'far';
export const tags = c => {
  const t = [];
  if (c.total <= 38000) t.push('Budget-friendly');
  if (c.first <= 13500) t.push('Low first installment');
  if (c.girlsOnly) t.push('Girls only');
  if (c.hostel === 'included') t.push('Hostel included');
  if (c.km === 0) t.push('Dhaka city');
  return t;
};
export const byId = id => COLLEGES.find(c => c.id === id);
export const seoDescription = (c, rate) => `${c.name} is a private medical college in ${c.city}, Bangladesh (${universityLabel(c.university)}). MBBS fee for Indian students ${SITE.session}: ${usd(c.total)} total (≈ ${inrLakh(c.total, rate)}), first installment ${usd(c.first)}. ${hostelText(c)}.`;
export const stats = () => {
  const fees = COLLEGES.map(c => c.total), firsts = COLLEGES.map(c => c.first);
  return { count: COLLEGES.length, minFee: Math.min(...fees), maxFee: Math.max(...fees), minFirst: Math.min(...firsts), girls: COLLEGES.filter(c => c.girlsOnly).length, hostelIncluded: COLLEGES.filter(c => c.hostel === 'included').length };
};
