import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import {
  ArrowRight, ShieldCheck, CheckCircle2, Layers, Target, Globe, Bot, ChevronRight, Zap as ZapIcon, MessageCircle, AlertCircle, Clock, Link as LinkIcon, DollarSign, Calendar, Check, CalendarDays, Bell, User, Mail, Phone, Building2, FileText, Search, ChevronDown
} from 'lucide-react';

import WhatsAppSimulator from '../components/WhatsAppSimulator';
import PublicNavbar from '../components/PublicNavbar';

const BrandName = () => (
  <span className="inline-flex items-center tracking-tight mr-[0.25em]">
    <span className="text-inherit lowercase">fayma</span>
    <span className="ml-[2px] brand-co lowercase">co</span>
  </span>
);

const COUNTRIES = [
  { name: 'Afghanistan', flag: '🇦🇫', dial_code: '+93' },
  { name: 'Albania', flag: '🇦🇱', dial_code: '+355' },
  { name: 'Algeria', flag: '🇩🇿', dial_code: '+213' },
  { name: 'Andorra', flag: '🇦🇩', dial_code: '+376' },
  { name: 'Angola', flag: '🇦🇴', dial_code: '+244' },
  { name: 'Antigua and Barbuda', flag: '🇦🇬', dial_code: '+1-268' },
  { name: 'Argentina', flag: '🇦🇷', dial_code: '+54' },
  { name: 'Armenia', flag: '🇦🇲', dial_code: '+374' },
  { name: 'Australia', flag: '🇦🇺', dial_code: '+61' },
  { name: 'Austria', flag: '🇦🇹', dial_code: '+43' },
  { name: 'Azerbaijan', flag: '🇦🇿', dial_code: '+994' },
  { name: 'Bahamas', flag: '🇧🇸', dial_code: '+1-242' },
  { name: 'Bahrain', flag: '🇧🇭', dial_code: '+973' },
  { name: 'Bangladesh', flag: '🇧🇩', dial_code: '+880' },
  { name: 'Barbados', flag: '🇧🇧', dial_code: '+1-246' },
  { name: 'Belarus', flag: '🇧🇾', dial_code: '+375' },
  { name: 'Belgium', flag: '🇧🇪', dial_code: '+32' },
  { name: 'Belize', flag: '🇧🇿', dial_code: '+501' },
  { name: 'Benin', flag: '🇧🇯', dial_code: '+229' },
  { name: 'Bhutan', flag: '🇧🇹', dial_code: '+975' },
  { name: 'Bolivia', flag: '🇧🇴', dial_code: '+591' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦', dial_code: '+387' },
  { name: 'Botswana', flag: '🇧🇼', dial_code: '+267' },
  { name: 'Brazil', flag: '🇧🇷', dial_code: '+55' },
  { name: 'Brunei', flag: '🇧🇳', dial_code: '+673' },
  { name: 'Bulgaria', flag: '🇧🇬', dial_code: '+359' },
  { name: 'Burkina Faso', flag: '🇧🇫', dial_code: '+226' },
  { name: 'Burundi', flag: '🇧🇮', dial_code: '+257' },
  { name: 'Cabo Verde', flag: '🇨🇻', dial_code: '+238' },
  { name: 'Cambodia', flag: '🇰🇭', dial_code: '+855' },
  { name: 'Cameroon', flag: '🇨🇲', dial_code: '+237' },
  { name: 'Canada', flag: '🇨🇦', dial_code: '+1' },
  { name: 'Central African Republic', flag: '🇨🇫', dial_code: '+236' },
  { name: 'Chad', flag: '🇹🇩', dial_code: '+235' },
  { name: 'Chile', flag: '🇨🇱', dial_code: '+56' },
  { name: 'China', flag: '🇨🇳', dial_code: '+86' },
  { name: 'Colombia', flag: '🇨🇴', dial_code: '+57' },
  { name: 'Comoros', flag: '🇰🇲', dial_code: '+269' },
  { name: 'Congo (DRC)', flag: '🇨🇩', dial_code: '+243' },
  { name: 'Congo (Republic)', flag: '🇨🇬', dial_code: '+242' },
  { name: 'Costa Rica', flag: '🇨🇷', dial_code: '+506' },
  { name: 'Côte d\'Ivoire', flag: '🇨🇮', dial_code: '+225' },
  { name: 'Croatia', flag: '🇭🇷', dial_code: '+385' },
  { name: 'Cuba', flag: '🇨🇺', dial_code: '+53' },
  { name: 'Cyprus', flag: '🇨🇾', dial_code: '+357' },
  { name: 'Czech Republic', flag: '🇨🇿', dial_code: '+420' },
  { name: 'Denmark', flag: '🇩🇰', dial_code: '+45' },
  { name: 'Djibouti', flag: '🇩🇯', dial_code: '+253' },
  { name: 'Dominica', flag: '🇩🇲', dial_code: '+1-767' },
  { name: 'Dominican Republic', flag: '🇩🇴', dial_code: '+1-809, +1-829, +1-849' },
  { name: 'Ecuador', flag: '🇪🇨', dial_code: '+593' },
  { name: 'Egypt', flag: '🇪🇬', dial_code: '+20' },
  { name: 'El Salvador', flag: '🇸🇻', dial_code: '+503' },
  { name: 'Equatorial Guinea', flag: '🇬🇶', dial_code: '+240' },
  { name: 'Eritrea', flag: '🇪🇷', dial_code: '+291' },
  { name: 'Estonia', flag: '🇪🇪', dial_code: '+372' },
  { name: 'Eswatini', flag: '🇸🇿', dial_code: '+268' },
  { name: 'Ethiopia', flag: '🇪🇹', dial_code: '+251' },
  { name: 'Fiji', flag: '🇫🇯', dial_code: '+679' },
  { name: 'Finland', flag: '🇫🇮', dial_code: '+358' },
  { name: 'France', flag: '🇫🇷', dial_code: '+33' },
  { name: 'Gabon', flag: '🇬🇦', dial_code: '+241' },
  { name: 'Gambia', flag: '🇬🇲', dial_code: '+220' },
  { name: 'Georgia', flag: '🇬🇪', dial_code: '+995' },
  { name: 'Germany', flag: '🇩🇪', dial_code: '+49' },
  { name: 'Ghana', flag: '🇬🇭', dial_code: '+233' },
  { name: 'Greece', flag: '🇬🇷', dial_code: '+30' },
  { name: 'Grenada', flag: '🇬🇩', dial_code: '+1-473' },
  { name: 'Guatemala', flag: '🇬🇹', dial_code: '+502' },
  { name: 'Guinea', flag: '🇬🇳', dial_code: '+224' },
  { name: 'Guinea-Bissau', flag: '🇬🇼', dial_code: '+245' },
  { name: 'Guyana', flag: '🇬🇾', dial_code: '+592' },
  { name: 'Haiti', flag: '🇭🇹', dial_code: '+509' },
  { name: 'Honduras', flag: '🇭🇳', dial_code: '+504' },
  { name: 'Hungary', flag: '🇭🇺', dial_code: '+36' },
  { name: 'Iceland', flag: '🇮🇸', dial_code: '+354' },
  { name: 'India', flag: '🇮🇳', dial_code: '+91' },
  { name: 'Indonesia', flag: '🇮🇩', dial_code: '+62' },
  { name: 'Iran', flag: '🇮🇷', dial_code: '+98' },
  { name: 'Iraq', flag: '🇮🇶', dial_code: '+964' },
  { name: 'Ireland', flag: '🇮🇪', dial_code: '+353' },
  { name: 'Israel', flag: '🇮🇱', dial_code: '+972' },
  { name: 'Italy', flag: '🇮🇹', dial_code: '+39' },
  { name: 'Jamaica', flag: '🇯🇲', dial_code: '+1-876' },
  { name: 'Japan', flag: '🇯🇵', dial_code: '+81' },
  { name: 'Jordan', flag: '🇯🇴', dial_code: '+962' },
  { name: 'Kazakhstan', flag: '🇰🇿', dial_code: '+7' },
  { name: 'Kenya', flag: '🇰🇪', dial_code: '+254' },
  { name: 'Kiribati', flag: '🇰🇮', dial_code: '+686' },
  { name: 'Kuwait', flag: '🇰🇼', dial_code: '+965' },
  { name: 'Kyrgyzstan', flag: '🇰🇬', dial_code: '+996' },
  { name: 'Laos', flag: '🇱🇦', dial_code: '+856' },
  { name: 'Latvia', flag: '🇱🇻', dial_code: '+371' },
  { name: 'Lebanon', flag: '🇱🇧', dial_code: '+961' },
  { name: 'Lesotho', flag: '🇱🇸', dial_code: '+266' },
  { name: 'Liberia', flag: '🇱🇷', dial_code: '+231' },
  { name: 'Libya', flag: '🇱🇾', dial_code: '+218' },
  { name: 'Liechtenstein', flag: '🇱🇮', dial_code: '+423' },
  { name: 'Lithuania', flag: '🇱🇹', dial_code: '+370' },
  { name: 'Luxembourg', flag: '🇱🇺', dial_code: '+352' },
  { name: 'Madagascar', flag: '🇲🇬', dial_code: '+261' },
  { name: 'Malawi', flag: '🇲🇼', dial_code: '+265' },
  { name: 'Malaysia', flag: '🇲🇾', dial_code: '+60' },
  { name: 'Maldives', flag: '🇲🇻', dial_code: '+960' },
  { name: 'Mali', flag: '🇲🇱', dial_code: '+223' },
  { name: 'Malta', flag: '🇲🇹', dial_code: '+356' },
  { name: 'Marshall Islands', flag: '🇲🇭', dial_code: '+692' },
  { name: 'Mauritania', flag: '🇲🇷', dial_code: '+222' },
  { name: 'Mauritius', flag: '🇲🇺', dial_code: '+230' },
  { name: 'Mexico', flag: '🇲🇽', dial_code: '+52' },
  { name: 'Micronesia', flag: '🇫🇲', dial_code: '+691' },
  { name: 'Moldova', flag: '🇲🇩', dial_code: '+373' },
  { name: 'Monaco', flag: '🇲🇨', dial_code: '+377' },
  { name: 'Mongolia', flag: '🇲🇳', dial_code: '+976' },
  { name: 'Montenegro', flag: '🇲🇪', dial_code: '+382' },
  { name: 'Morocco', flag: '🇲🇦', dial_code: '+212' },
  { name: 'Mozambique', flag: '🇲🇿', dial_code: '+258' },
  { name: 'Myanmar', flag: '🇲🇲', dial_code: '+95' },
  { name: 'Namibia', flag: '🇳🇦', dial_code: '+264' },
  { name: 'Nauru', flag: '🇳🇷', dial_code: '+674' },
  { name: 'Nepal', flag: '🇳🇵', dial_code: '+977' },
  { name: 'Netherlands', flag: '🇳🇱', dial_code: '+31' },
  { name: 'New Zealand', flag: '🇳🇿', dial_code: '+64' },
  { name: 'Nicaragua', flag: '🇳🇮', dial_code: '+505' },
  { name: 'Niger', flag: '🇳🇪', dial_code: '+227' },
  { name: 'Nigeria', flag: '🇳🇬', dial_code: '+234' },
  { name: 'North Korea', flag: '🇰🇵', dial_code: '+850' },
  { name: 'North Macedonia', flag: '🇲🇰', dial_code: '+389' },
  { name: 'Norway', flag: '🇳🇴', dial_code: '+47' },
  { name: 'Oman', flag: '🇴🇲', dial_code: '+968' },
  { name: 'Pakistan', flag: '🇵🇰', dial_code: '+92' },
  { name: 'Palau', flag: '🇵🇼', dial_code: '+680' },
  { name: 'Palestine', flag: '🇵🇸', dial_code: '+970' },
  { name: 'Panama', flag: '🇵🇦', dial_code: '+507' },
  { name: 'Papua New Guinea', flag: '🇵🇬', dial_code: '+675' },
  { name: 'Paraguay', flag: '🇵🇾', dial_code: '+595' },
  { name: 'Peru', flag: '🇵🇪', dial_code: '+51' },
  { name: 'Philippines', flag: '🇵🇭', dial_code: '+63' },
  { name: 'Poland', flag: '🇵🇱', dial_code: '+48' },
  { name: 'Portugal', flag: '🇵🇹', dial_code: '+351' },
  { name: 'Qatar', flag: '🇶🇦', dial_code: '+974' },
  { name: 'Romania', flag: '🇷🇴', dial_code: '+40' },
  { name: 'Russia', flag: '🇷🇺', dial_code: '+7' },
  { name: 'Rwanda', flag: '🇷🇼', dial_code: '+250' },
  { name: 'Saint Kitts and Nevis', flag: '🇰🇳', dial_code: '+1-869' },
  { name: 'Saint Lucia', flag: '🇱🇨', dial_code: '+1-758' },
  { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', dial_code: '+1-784' },
  { name: 'Samoa', flag: '🇼🇸', dial_code: '+685' },
  { name: 'San Marino', flag: '🇸🇲', dial_code: '+378' },
  { name: 'Sao Tome and Principe', flag: '🇸🇹', dial_code: '+239' },
  { name: 'Saudi Arabia', flag: '🇸🇦', dial_code: '+966' },
  { name: 'Senegal', flag: '🇸🇳', dial_code: '+221' },
  { name: 'Serbia', flag: '🇷🇸', dial_code: '+381' },
  { name: 'Seychelles', flag: '🇸🇨', dial_code: '+248' },
  { name: 'Sierra Leone', flag: '🇸🇱', dial_code: '+232' },
  { name: 'Singapore', flag: '🇸🇬', dial_code: '+65' },
  { name: 'Slovakia', flag: '🇸🇰', dial_code: '+421' },
  { name: 'Slovenia', flag: '🇸🇮', dial_code: '+386' },
  { name: 'Solomon Islands', flag: '🇸🇧', dial_code: '+677' },
  { name: 'Somalia', flag: '🇸🇴', dial_code: '+252' },
  { name: 'South Africa', flag: '🇿🇦', dial_code: '+27' },
  { name: 'South Korea', flag: '🇰🇷', dial_code: '+82' },
  { name: 'South Sudan', flag: '🇸🇸', dial_code: '+211' },
  { name: 'Spain', flag: '🇪🇸', dial_code: '+34' },
  { name: 'Sri Lanka', flag: '🇱🇰', dial_code: '+94' },
  { name: 'Sudan', flag: '🇸🇩', dial_code: '+249' },
  { name: 'Suriname', flag: '🇸🇷', dial_code: '+597' },
  { name: 'Sweden', flag: '🇸🇪', dial_code: '+46' },
  { name: 'Switzerland', flag: '🇨🇭', dial_code: '+41' },
  { name: 'Syria', flag: '🇸🇾', dial_code: '+963' },
  { name: 'Taiwan', flag: '🇹🇼', dial_code: '+886' },
  { name: 'Tajikistan', flag: '🇹🇯', dial_code: '+992' },
  { name: 'Tanzania', flag: '🇹🇿', dial_code: '+255' },
  { name: 'Thailand', flag: '🇹🇭', dial_code: '+66' },
  { name: 'Timor-Leste', flag: '🇹🇱', dial_code: '+670' },
  { name: 'Togo', flag: '🇹🇬', dial_code: '+228' },
  { name: 'Tonga', flag: '🇹🇴', dial_code: '+676' },
  { name: 'Trinidad and Tobago', flag: '🇹🇹', dial_code: '+1-868' },
  { name: 'Tunisia', flag: '🇹🇳', dial_code: '+216' },
  { name: 'Turkey', flag: '🇹🇷', dial_code: '+90' },
  { name: 'Turkmenistan', flag: '🇹🇲', dial_code: '+993' },
  { name: 'Tuvalu', flag: '🇹🇻', dial_code: '+688' },
  { name: 'Uganda', flag: '🇺🇬', dial_code: '+256' },
  { name: 'Ukraine', flag: '🇺🇦', dial_code: '+380' },
  { name: 'United Arab Emirates', flag: '🇦🇪', dial_code: '+971' },
  { name: 'United Kingdom', flag: '🇬🇧', dial_code: '+44' },
  { name: 'United States', flag: '🇺🇸', dial_code: '+1' },
  { name: 'Uruguay', flag: '🇺🇾', dial_code: '+598' },
  { name: 'Uzbekistan', flag: '🇺🇿', dial_code: '+998' },
  { name: 'Vanuatu', flag: '🇻🇺', dial_code: '+678' },
  { name: 'Vatican City', flag: '🇻🇦', dial_code: '+379' },
  { name: 'Venezuela', flag: '🇻🇪', dial_code: '+58' },
  { name: 'Vietnam', flag: '🇻🇳', dial_code: '+84' },
  { name: 'Yemen', flag: '🇾🇪', dial_code: '+967' },
  { name: 'Zambia', flag: '🇿🇲', dial_code: '+260' },
  { name: 'Zimbabwe', flag: '🇿🇼', dial_code: '+263' },
];

interface SearchableSelectOption {
  [key: string]: string;
}

interface SearchableSelectProps {
  options: SearchableSelectOption[];
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  displayKey: string;
  valueKey: string;
  searchKeys: string[];
  iconKey?: string;
  name?: string; // Added for form handling
  className?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  displayKey,
  valueKey,
  searchKeys,
  iconKey,
  name,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const selectedOption = options.find(option => option[valueKey] === value);
  const displayedValue = selectedOption ? selectedOption[displayKey] : placeholder;
  const displayedIcon = selectedOption && iconKey ? selectedOption[iconKey] : '';

  const filteredOptions = options.filter(option =>
    searchKeys.some(key =>
      option[key]?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    setHighlightedIndex(-1); // Reset highlighted index when dropdown opens/closes
  }, [isOpen]);

  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  useEffect(() => {
    if (isOpen && listRef.current && highlightedIndex !== -1 && isKeyboardNavigation) {
      const highlightedItem = listRef.current.children[highlightedIndex] as HTMLLIElement;
      if (highlightedItem) {
        highlightedItem.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen, isKeyboardNavigation]);

  const handleSelect = useCallback((option: SearchableSelectOption) => {
    onChange(option[valueKey]);
    setIsOpen(false);
    setSearchTerm('');
  }, [onChange, valueKey]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    setIsKeyboardNavigation(true);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex !== -1 && filteredOptions[highlightedIndex]) {
        handleSelect(filteredOptions[highlightedIndex]);
      } else if (filteredOptions.length === 1 && searchTerm) { // Auto-select if only one option matches search
        handleSelect(filteredOptions[0]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    }
  }, [filteredOptions, highlightedIndex, handleSelect, searchTerm]);

  return (
    <div className={`relative ${className}`} ref={wrapperRef}>
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-3 text-left bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl shadow-sm text-sm font-medium text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1] focus:border-transparent transition-all duration-200"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          {displayedIcon && <span className="text-lg">{displayedIcon}</span>}
          {displayedValue}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl shadow-lg max-h-60 overflow-hidden">
          <div className="p-2 border-b border-[#143028]/5 dark:border-white/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#143028]/50 dark:text-white/50" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-[#143028] border border-gray-200 dark:border-white/10 rounded-lg text-sm text-[#143028] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#DAFFD1]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <ul
            ref={listRef}
            className="max-h-48 overflow-y-auto custom-scrollbar"
            role="listbox"
            aria-labelledby={name}
            onMouseMove={() => setIsKeyboardNavigation(false)}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={`${option.name}-${index}`}
                  className={`flex items-center justify-between px-4 py-2 cursor-pointer text-sm transition-colors duration-150
                    ${highlightedIndex === index ? 'bg-[#DAFFD1] dark:bg-[#143028]/50' : 'hover:bg-gray-50 dark:hover:bg-white/5'}
                    ${option[valueKey] === value ? 'bg-[#DAFFD1] dark:bg-[#143028]/50 font-semibold' : 'text-[#143028] dark:text-white'}
                  `}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => {
                    if (!isKeyboardNavigation) {
                      setHighlightedIndex(index);
                    }
                  }}
                  role="option"
                  aria-selected={option[valueKey] === value}
                >
                  <span className="flex items-center gap-2">
                    {iconKey && <span className="text-lg">{option[iconKey]}</span>}
                    {option[displayKey]}
                  </span>
                  {option[valueKey] === value && <Check className="w-4 h-4 text-[#143028] dark:text-[#DAFFD1]" />}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">Aucun résultat</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};


const Faymaco = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nom_complet: '',
    email: '',
    whatsapp_code: '+221',
    whatsapp_number: '',
    role: '',
    entreprise: '',
    pays_exercice: '',
    activite: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll('.reveal-up');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const apiUrl = 'https://api.peelo.chat/api/landing/faymaco';

      const payload = {
        nom_complet: formData.nom_complet,
        email: formData.email,
        whatsapp: `${formData.whatsapp_code} ${formData.whatsapp_number}`,
        role: formData.role,
        entreprise: formData.entreprise,
        pays_exercice: formData.pays_exercice,
        activite: formData.activite,
        description: formData.description,
        tag: 'request_access'
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nom_complet: '', email: '', whatsapp_code: '+221', whatsapp_number: '', role: '', entreprise: '', pays_exercice: '', activite: '', description: '' });
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PublicNavbar />
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-32 px-5 md:px-10 lg:px-12 relative overflow-hidden bg-[#FCFAF7] dark:bg-[#0A1A14]">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#DAFFD1] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-12 xl:col-span-7 text-center xl:text-left reveal-up flex flex-col items-center xl:items-start">
              

              <h1 className="text-[#143028] dark:text-white font-bold mb-8 leading-[1.1] text-[2.8rem] sm:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem] tracking-tight">
                {t('faymaco.hero.title')}
              </h1>
              <div className="text-base sm:text-xl lg:text-3xl text-[#143028]/60 dark:text-white/60 font-medium max-w-2xl leading-relaxed md:leading-[1.8] mb-12 italic text-center xl:text-left space-y-6">
                <p>
                  <Trans 
                    i18nKey="faymaco.hero.subtitle_1"
                    components={[
                      <strong className="font-bold underline decoration-[#143028] dark:decoration-[#DAFFD1] text-[#143028] dark:text-white not-italic underline-offset-8" />,
                      <BrandName />
                    ]}
                  />
                </p>
                <p>
                  <Trans 
                    i18nKey="faymaco.hero.subtitle_2"
                    components={[<span className="text-[#143028] dark:text-white font-bold not-italic" />]}
                  />
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center xl:justify-start items-center gap-4 md:gap-6 mt-4">
                <a href="#request-access" className="w-full sm:w-auto bg-[#143028] dark:bg-[#DAFFD1] text-white dark:text-[#143028] px-12 md:px-16 py-4 md:py-6 rounded-full text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-4">
                  {t('faymaco.hero.cta')} <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <p className="mt-6 text-[11px] md:text-sm font-bold text-[#143028]/40 dark:text-white/40 uppercase tracking-[0.1em] text-center xl:text-left italic">
                 {t('faymaco.hero.priority_access')}
              </p>
            </div>

            <div className="lg:col-span-12 xl:col-span-5 flex justify-center mt-12 xl:mt-0 reveal-up perspective-1000">
               <div className="transform xl:rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-700 ease-out preserve-3d">
                 <WhatsAppSimulator />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Le Problème Section */}
      <section className="py-20 md:py-32 px-5 md:px-10 lg:px-12 bg-white dark:bg-[#0A1A14] border-y border-[#143028]/5 dark:border-white/5">
         <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal-up order-2 lg:order-1 relative rounded-[3rem] p-10 bg-[#FCFAF7] dark:bg-white/5 border border-[#143028]/5 dark:border-white/10 shadow-2xl">
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#DAFFD1] rounded-full blur-2xl opacity-20 dark:opacity-5"></div>
                 <div className="space-y-6">
                    <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#0A1A14] shadow-sm border border-[#143028]/10 dark:border-white/10 hover:border-[#DAFFD1] transition-colors">
                        <AlertCircle className="text-[#143028] dark:text-[#DAFFD1] shrink-0 mt-1" />
                        <p className="text-sm md:text-base font-medium text-[#143028]/80 dark:text-white/80">{t('faymaco.problem.stripe_unavailable')}</p>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#0A1A14] shadow-sm border border-[#143028]/10 dark:border-white/10 hover:border-[#DAFFD1] transition-colors">
                        <AlertCircle className="text-[#143028] dark:text-[#DAFFD1] shrink-0 mt-1" />
                        <p className="text-sm md:text-base font-medium text-[#143028]/80 dark:text-white/80">{t('faymaco.problem.no_auto_debit')}</p>
                    </div>
                    <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-[#0A1A14] shadow-sm border border-[#143028]/10 dark:border-white/10 hover:border-[#DAFFD1] transition-colors">
                        <Clock className="text-[#143028] dark:text-[#DAFFD1] shrink-0 mt-1" />
                        <p className="text-sm md:text-base font-medium text-[#143028]/80 dark:text-white/80">{t('faymaco.problem.manual_followup')}</p>
                    </div>
                 </div>
              </div>
              <div className="reveal-up order-1 lg:order-2">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-[#143028] dark:text-white leading-[1] mb-8">
                  {t('faymaco.problem.recognize_yourself')}
                </h2>
                <div className="text-[#143028]/60 dark:text-white/60 text-lg md:text-xl font-medium leading-relaxed space-y-4">
                  <p>{t('faymaco.problem.end_of_month')}</p>
                  <p className="italic">{t('faymaco.problem.clients_slip')}</p>
                  <p>{t('faymaco.problem.one_two_clients')}</p>
                  <p className="font-bold text-[#143028] dark:text-white">{t('faymaco.problem.when_scaling')}</p>
                  <p className="text-2xl mt-8 pt-6 border-t border-[#143028]/10 dark:border-white/10">
                    <Trans 
                      i18nKey="faymaco.problem.manual_collection"
                      components={[<span className="font-bold underline decoration-[#143028]/30 dark:decoration-[#DAFFD1]/30 underline-offset-4 text-[#143028] dark:text-[#DAFFD1]" />]}
                    />
                  </p>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 px-5 md:px-10 lg:px-12 bg-[#FCFAF7] dark:bg-[#0A1A14]">
        <div className="max-w-[800px] mx-auto reveal-up">
          <div className="relative bg-[#143028] dark:bg-white/5 rounded-[2.5rem] p-10 md:p-14 border border-[#143028]/10 dark:border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAFFD1]/10 rounded-full blur-[80px] pointer-events-none" />
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#DAFFD1]/60 mb-8">
              {t('faymaco.founder.label')}
            </span>
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-10 relative z-10">
              <span className="text-[5rem] leading-none text-[#DAFFD1]/20 font-serif absolute -top-4 -left-2 select-none">"</span>
              <span className="relative z-10 italic">{t('faymaco.founder.quote')}</span>
            </blockquote>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
              <div className="w-10 h-10 rounded-full bg-[#DAFFD1] flex items-center justify-center shrink-0">
                <span className="text-[#143028] font-black text-sm">MD</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t('faymaco.founder.name')}</p>
                <p className="text-white/50 text-xs font-medium">{t('faymaco.founder.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section id="how-it-works" className="py-20 md:py-40 px-5 md:px-10 lg:px-12 bg-[#FCFAF7] dark:bg-[#0A1A14] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 md:mb-32 lg:mb-40 reveal-up">
            <h2 className="text-4xl lg:text-7xl font-medium tracking-tighter text-[#143028] dark:text-white leading-[1.1]">
              <Trans i18nKey="faymaco.how_it_works.title" components={[<BrandName />]} /><br />
              <span className="italic text-[#143028]/50 dark:text-white/50">{t('faymaco.how_it_works.subtitle')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mt-16">
            {/* Continuous Glowing Flow Line */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[4px] bg-gradient-to-r from-[#143028]/0 via-[#143028]/30 dark:via-[#DAFFD1]/50 to-[#143028]/0 z-0 rounded-full shadow-[0_0_15px_rgba(218,255,209,0.5)]"></div>
            
            {[
              {
                step: t('faymaco.how_it_works.step1_badge'),
                time: t('faymaco.how_it_works.step1_title'),
                desc: t('faymaco.how_it_works.step1_desc'),
                icon: <MessageCircle size={24} className="text-white dark:text-[#143028]" />
              },
              {
                step: t('faymaco.how_it_works.step2_badge'),
                time: t('faymaco.how_it_works.step2_title'),
                desc: t('faymaco.how_it_works.step2_desc'),
                icon: <ZapIcon size={24} className="text-white dark:text-[#143028]" />
              },
              {
                step: t('faymaco.how_it_works.step3_badge'),
                time: t('faymaco.how_it_works.step3_title'),
                desc: t('faymaco.how_it_works.step3_desc'),
                icon: <CheckCircle2 size={24} className="text-white dark:text-[#143028]" />
              },
              {
                step: t('faymaco.how_it_works.step4_badge'),
                time: t('faymaco.how_it_works.step4_title'),
                desc: t('faymaco.how_it_works.step4_desc'),
                icon: <AlertCircle size={24} className="text-white dark:text-[#143028]" />
              }
            ].map((item, i) => (
              <div key={i} className="reveal-up relative z-10 flex flex-col items-center pt-8 lg:pt-0" style={{ animationDelay: `${i * 0.15}s` }}>
                 
                 {/* Step Icon perfectly intersecting the line */}
                 <div className="bg-[#143028] dark:bg-[#DAFFD1] w-14 h-14 rounded-2xl rotate-3 hover:rotate-0 transition-transform flex items-center justify-center shadow-lg border border-[#DAFFD1]/20 dark:border-white/20 mb-6 shrink-0 z-10 relative group">
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.icon}
                 </div>
                 
                 {/* Step Content Card */}
                 <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 w-full border border-[#143028]/5 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm hover:shadow-lg h-full flex flex-col items-center text-center group">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#143028]/40 dark:text-[#DAFFD1]/70 mb-3 bg-[#143028]/5 dark:bg-[#DAFFD1]/10 px-3 py-1 rounded-full">{item.step}</span>
                    <h4 className="text-base font-bold text-[#143028] dark:text-white mb-3 group-hover:text-[#DAFFD1] dark:group-hover:text-[#DAFFD1] transition-colors">{item.time}</h4>
                    <p className="text-sm font-medium text-[#143028]/70 dark:text-white/70 leading-relaxed flex-grow">
                      {item.desc}
                    </p>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center reveal-up">
            <p className="text-2xl md:text-4xl font-bold tracking-tight text-[#143028] dark:text-white pb-4 border-b-2 inline-block border-[#DAFFD1]">
              {t('faymaco.how_it_works.you_touch_nothing')}
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="target" className="py-20 md:py-32 px-5 md:px-10 lg:px-12 bg-[#143028] text-white rounded-[2.5rem] md:rounded-[5rem] mx-4 md:mx-6 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#DAFFD1]/10 rounded-full blur-[150px]" />
         </div>
         <div className="max-w-[1200px] mx-auto relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1] mb-16 text-center reveal-up">
              <Trans i18nKey="faymaco.target.title" components={[<BrandName />]} />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                t('faymaco.target.point1'),
                t('faymaco.target.point2'),
                t('faymaco.target.point3'),
                t('faymaco.target.point4'),
                t('faymaco.target.point5')
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors reveal-up" style={{ animationDelay: `${i * 0.1}s` }}>
                   <div className="mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#DAFFD1] flex items-center justify-center">
                        <Check size={14} className="text-[#143028] font-bold" />
                      </div>
                   </div>
                   <p className="text-lg font-medium leading-tight">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center reveal-up">
              <p className="text-xl md:text-3xl font-medium italic text-[#DAFFD1]">
                <Trans i18nKey="faymaco.target.conclusion" components={[<BrandName />]} />
              </p>
            </div>
         </div>
      </section>

      {/* Other Uses Section */}
      <section className="py-20 md:py-40 px-5 md:px-10 lg:px-12 bg-[#FCFAF7] dark:bg-[#0A1A14]">
         <div className="max-w-[1400px] mx-auto">
            <div className="mb-16 md:mb-24 reveal-up">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/10 border border-[#143028]/10 dark:border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-8 shadow-sm text-[#143028] dark:text-[#DAFFD1]">
                {t('faymaco.other_uses.badge')}
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-[#143028] dark:text-white leading-[1.1]">
                <Trans i18nKey="faymaco.other_uses.title" components={[<BrandName />]} />
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#143028]/5 dark:border-white/10 reveal-up hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-[#DAFFD1] flex items-center justify-center mb-8">
                     <LinkIcon size={24} className="text-[#143028]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143028] dark:text-white mb-4">{t('faymaco.other_uses.payment_request_title')}</h3>
                  <p className="text-[#143028]/70 dark:text-white/70 font-medium leading-relaxed mb-4">{t('faymaco.other_uses.payment_request_q')}</p>
                  <p className="text-[#143028]/70 dark:text-white/70 font-medium leading-relaxed italic text-sm"><Trans i18nKey="faymaco.other_uses.payment_request_a" components={[<BrandName />]} /></p>
               </div>
               
               <div className="bg-[#143028] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-transparent reveal-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                     <AlertCircle size={24} className="text-[#DAFFD1]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('faymaco.other_uses.debt_collection_title')}</h3>
                  <p className="text-white/70 font-medium leading-relaxed mb-4">{t('faymaco.other_uses.debt_collection_q')}</p>
                  <p className="text-[#DAFFD1] font-medium leading-relaxed italic text-sm">{t('faymaco.other_uses.debt_collection_a')}</p>
               </div>

               <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#143028]/5 dark:border-white/10 reveal-up hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                  <div className="w-14 h-14 rounded-2xl bg-[#DAFFD1] flex items-center justify-center mb-8">
                     <Calendar size={24} className="text-[#143028]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#143028] dark:text-white mb-4">{t('faymaco.other_uses.installments_title')}</h3>
                  <p className="text-[#143028]/70 dark:text-white/70 font-medium leading-relaxed mb-4">{t('faymaco.other_uses.installments_q')}</p>
                  <p className="text-[#143028]/70 dark:text-white/70 font-medium leading-relaxed italic text-sm"><Trans i18nKey="faymaco.other_uses.installments_a" components={[<BrandName />]} /></p>
               </div>
            </div>
         </div>
      </section>

      {/* Waiting List Form Selection */}
      <section id="request-access" className="py-20 md:py-32 px-5 md:px-10 lg:px-12 bg-white dark:bg-[#0A1A14] border-t border-[#143028]/5 dark:border-white/5 relative">
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-12 reveal-up">
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tighter text-[#143028] dark:text-white leading-[1] mb-6 flex flex-col gap-3 sm:gap-5">
              <span>{t('faymaco.request_access.title')}</span>
              <span className="italic text-2xl sm:text-3xl lg:text-4xl text-[#143028]/40 dark:text-white/40 mb-2"><Trans i18nKey="faymaco.request_access.subtitle" components={[<BrandName />]} /></span>
            </h2>
            <p className="text-lg md:text-xl text-[#143028]/60 dark:text-white/60 font-medium">
              {t('faymaco.request_access.description')}
            </p>
          </div>

          <div className="bg-[#FCFAF7] dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-[#143028]/5 dark:border-white/10 reveal-up">
             {submitted ? (
                <div className="text-center py-10">
                   <div className="w-20 h-20 rounded-full bg-[#DAFFD1] mx-auto flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-[#143028]" />
                   </div>
                   <h3 className="text-3xl font-bold text-[#143028] dark:text-white mb-4">{t('faymaco.request_access.success_title')}</h3>
                   <p className="text-lg text-[#143028]/70 dark:text-white/70"><Trans i18nKey="faymaco.request_access.success_desc" components={[<BrandName />]} /></p>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <User size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_name')}
                      </label>
                      <input 
                        type="text" 
                        name="nom_complet"
                        required
                        value={formData.nom_complet}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1]"
                        placeholder={t('faymaco.request_access.form_name_ph')}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <Mail size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_email')}
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1]"
                        placeholder={t('faymaco.request_access.form_email_ph')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <User size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_role')}
                      </label>
                      <input 
                        type="text" 
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1]"
                        placeholder={t('faymaco.request_access.form_role_ph')}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <Building2 size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_company')}
                      </label>
                      <input 
                        type="text" 
                        name="entreprise"
                        required
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1]"
                        placeholder={t('faymaco.request_access.form_company_ph')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                      <Phone size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_phone')}
                    </label>
                    <div className="flex gap-3">
                      <SearchableSelect
                        name="whatsapp_code"
                        options={COUNTRIES}
                        value={formData.whatsapp_code}
                        onChange={(val) => setFormData({ ...formData, whatsapp_code: val })}
                        displayKey="dial_code"
                        valueKey="dial_code"
                        searchKeys={['name', 'dial_code']}
                        iconKey="flag"
                        className="w-[140px]"
                      />
                      <input 
                        type="tel" 
                        name="whatsapp_number"
                        required
                        value={formData.whatsapp_number}
                        onChange={handleChange}
                        className="flex-1 bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1]"
                        placeholder={t('faymaco.request_access.form_phone_ph')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <Globe size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_country')}
                      </label>
                      <SearchableSelect
                        name="pays_exercice"
                        options={COUNTRIES}
                        value={formData.pays_exercice}
                        onChange={(val) => setFormData({ ...formData, pays_exercice: val })}
                        placeholder={t('faymaco.request_access.form_country_ph')}
                        displayKey="name"
                        valueKey="name"
                        searchKeys={['name']}
                        iconKey="flag"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                        <Layers size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_activity')}
                      </label>
                      <select 
                        name="activite"
                      required
                      value={formData.activite}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1] appearance-none"
                    >
                      <option value="" disabled>{t('faymaco.request_access.form_activity_ph')}</option>
                      <option value="SaaS">{t('faymaco.request_access.activity_saas')}</option>
                      <option value="Formation">{t('faymaco.request_access.activity_formation')}</option>
                      <option value="Agence">{t('faymaco.request_access.activity_agency')}</option>
                      <option value="Clinique">{t('faymaco.request_access.activity_clinic')}</option>
                      <option value="E-commerce">{t('faymaco.request_access.activity_ecommerce')}</option>
                      <option value="Autre">{t('faymaco.request_access.activity_other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-sm font-bold text-[#143028] dark:text-white mb-2 uppercase tracking-widest text-[10px]">
                    <FileText size={14} className="text-[#143028]/60 dark:text-white/60"/> {t('faymaco.request_access.form_description')}
                    </label>
                    <textarea 
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white dark:bg-[#0A1A14] border border-[#143028]/10 dark:border-white/10 rounded-xl px-4 py-3 text-[#143028] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#DAFFD1] resize-none"
                      placeholder={t('faymaco.request_access.form_description_ph')}
                    ></textarea>
                  </div>

                  <div className="pt-4 text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#143028] dark:bg-[#DAFFD1] text-white dark:text-[#143028] px-12 py-5 rounded-full text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t('faymaco.request_access.submitting_btn') : t('faymaco.request_access.submit_btn')}
                    </button>
                    <p className="mt-4 text-[10px] font-bold text-[#143028]/40 dark:text-white/40 uppercase tracking-widest italic">
                      {t('faymaco.request_access.no_spam')}
                    </p>
                  </div>
                </form>
             )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#143028] text-white py-8 px-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} <BrandName /> by Peelo. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link to="/cgu" className="hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <a href="mailto:support@peelo.chat" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Faymaco;
