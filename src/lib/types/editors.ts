export interface Editor {
  fullName: string;
  affiliation: string;
  country: string;
}

export interface CountryGroup {
  name: string;
  quantity: number;
}

export interface VolumeEditor {
  id: number;
  prefix?: string;
  full_name: string;
  title: string;
  institution: string;
  country: string;
}
