import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertDate = (date: string) => {
  const [year, month, day] = date.split('-')

  return `${day}/${month}/${year}`
}

export const saveDateAtDataBase = (date: string) => {
  const [day, month, year] = date.split('/')

  return `${month}/${day}/${year}`
}

