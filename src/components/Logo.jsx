import React from 'react';

export default function Logo({ className = 'brand-logo' }) {
  return <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="HRLeaf logo" className={className} />;
}