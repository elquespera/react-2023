import React from 'react';

export interface LocalStorageData {
  search?: string;
}

export interface PropertyData {
  id: number | string;
  title: string;
  address: string;
  price: number;
  rooms: string;
  availableFrom: number;
  purpose: 'sale' | 'rent';
  image?: string;
  agree?: boolean;
}

export type IconType = 'search' | 'home' | 'about' | 'add' | 'close';

export interface RouteDetails {
  to: string;
  title: string;
  testId?: string;
  page: typeof React.Component;
  icon?: IconType;
  invisible?: boolean;
}
