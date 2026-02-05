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
        title="Restaurant Next App"
        caption="Full-Stack Food Ordering Platform built with Next.js 14"
        description="A comprehensive restaurant application featuring online ordering, payment integration with Stripe, PostgreSQL database with Prisma ORM, user authentication, admin dashboard, real-time order tracking, and a modern responsive UI. Built with Next.js App Router, Server Actions, and Tailwind CSS."
        button={{
          title: 'View Live Demo',
          href: 'https://malek-restaurant-next-app.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the full-stack source code for the Restaurant Next App with Stripe integration and Prisma ORM."
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
                      title: 'malekluka/Restaurant-Next-App - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="Restaurant-Next-App"
                        description="Full-stack restaurant platform with Next.js 14, PostgreSQL, Prisma, Stripe payments, authentication, admin dashboard, and real-time order management."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionTitle
        title="E-Commerce Admin Dashboard"
        caption="Built with React, TailwindCSS, Express, and MongoDB (MERN Stack)"
        description="An admin-only dashboard for managing products, orders, and customers. Includes JWT authentication, interactive analytics, and a fully responsive UI."
        button={{
          title: 'View Project',
          href: 'https://malek-ecommerce-dashboard.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the E-Commerce Admin Dashboard on GitHub."
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
                      title: 'malekluka/ecommerce-dashboard - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="ecommerce-dashboard"
                        description="Admin dashboard with product, order, and customer management, JWT auth, analytics, and responsive UI."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionTitle
        title="Movie Recommendation App"
        caption="Built with the MERN Stack"
        description="A fully responsive app that lets users search, filter, and save movies. Includes a 'Watch Later' list, authentication, and data fetched from the TMDB API."
        button={{
          title: 'View Project',
          href: 'https://moviescout-iota.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
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

      <SectionTitle
        title="Task Management App"
        caption="Built with React, TailwindCSS and Lucide Icons"
        description="A comprehensive React-based project management application featuring drag-and-drop task organization, advanced subtask management, and real-time workflow tracking. Built with modern React hooks, Tailwind CSS, and HTML5 drag-and-drop API for seamless user experience."
        button={{
          title: 'View Project',
          href: 'https://malek-kanban-portfolio.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the Task Management App on GitHub."
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
                      title: 'malekluka/malek-kanban-portfolio - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="malek-kanban-portfolio"
                        description="A modern React Kanban board application with drag-and-drop task management, subtask tracking, and responsive design for agile project workflows."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionTitle
        title="Clinic Management System"
        caption="Built with React, TypeScript and TailwindCSS"
        description="A comprehensive medical appointment management system featuring patient scheduling, appointment tracking, CRUD operations, and advanced filtering. Built with modern React hooks, TypeScript for type safety, React Router for navigation, and responsive design with search and sort functionality."
        button={{
          title: 'View Project',
          href: 'https://clinic-system-simple-form.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the Clinic Management System on GitHub."
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
                      title: 'malekluka/Clinic-system-simple-form - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="Clinic-system-simple-form"
                        description="Modern clinic management system with appointment scheduling, patient tracking, advanced filtering, and responsive design built with React, TypeScript, and comprehensive CRUD operations."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionTitle
        title="Budget Allocation App"
        caption="Built with React, Context API and Bootstrap"
        description="A comprehensive budget management application featuring department-wise allocation tracking, multi-currency support, real-time budget calculations, and interactive expense management. Built with React Context API for state management, Bootstrap for responsive design, and dynamic allocation controls."
        button={{
          title: 'View Project',
          href: 'https://ejtos-react-budget-app-nine.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the Budget Allocation App on GitHub."
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
                      title: 'malekluka/ejtos-react_budget_app - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="ejtos-react_budget_app"
                        description="Corporate budget allocation system with department management, multi-currency support, real-time calculations, and interactive controls built with React Context API and Bootstrap."
                      />
                    </div>
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>

      <SectionTitle
        title="Employee Registration System"
        caption="Built with Angular 18, Bootstrap and TypeScript"
        description="A comprehensive employee registration system featuring reactive forms validation, local storage persistence, route guards, profile picture uploads, and auto-suggestions. Built with Angular standalone components, reactive forms with nested form groups, and Bootstrap for responsive design."
        button={{
          title: 'View Project',
          href: 'https://malek-user-form-app.vercel.app/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access the source code for the Employee Registration System on GitHub."
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
                      title: 'malekluka/user-form-app - GitHub',
                      isActive: currentState === 'github',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <div className="pointer-events-auto">
                      <GitHubWireframe
                        author="malekluka"
                        license="MIT"
                        repository="user-form-app"
                        description="Modern employee registration system with Angular reactive forms, local storage persistence, route guards, profile uploads, and comprehensive form validation with auto-suggestions."
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