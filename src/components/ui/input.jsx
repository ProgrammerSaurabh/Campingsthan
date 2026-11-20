import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'flex h-11 w-full min-w-0 rounded-xl border border-border bg-secondary px-4 py-2 text-sm text-foreground transition-colors outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

export { Input };