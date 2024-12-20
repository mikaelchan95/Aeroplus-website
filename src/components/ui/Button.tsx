import React from 'react';
import { ArrowRight } from 'lucide-react';
import { createEmailLink } from '../../utils/contact';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href?: string;
  emailSubject?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant, href, emailSubject, children, className = '' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-8 py-4 group transition-all duration-300 whitespace-nowrap';
  const variants = {
    primary: 'bg-airbus-gold hover:bg-airbus-gold/90 text-navy-900',
    secondary: 'border border-white/20 text-white hover:bg-white/10'
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;
  const finalHref = emailSubject ? createEmailLink(emailSubject) : href;

  if (finalHref) {
    return (
      <a href={finalHref} className={styles}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  return (
    <button className={styles}>
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
    </button>
  );
}