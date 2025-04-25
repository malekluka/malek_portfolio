import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'github'>('github');

  return (
    <>
      <SectionTitle
        title="Movie Recommendation App"
        caption="Built with the MERN Stack"
        description="A fully responsive app that lets users search, filter, and save movies. Includes a 'Watch Later' list, authentication, and data fetched from the TMDB API."
        button={{
          title: 'View Project',
          href: 'https://moviescout-iota.vercel.app/',
          target: '_blank', // Open in a new tab
          rel: 'noopener noreferrer', // Security improvement
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the Movie Recommendation App on GitHub."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title:
                        'malekluka/Movie-Recommendation-App-React - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="Movie-Recommendation-App-React-"
                        description="A MERN stack app for movie recommendations with features like search, filter, and watch later."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
