declare module 'next/font/google' {
  type NextFont = {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };

  type GoogleFontOptions = {
    variable?: string;
    subsets?: string[];
    weight?: string[] | number[];
    style?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
    declarations?: Array<{ prop: string; value: string }>;
  };

  export function Mona_Sans(options?: GoogleFontOptions): NextFont;
  export function Inter(options?: GoogleFontOptions): NextFont;
  export function Roboto(options?: GoogleFontOptions): NextFont;
  export function Open_Sans(options?: GoogleFontOptions): NextFont;
  
  // Export all other Google fonts
  export function Abel(options?: GoogleFontOptions): NextFont;
  export function Abhaya_Libre(options?: GoogleFontOptions): NextFont;
  // ... and many more
}
