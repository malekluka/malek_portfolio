import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Clean and Optimized Code."
        caption="Pretty & Optimized"
        description="Readable, maintainable, and high-performance code, crafted for both beauty and speed."
      />
    </header>
  );
}

export default PrettyOptimized;
