import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));

export const buttonCNList = cn(
  'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300,focus:outline-hidden'
);

export const navLinks = cn('fixed w-full z-40 transition-all duration-300');

export const mobileNavLinks = cn(
  'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden'
);
