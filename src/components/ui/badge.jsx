import * as React from 'react';

import { cn } from '@/lib/utils';

function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-primary/15 text-primary border-primary/30',
    outline: 'text-foreground border-border',
    muted: 'bg-muted text-muted-foreground border-border',
  };

  return (
    <span
      data-slot='badge'
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };