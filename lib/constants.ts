// ============================================
// KENT PLUS — Constants
// ============================================

export const BRAND = {
  name: 'KENT PLUS',
  tagline: '95% Pure Water. Reliable Delivery.',
  secondaryTagline: 'Fresh 95% pure water delivered when you need it.',
  description: 'Kent Plus provides 95% purified drinking-water cans to customers on a daily basis.',
  phone: '+91 99340 05300',
  rawPhone: '9934005300',
  secondaryPhone: '',
  email: '', // Pending (will be updated later)
  address: 'Main Plant: Near Pakri River, Muzaffarpur, Bihar',
  plantLocation: 'Near Pakri River',
};

export const COLORS = {
  primary: '#16B8E8',
  waterBlue: '#0B8FC4',
  navy: '#071923',
  lightBlue: '#EAF8FD',
  ice: '#F6FCFF',
  white: '#FFFFFF',
  border: '#D8EDF5',
  muted: '#64748B',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

export const AREAS = [
  'Pakri',
  'Vastu Vihar Pakri',
  'Kodaria',
  'Bathnadeeh',
  'Madhuban',
  'Chamarua',
  'Marwan',
  'Kharauna',
  'Navodya Vidyalaya Kharauna',
  'Sumera',
  'Patahi',
  'Madapur',
  'Bathna Ram',
  'Bhagwanpur',
  'Yadav Nagar',
];

export interface AreaTimeline {
  area: string;
  hindiName: string;
  scheduleLabelEn: string;
  scheduleLabelHi: string;
  scheduleType: 'mon-wed-fri' | 'sun-tue-thu' | 'daily';
  defaultShiftEn: string;
  defaultShiftHi: string;
  defaultFrequencyEn: string;
  defaultFrequencyHi: string;
  leadTimeEn: string;
  leadTimeHi: string;
  hubNoteEn: string;
  hubNoteHi: string;
}

export const AREA_TIMELINES: Record<string, AreaTimeline> = {
  'Pakri': {
    area: 'Pakri',
    hindiName: 'पकड़ी',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'Scheduled morning route with Pakri Chowk Hub support',
    hubNoteHi: 'शेड्यूल सुबह की रूट एवं पकड़ी चौक हब सहायता'
  },
  'Vastu Vihar Pakri': {
    area: 'Vastu Vihar Pakri',
    hindiName: 'वास्तु विहार पकड़ी',
    scheduleLabelEn: 'Daily Express (Everyday)',
    scheduleLabelHi: 'रोज़ाना एक्सप्रेस (सभी 7 दिन)',
    scheduleType: 'daily',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Daily',
    defaultFrequencyHi: 'दैनिक (हर सुबह)',
    leadTimeEn: 'Under 30 mins',
    leadTimeHi: '30 मिनट के भीतर',
    hubNoteEn: 'Dedicated morning delivery van for Vastu Vihar residents',
    hubNoteHi: 'वास्तु विहार निवासियों के लिए समर्पित सुबह की वैन'
  },
  'Kodaria': {
    area: 'Kodaria',
    hindiName: 'कोदरिया',
    scheduleLabelEn: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Sun, Tue, Thu)',
    defaultFrequencyHi: 'एक दिन छोड़कर (रवि, मंगल, गुरु)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'Scheduled route run on alternate days',
    hubNoteHi: 'निर्धारित दिनों में सुबह की डिलीवरी'
  },
  'Bathnadeeh': {
    area: 'Bathnadeeh',
    hindiName: 'बथनाडीह',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 60 mins',
    leadTimeHi: '60 मिनट के भीतर',
    hubNoteEn: 'Scheduled morning run',
    hubNoteHi: 'निर्धारित सुबह की रन'
  },
  'Madhuban': {
    area: 'Madhuban',
    hindiName: 'मधुबन',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'High availability morning route',
    hubNoteHi: 'उच्च उपलब्धता सुबह की रूट'
  },
  'Chamarua': {
    area: 'Chamarua',
    hindiName: 'चमरुआ',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 60 mins',
    leadTimeHi: '60 मिनट के भीतर',
    hubNoteEn: 'Scheduled morning route',
    hubNoteHi: 'निर्धारित सुबह की रूट'
  },
  'Marwan': {
    area: 'Marwan',
    hindiName: 'मरवां',
    scheduleLabelEn: 'Sun • Tue • Thu (Hub Daily Backup)',
    scheduleLabelHi: 'रवि • मंगल • गुरु (हब से रोज़ाना)',
    scheduleType: 'sun-tue-thu',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Daily',
    defaultFrequencyHi: 'दैनिक (हर सुबह)',
    leadTimeEn: 'Under 30 mins',
    leadTimeHi: '30 मिनट के भीतर',
    hubNoteEn: 'Central Hub Dispatch within 30 minutes',
    hubNoteHi: 'सेंट्रल हब डिस्पैच 30 मिनट के भीतर'
  },
  'Kharauna': {
    area: 'Kharauna',
    hindiName: 'खरौना',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'Consistent morning route',
    hubNoteHi: 'सुबह की नियमित रूट'
  },
  'Navodya Vidyalaya Kharauna': {
    area: 'Navodya Vidyalaya Kharauna',
    hindiName: 'नवोदय विद्यालय खरौना',
    scheduleLabelEn: 'Sun • Tue • Thu (Campus Priority)',
    scheduleLabelHi: 'रवि • मंगल • गुरु (कैंपस प्राथमिकता)',
    scheduleType: 'sun-tue-thu',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Daily',
    defaultFrequencyHi: 'दैनिक (हर सुबह)',
    leadTimeEn: 'Under 30 mins',
    leadTimeHi: '30 मिनट के भीतर',
    hubNoteEn: 'Priority delivery for staff quarters and campus',
    hubNoteHi: 'स्टाफ क्वार्टर और कैंपस के लिए प्राथमिकता डिलीवरी'
  },
  'Sumera': {
    area: 'Sumera',
    hindiName: 'सुमेरा',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 60 mins',
    leadTimeHi: '60 मिनट के भीतर',
    hubNoteEn: 'Scheduled morning run',
    hubNoteHi: 'निर्धारित सुबह की रन'
  },
  'Patahi': {
    area: 'Patahi',
    hindiName: 'पताही',
    scheduleLabelEn: 'Sun • Tue • Thu',
    scheduleLabelHi: 'रवि • मंगल • गुरु',
    scheduleType: 'sun-tue-thu',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Sun, Tue, Thu)',
    defaultFrequencyHi: 'एक दिन छोड़कर (रवि, मंगल, गुरु)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'High availability airport link route',
    hubNoteHi: 'उच्च उपलब्धता एयरपोर्ट लिंक रूट'
  },
  'Madapur': {
    area: 'Madapur',
    hindiName: 'माड़ापुर',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 60 mins',
    leadTimeHi: '60 मिनट के भीतर',
    hubNoteEn: 'Morning van delivery',
    hubNoteHi: 'सुबह की वैन डिलीवरी'
  },
  'Bathna Ram': {
    area: 'Bathna Ram',
    hindiName: 'बथना राम',
    scheduleLabelEn: 'Mon • Wed • Fri',
    scheduleLabelHi: 'सोम • बुध • शुक्र',
    scheduleType: 'mon-wed-fri',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Alternate Days (Mon, Wed, Fri)',
    defaultFrequencyHi: 'एक दिन छोड़कर (सोम, बुध, शुक्र)',
    leadTimeEn: 'Under 60 mins',
    leadTimeHi: '60 मिनट के भीतर',
    hubNoteEn: 'Scheduled morning run',
    hubNoteHi: 'निर्धारित सुबह की रन'
  },
  'Bhagwanpur': {
    area: 'Bhagwanpur',
    hindiName: 'भगवानपुर',
    scheduleLabelEn: 'All 7 Days (Daily)',
    scheduleLabelHi: 'सभी 7 दिन (रोज़ाना)',
    scheduleType: 'daily',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Daily',
    defaultFrequencyHi: 'दैनिक (हर सुबह)',
    leadTimeEn: 'Under 30 mins',
    leadTimeHi: '30 मिनट के भीतर',
    hubNoteEn: 'Express daily deliveries 7 days a week',
    hubNoteHi: 'हफ़्ते के सभी सातों दिन एक्सप्रेस डिलीवरी'
  },
  'Yadav Nagar': {
    area: 'Yadav Nagar',
    hindiName: 'यादव नगर',
    scheduleLabelEn: 'All 7 Days (Daily)',
    scheduleLabelHi: 'सभी 7 दिन (रोज़ाना)',
    scheduleType: 'daily',
    defaultShiftEn: 'Morning (6:00 AM - 12:00 PM)',
    defaultShiftHi: 'सुबह (6:00 AM - 12:00 PM)',
    defaultFrequencyEn: 'Daily',
    defaultFrequencyHi: 'दैनिक (हर सुबह)',
    leadTimeEn: 'Under 45 mins',
    leadTimeHi: '45 मिनट के भीतर',
    hubNoteEn: 'Daily residential delivery morning route',
    hubNoteHi: 'दैनिक आवासीय डिलीवरी सुबह की रूट'
  },
};

