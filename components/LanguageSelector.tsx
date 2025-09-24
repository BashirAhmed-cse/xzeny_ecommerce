'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { LANGUAGES } from '@/lib/locales';

interface LanguageSelectorProps {
  locale: string;
  onChange: (code: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ locale, onChange }) => {
  if (!LANGUAGES.length) {
    return <div>Language configuration unavailable</div>;
  }

  const currentLang = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label={`Select language, current: ${currentLang.name}`}
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">
          {currentLang.flag} {currentLang.name}
        </span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={locale === 'ar' ? 'start' : 'end'} className="w-56" role="listbox">
        {LANGUAGES.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => onChange(lang.code)}
            className="flex items-center space-x-2 cursor-pointer"
            role="option"
            aria-selected={lang.code === locale}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;