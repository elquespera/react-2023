import { BASE_API_URL } from '../consts';
import { PropertyData } from '../types';
import fetch from 'cross-fetch';

export async function fetchAllProperties(query?: string): Promise<PropertyData[] | undefined> {
  let url = BASE_API_URL;
  if (query) url += `?q=${query}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: PropertyData[] = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchProperty(id: number | string): Promise<PropertyData | undefined> {
  const url = `${BASE_API_URL}/${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: PropertyData = await response.json();
      return data;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}
