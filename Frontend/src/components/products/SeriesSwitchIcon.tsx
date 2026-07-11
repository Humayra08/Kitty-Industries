interface SeriesSwitchIconProps {
  series: string;
  /** 'gang' renders a single wide paddle, 'piano' renders two narrow piano-key paddles. */
  variant: 'gang' | 'piano';
}

/**
 * Switch-plate illustration used on series picker cards (Gang & Piano landing pages).
 * Colors are derived from the series name; shape is derived from the variant.
 */
export const SeriesSwitchIcon = ({ series, variant }: SeriesSwitchIconProps) => {
  const width = 140;
  const height = 140;

  let plateFill = 'url(#blanko-plate)';
  let strokeColor = '#e5e7eb';
  let strokeW = 1.2;
  let bottomTrim: React.ReactNode = null;
  let paddleFill = 'url(#blanko-paddle)';
  let paddleStroke = '#d1d5db';
  let accentColor = '#4b5563'; // Dark grey

  switch (series) {
    case 'ART SERIES':
      plateFill = 'url(#art-plate)';
      strokeColor = '#374151';
      paddleFill = 'url(#art-paddle)';
      paddleStroke = '#4b5563';
      accentColor = '#c2a679'; // Gold dots/accents
      break;
    case 'Blanko':
      plateFill = 'url(#blanko-plate)';
      strokeColor = '#e5e7eb';
      paddleFill = 'url(#blanko-paddle)';
      paddleStroke = '#d1d5db';
      accentColor = '#9ca3af';
      break;
    case 'DOREN SERIES GOLDEN':
      plateFill = 'url(#doren-gold-plate)';
      strokeColor = '#c2a679';
      paddleFill = 'url(#doren-gold-paddle)';
      paddleStroke = '#b5996c';
      accentColor = '#4b3c25';
      break;
    case 'DOREN SERIES WHITE':
      plateFill = '#ffffff';
      strokeColor = '#c2a679'; // Golden frame
      strokeW = 2;
      paddleFill = 'url(#blanko-paddle)';
      paddleStroke = '#e5e7eb';
      accentColor = '#9ca3af';
      break;
    case 'GLORIA SERIES':
      plateFill = 'url(#gloria-plate)';
      strokeColor = '#2d313d';
      paddleFill = 'url(#gloria-paddle)';
      paddleStroke = '#3f4654';
      accentColor = '#9ca3af';
      break;
    case 'OPPLE SERIES':
      plateFill = '#ffffff';
      strokeColor = '#e5e7eb';
      paddleFill = 'url(#blanko-paddle)';
      paddleStroke = '#e5e7eb';
      accentColor = '#9ca3af';
      // Gold trim line at the bottom of the plate
      bottomTrim = <rect x="8" y="118" width="124" height="6" fill="#c2a679" rx="1" />;
      break;
    case 'VENUS SERIES':
      plateFill = 'url(#venus-plate)';
      strokeColor = '#bfa693';
      paddleFill = 'url(#venus-paddle)';
      paddleStroke = '#bca290';
      accentColor = '#6b584d';
      break;
    case 'VERONA SERIES':
      plateFill = 'url(#verona-plate)';
      strokeColor = '#9ca3af';
      paddleFill = 'url(#verona-paddle)';
      paddleStroke = '#cbd5e1';
      accentColor = '#374151';
      break;
    case 'VIP SERIES GOLDEN':
      plateFill = 'url(#vip-gold-plate)';
      strokeColor = '#d4af37';
      strokeW = 2.5;
      paddleFill = 'url(#vip-gold-paddle)';
      paddleStroke = '#cda452';
      accentColor = '#5c430e';
      break;
    case 'VIP SERIES WHITE':
      plateFill = '#ffffff';
      strokeColor = '#d4af37'; // Thick Gold border
      strokeW = 2.5;
      paddleFill = 'url(#blanko-paddle)';
      paddleStroke = '#e5e7eb';
      accentColor = '#9ca3af';
      break;
    case 'ZHILIK SERIES GOLDEN':
      plateFill = 'url(#zhilik-gold-plate)';
      strokeColor = '#cdbf9f';
      paddleFill = 'url(#zhilik-gold-paddle)';
      paddleStroke = '#beaf8d';
      accentColor = '#5c4d32';
      break;
    case 'ZHILIK SERIES WHITE':
      plateFill = '#ffffff';
      strokeColor = '#cbd5e1'; // Chrome/silver border
      strokeW = 2;
      paddleFill = 'url(#blanko-paddle)';
      paddleStroke = '#e5e7eb';
      accentColor = '#64748b';
      break;
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full drop-shadow-md">
      <defs>
        {/* ART SERIES (Dark textured/graphite) */}
        <linearGradient id="art-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="50%" stopColor="#1e1e1e" />
          <stop offset="100%" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="art-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor="#1f1f1f" />
        </linearGradient>

        {/* Blanko (Minimalist White) */}
        <linearGradient id="blanko-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </linearGradient>
        <linearGradient id="blanko-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eaeaea" />
        </linearGradient>

        {/* DOREN SERIES GOLDEN */}
        <linearGradient id="doren-gold-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ebd6b0" />
          <stop offset="50%" stopColor="#d3b98c" />
          <stop offset="100%" stopColor="#bc9f6e" />
        </linearGradient>
        <linearGradient id="doren-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e5cb" />
          <stop offset="100%" stopColor="#c5ab7d" />
        </linearGradient>

        {/* GLORIA SERIES */}
        <linearGradient id="gloria-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4450" />
          <stop offset="100%" stopColor="#1f242e" />
        </linearGradient>
        <linearGradient id="gloria-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5260" />
          <stop offset="100%" stopColor="#2b313d" />
        </linearGradient>

        {/* VENUS SERIES */}
        <linearGradient id="venus-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eddcd2" />
          <stop offset="100%" stopColor="#cbb6aa" />
        </linearGradient>
        <linearGradient id="venus-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e6dd" />
          <stop offset="100%" stopColor="#dac2b3" />
        </linearGradient>

        {/* VERONA SERIES */}
        <linearGradient id="verona-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="35%" stopColor="#e5e7eb" />
          <stop offset="70%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
        <linearGradient id="verona-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f9fafb" />
          <stop offset="100%" stopColor="#d1d5db" />
        </linearGradient>

        {/* VIP SERIES GOLDEN */}
        <linearGradient id="vip-gold-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe8b5" />
          <stop offset="35%" stopColor="#ebd092" />
          <stop offset="70%" stopColor="#d4b470" />
          <stop offset="100%" stopColor="#b4934e" />
        </linearGradient>
        <linearGradient id="vip-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff1d4" />
          <stop offset="100%" stopColor="#e5be79" />
        </linearGradient>

        {/* ZHILIK SERIES GOLDEN */}
        <linearGradient id="zhilik-gold-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dec6" />
          <stop offset="100%" stopColor="#cdbf9f" />
        </linearGradient>
        <linearGradient id="zhilik-gold-paddle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1ebd9" />
          <stop offset="100%" stopColor="#dbd0b3" />
        </linearGradient>
      </defs>

      {/* Main Outer Plate */}
      <rect x="8" y="8" width="124" height="124" rx="16" fill={plateFill} stroke={strokeColor} strokeWidth={strokeW} />

      {bottomTrim}

      {variant === 'gang' ? (
        <>
          {/* Left Gang Paddle */}
          <rect x="24" y="30" width="38" height="78" rx="7" fill={paddleFill} stroke={paddleStroke} strokeWidth="1.2" />
          <rect x="37" y="42" width="12" height="24" rx="2.5" fill={accentColor} />

          {/* Right Multi-Socket Component */}
          <rect x="74" y="30" width="42" height="78" rx="8" fill={paddleFill} stroke={paddleStroke} strokeWidth="1" />
          <circle cx="95" cy="52" r="5" fill={accentColor} />
          <path d="M85 76 q10 -8 20 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M85 89 q10 -8 20 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* Two Piano-key Paddles */}
          <rect x="20" y="30" width="27" height="78" rx="6" fill={paddleFill} stroke={paddleStroke} strokeWidth="1.2" />
          <rect x="29" y="42" width="9" height="22" rx="3" fill={accentColor} />
          <rect x="51" y="30" width="27" height="78" rx="6" fill={paddleFill} stroke={paddleStroke} strokeWidth="1.2" />
          <rect x="60" y="42" width="9" height="22" rx="3" fill={accentColor} />

          {/* Socket Component */}
          <rect x="84" y="30" width="36" height="78" rx="7" fill={paddleFill} stroke={paddleStroke} strokeWidth="1" />
          <circle cx="102" cy="52" r="5" fill={accentColor} />
          <path d="M94 76 q8 -9 16 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M94 89 q8 -9 16 0" stroke={accentColor} strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};
