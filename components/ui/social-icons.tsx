import React, { useId } from 'react';

export interface SocialIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'color' | 'inverted' | 'mono';
}

/**
 * Official WhatsApp Brand SVG Icon (#25D366)
 * - 'color': Solid #25D366 green speech bubble with white phone handset
 * - 'inverted': White speech bubble with #25D366 green handset (ideal for green buttons)
 * - 'mono': Monochromatic speech bubble + phone using currentColor
 */
export function WhatsAppIcon({
  variant,
  className,
  fill,
  ...props
}: SocialIconProps) {
  const effectiveVariant = variant || (fill === 'currentColor' ? 'mono' : 'color');

  const bubblePath =
    'M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.87L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2z';
  const handsetPath =
    'M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.11 8.01 12.27C8.13 12.44 9.75 14.93 12.25 16C12.84 16.25 13.3 16.4 13.66 16.51C14.25 16.7 14.78 16.67 15.2 16.61C15.68 16.54 16.68 16 16.88 15.42C17.08 14.85 17.08 14.36 17.02 14.26C16.96 14.16 16.8 14.1 16.56 13.98C16.32 13.86 15.15 13.29 14.93 13.21C14.71 13.13 14.55 13.09 14.39 13.33C14.23 13.57 13.77 14.13 13.63 14.29C13.5 14.45 13.36 14.47 13.12 14.35C12.88 14.23 12.1 13.97 11.18 13.15C10.46 12.51 9.97 11.72 9.83 11.48C9.69 11.24 9.81 11.11 9.93 10.99C10.04 10.87 10.18 10.69 10.32 10.51C10.46 10.33 10.5 10.2 10.58 10.04C10.66 9.88 10.62 9.74 10.56 9.62C10.5 9.5 9.97 8.18 9.75 7.64C9.53 7.11 9.3 7.19 9.13 7.19C8.98 7.19 8.85 7.33 8.53 7.33Z';

  if (effectiveVariant === 'inverted') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path fill="#FFFFFF" d={bubblePath} />
        <path fill="#25D366" d={handsetPath} />
      </svg>
    );
  }

  if (effectiveVariant === 'mono') {
    const monoPath =
      'M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.87L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.57L5.06 16.26C4.24 14.93 3.81 13.43 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.11 8.01 12.27C8.13 12.44 9.75 14.93 12.25 16C12.84 16.25 13.3 16.4 13.66 16.51C14.25 16.7 14.78 16.67 15.2 16.61C15.68 16.54 16.68 16 16.88 15.42C17.08 14.85 17.08 14.36 17.02 14.26C16.96 14.16 16.8 14.1 16.56 13.98C16.32 13.86 15.15 13.29 14.93 13.21C14.71 13.13 14.55 13.09 14.39 13.33C14.23 13.57 13.77 14.13 13.63 14.29C13.5 14.45 13.36 14.47 13.12 14.35C12.88 14.23 12.1 13.97 11.18 13.15C10.46 12.51 9.97 11.72 9.83 11.48C9.69 11.24 9.81 11.11 9.93 10.99C10.04 10.87 10.18 10.69 10.32 10.51C10.46 10.33 10.5 10.2 10.58 10.04C10.66 9.88 10.62 9.74 10.56 9.62C10.5 9.5 9.97 8.18 9.75 7.64C9.53 7.11 9.3 7.19 9.13 7.19C8.98 7.19 8.85 7.33 8.53 7.33Z';
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d={monoPath} />
      </svg>
    );
  }

  // Official color brand icon
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path fill="#25D366" d={bubblePath} />
      <path fill="#FFFFFF" d={handsetPath} />
    </svg>
  );
}

/**
 * Official Telegram Brand SVG Icon (#0088cc)
 * - 'color': Solid #0088cc blue circle with crisp white paper airplane
 * - 'inverted': White circle with #0088cc paper airplane (ideal for blue buttons)
 * - 'mono': Paper airplane glyph using currentColor
 */
export function TelegramIcon({
  variant,
  className,
  fill,
  ...props
}: SocialIconProps) {
  const effectiveVariant = variant || (fill === 'currentColor' ? 'mono' : 'color');

  const planePath =
    'M16.906 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.159.037-5.061 3.345q-.72.495-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789q.04-.324.893-.663q5.247-2.286 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z';

  if (effectiveVariant === 'inverted') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="12" cy="12" r="12" fill="#FFFFFF" />
        <path fill="#0088cc" d={planePath} />
      </svg>
    );
  }

  if (effectiveVariant === 'mono') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d={planePath} />
      </svg>
    );
  }

  // Official color brand icon
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#0088cc" />
      <path fill="#FFFFFF" d={planePath} />
    </svg>
  );
}

/**
 * Official Instagram Brand SVG Icon
 * - 'color': Sunset/sunrise radial gradient rounded square with white camera glyphs
 * - 'mono': Camera glyph using currentColor
 */
export function InstagramIcon({
  variant = 'color',
  className,
  fill,
  ...props
}: SocialIconProps) {
  const uniqueId = useId();
  const gradId = `ig-radial-${uniqueId.replace(/:/g, '')}`;

  if (variant === 'mono' || fill === 'currentColor') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm5.2-8.3a1.17 1.17 0 1 1-2.34 0 1.17 1.17 0 0 1 2.34 0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.053 2.072C5.775 2.132 4.905 2.333 4.14 2.63a5.88 5.88 0 0 0-2.126 1.384A5.88 5.88 0 0 0 .63 6.14C.333 6.905.131 7.775.072 9.053.012 10.333 0 10.74 0 14s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 25.988 8.74 26 12 26s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 3.347 20.651 2.935 19.86 2.63c-.765-.297-1.636-.499-2.913-.558C15.667 2.012 15.26 2 12 2s-3.667.012-4.947.072zM12 4.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03z"
        />
      </svg>
    );
  }

  // Official color brand icon with Instagram sunrise/sunset radial gradient
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      {/* Official Rounded Square Background with Gradient */}
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      {/* Inner White Camera Glyphs */}
      <circle cx="12" cy="12" r="4.3" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="#FFFFFF" />
      <rect
        x="3.6"
        y="3.6"
        width="16.8"
        height="16.8"
        rx="4.6"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

/**
 * TikTok SVG Icon
 */
export function TikTokIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.47V8.71a8.21 8.21 0 0 0 4.9 1.62v-3.64Z" />
    </svg>
  );
}
