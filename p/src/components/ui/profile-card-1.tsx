import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, MailIcon } from 'utils/Icons';
import { configs } from 'shared/content/Content';

// Built-in icon helpers compatible with the component props
export const Github = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <span style={{ fontSize: size }} className={className}>
    <GitHubIcon />
  </span>
);

export const Linkedin = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <span style={{ fontSize: size }} className={className}>
    <LinkedInIcon />
  </span>
);

export const Mail = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <span style={{ fontSize: size }} className={className}>
    <MailIcon />
  </span>
);

export const Twitter = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface SocialLink {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ActionButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

export interface GlassmorphismProfileCardProps {
  avatarUrl?: string;
  name?: string;
  title?: string;
  bio?: string;
  socialLinks?: SocialLink[];
  actionButton?: ActionButtonProps | null;
  className?: string;
}

/**
 * --- Glassmorphism Profile Card Component ---
 * A responsive, animated, and themeable profile card with a glassmorphism effect.
 */
export const GlassmorphismProfileCard: React.FC<GlassmorphismProfileCardProps> = ({
  avatarUrl = configs?.common?.mainPicture || '/assets/arun.webp',
  name = configs?.common?.name || 'Arun Subramani',
  title,
  bio = 'Building intuitive digital experiences. Passionate about product thinking, analytics, and user-centred design.',
  socialLinks = [
    { id: 'github', icon: Github, label: 'GitHub', href: configs?.common?.github || 'https://github.com/arun-subramani-css', isExternal: true },
    { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: configs?.common?.linkedin || 'https://linkedin.com/in/arun-k-s-70105saas', isExternal: true },
    { id: 'mail', icon: Mail, label: 'Email', href: `mailto:${configs?.common?.email || 'arunsubramani70105@gmail.com'}`, isExternal: false },
  ],
  actionButton,
  className = '',
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (actionButton?.onClick) {
      e.preventDefault();
      actionButton.onClick();
      return;
    }
    if (actionButton?.href?.startsWith('#')) {
      e.preventDefault();
      const targetId = actionButton.href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`relative w-full max-w-[340px] sm:max-w-sm select-none ${className}`}>
      <div
        className="relative flex flex-col items-center p-6 sm:p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-2xl bg-[#141414]/80 border-white/[0.08]"
        style={{
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Avatar Ring */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 mb-4 rounded-full p-1 border-2 border-white/20 shadow-lg bg-[#1C1C1C] flex items-center justify-center overflow-hidden transition-all duration-300">
          <img
            src={avatarUrl}
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = `https://placehold.co/144x144/2B2B2B/F5F5F5?text=${name.charAt(0)}`;
            }}
          />
        </div>

        {/* Name & Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] tracking-tight text-center">{name}</h2>
        {title ? (
          <p className="mt-1 text-xs sm:text-sm font-semibold text-[#3B82F6] text-center">{title}</p>
        ) : null}
        
        {/* Bio */}
        <p className={`${title ? 'mt-3 sm:mt-4' : 'mt-2.5 sm:mt-3'} text-center text-xs sm:text-sm leading-relaxed text-[#A3A3A3] line-clamp-3`}>
          {bio}
        </p>

        {/* Divider */}
        <div className="w-1/2 h-px my-5 sm:my-6 rounded-full bg-[#2B2B2B]" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton
              key={item.id}
              item={item}
              setHoveredItem={setHoveredItem}
              hoveredItem={hoveredItem}
            />
          ))}
        </div>

        {/* CTA Button */}
        {actionButton && (
          <a
            href={actionButton.href}
            onClick={handleActionClick}
            className="flex items-center gap-2 px-6 py-2.5 sm:py-3 mt-6 sm:mt-8 rounded-full font-semibold text-sm backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-[#F5F5F5] text-[#0B0B0B] hover:bg-white cursor-pointer"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
          >
            <span>{actionButton.text}</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
          </a>
        )}
      </div>

      {/* Vibrant Glassmorphic Glow */}
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-2xl opacity-25 bg-gradient-to-r from-blue-600/40 via-purple-600/30 to-pink-600/30 pointer-events-none" />
    </div>
  );
};

// --- Sub-components ---

const SocialButton: React.FC<{
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}> = ({ item, setHoveredItem, hoveredItem }) => {
  const Icon = item.icon;
  return (
    <div className="relative">
      <a
        href={item.href}
        target={item.isExternal !== false && !item.href.startsWith('#') ? '_blank' : undefined}
        rel="noreferrer noopener"
        className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-[#1C1C1C] border border-[#2B2B2B] hover:border-[#383838] hover:bg-[#202020] text-[#A3A3A3] hover:text-[#F5F5F5]"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        aria-label={item.label}
      >
        <div className="relative z-10 flex items-center justify-center">
          <Icon size={18} className="transition-all duration-200 ease-out" />
        </div>
      </a>
      <Tooltip item={item} hoveredItem={hoveredItem} />
    </div>
  );
};

const Tooltip: React.FC<{
  item: SocialLink;
  hoveredItem: string | null;
}> = ({ item, hoveredItem }) => (
  <div
    role="tooltip"
    className={`absolute -top-10 left-1/2 -translate-x-1/2 z-50 px-2.5 py-1 rounded-md backdrop-blur-md border text-[11px] font-medium whitespace-nowrap transition-all duration-200 ease-out pointer-events-none bg-[#1C1C1C] text-[#F5F5F5] border-[#2B2B2B] ${
      hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5'
    }`}
    style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)' }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1C1C1C] border-b border-r border-[#2B2B2B]" />
  </div>
);

// Demo wrapper as specified in user request
export function Component() {
  return (
    <div className="flex items-center justify-center p-4 font-sans bg-[#0B0B0B] transition-colors duration-500 sm:p-8 w-full">
      <GlassmorphismProfileCard />
    </div>
  );
}

export default GlassmorphismProfileCard;
