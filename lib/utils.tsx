import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to conditionally join class names
 * Combines clsx for conditional classes with tailwind-merge to handle Tailwind conflicts
 * 
 * @param inputs - Class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * cn('px-4 py-2', 'bg-blue-500', isActive && 'bg-blue-700')
 * cn('text-sm', { 'font-bold': isBold, 'text-red-500': hasError })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}