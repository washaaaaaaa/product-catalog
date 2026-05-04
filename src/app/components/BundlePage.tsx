import React from 'react';
import { CategoryPage, type CategoryPageProps } from './CategoryPage';

const bundleSampleImages = Object.entries(import.meta.glob('/src/assets/images/bundle/sample/*.{png,jpg,jpeg}', { eager: true }) as Record<string, { default: string }>)
  .map(([_, module]) => module.default)
  .filter((src): src is string => typeof src === 'string');

type BundlePageProps = Pick<CategoryPageProps, 'items' | 'onBack'> & {
  initialSelectedItemTitle?: string;
};

export function BundlePage({ items, onBack, initialSelectedItemTitle }: BundlePageProps) {
  return (
    <CategoryPage
      title="Bundle"
      subtitle="Flyers, business cards, banners, sintra boards, and tarpaulins for your business."
      items={items}
      onBack={onBack}
      slideshowTitle="Sample Finished Products"
      sampleImages={bundleSampleImages}
      initialSelectedItemTitle={initialSelectedItemTitle}
    />
  );
}
