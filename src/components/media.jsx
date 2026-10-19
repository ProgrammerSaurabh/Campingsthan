import Image from 'next/image';

import imageData from '@/lib/image-data.json';
import { cn } from '@/lib/utils';

/*
  Image with reserved space and a skeleton placeholder.

  next/image already knows the intrinsic size, so the box is laid out before
  the bytes arrive - nothing shifts while the gallery loads. The blur
  placeholder from scripts/generate-image-data.mjs doubles as the skeleton,
  and `priority` stays off for everything below the fold.
*/
const Media = ({
  src,
  alt,
  sizes,
  className,
  imageClassName,
  priority = false,
  ...props
}) => {
  const meta = imageData[src];

  if (!meta) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={meta.width}
      height={meta.height}
      sizes={sizes}
      placeholder='blur'
      blurDataURL={meta.blur}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      decoding='async'
      className={cn('bg-muted h-auto w-full', imageClassName, className)}
      {...props}
    />
  );
};

export default Media;