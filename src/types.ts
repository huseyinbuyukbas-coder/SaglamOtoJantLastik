export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'lastik' | 'jant' | 'bakim' | 'diger';
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  date?: string;
  badge?: string;
}

export interface DiagnosticOption {
  id: string;
  symptom: string;
  solution: string;
  description: string;
  actionText: string;
  iconName: string;
  waMessage: string;
}

export interface BusinessInfo {
  name: string;
  category: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  address: string;
  neighborhood: string;
  district: string;
  city: string;
  fullAddress: string;
  googleRating: number;
  googleReviewCount: number;
  establishedYear: number;
  masters: {
    name: string;
    title: string;
    desc: string;
  }[];
  workingHours: string;
}
