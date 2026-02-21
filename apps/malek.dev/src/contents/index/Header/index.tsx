import clsx from 'clsx';
import Image from 'next/image';

import HeaderCta from '@/contents/index/Header/HeaderCta';
import HeaderTechStack from '@/contents/index/Header/HeaderTechStack';
import HeaderTitle from '@/contents/index/Header/HeaderTitle';

function Header() {
  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out pb-20 pt-36',
        'lg:pb-28 lg:pt-52',
        'overflow-hidden'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <div className={clsx('relative z-10')}>
            <HeaderTitle />
          </div>
          <div className={clsx('mt-6 md:mt-8')}>
            <HeaderCta isFree={false} />
          </div>
          <div className={clsx('mt-20 lg:mt-36')}>
            <HeaderTechStack />
          </div>
          <div className="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block">
            <Image
              alt="Malek Khaled - Full-Stack Developer"
              src="/assets/images/malek-portrait.png"
              width={380}
              height={300}
              className="hidden max-w-none rounded-2xl lg:block"
              quality={100}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