export function getDefaultDeliveryDateForArea(areaName: string, refDate?: Date): string {
  const base = refDate ? new Date(refDate) : new Date();
  const timeline = AREA_TIMELINES[areaName] || AREA_TIMELINES['Bhagwanpur'];

  let allowedDays: number[] = [0, 1, 2, 3, 4, 5, 6];
  if (timeline.scheduleType === 'mon-wed-fri') {
    allowedDays = [1, 3, 5]; // Mon, Wed, Fri
  } else if (timeline.scheduleType === 'sun-tue-thu') {
    allowedDays = [0, 2, 4]; // Sun, Tue, Thu
  }

  // Look ahead starting tomorrow (offset 1 to 7 days)
  for (let offset = 1; offset <= 7; offset++) {
    const candidate = new Date(base);
    candidate.setDate(base.getDate() + offset);
    if (allowedDays.includes(candidate.getDay())) {
      const y = candidate.getFullYear();
      const m = String(candidate.getMonth() + 1).padStart(2, '0');
      const d = String(candidate.getDate()).padStart(2, '0');
      return `${y}-${m}-${d}`;
    }
  }

  const tomorrow = new Date(base);
  tomorrow.setDate(base.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}

export const CAN_SIZES = ['20L', '10L', '5L'] as const;

export const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'religious', label: 'Religious Function' },
  { value: 'party', label: 'Party' },
  { value: 'other', label: 'Other' },
];

export const ISSUE_TYPES = [
  { value: 'missed-delivery', label: 'Missed Delivery' },
  { value: 'wrong-quantity', label: 'Wrong Quantity' },
  { value: 'payment-issue', label: 'Payment Issue' },
  { value: 'damaged-can', label: 'Damaged Can' },
  { value: 'supplier-issue', label: 'Supplier Issue' },
  { value: 'other', label: 'Other' },
];

export const DELIVERY_TIMES = [
  '6:00–8:00 AM',
  '8:00–10:00 AM',
  '10:00–12:00 PM',
  '12:00–2:00 PM',
  '2:00–4:00 PM',
  '4:00–6:00 PM',
];

export const DEMO_CREDENTIALS = {
  customer: { email: 'customer@kentplus.demo', password: 'demo123', name: 'Rahul Sharma' },
  supplier: { email: 'supplier@kentplus.demo', password: 'demo123', name: 'Imran Khan' },
  admin: { email: 'admin@kentplus.demo', password: 'demo123', name: 'Priya Patel' },
};

export const DEMO_OTP = '1234';

export const WATER_RATE = 50; // ₹50 per 20L can
