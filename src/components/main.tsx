/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ad9FhogGAQB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import Link from "next/link";
import Footer from "./sections/footer";
import Social from "./sections/social";
import { prefix } from "../utils/prefix";
import { DescriptionCard } from "./DescriptionCard";

export default function Main() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          className="flex gap-x-4 items-center justify-center"
          href="https://twitter.com/ChukwumaNwaugha"
          target="_blank"
        >
          <img
            className="object-contain object-center rounded-md"
            width="50"
            height="50"
            src={`${prefix}/images/dev_avatar.png`}
            alt="Chukwuma Nwaugha Avatar"
          />
          <h1 className="text-gray-600 font-medium">Chukwuma NWAUGHA</h1>
          <span className="sr-only">Chukwuma Nwaugha</span>
        </Link>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Software Product Engineer
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {/* I'm a passionate and creative Frontend Developer with a love for crafting beautiful and performant web
                  experiences. */}
                  {`Product & Full Stack Engineer. Focused on building delightful AI-powered apps for the next billion users.`}
                  {/* 
                  Find my recent posts on <Link className="hover:underline" href="https://medium.com/@c.nwaugha">
                  medium
                  </Link> */}
                </p>
                <div className="my-4">
                  <Social />
                </div>
                {/* <p className="mt-4 text-gray-500/60 animate-bounce">
                  [Site rework In Progress]
                </p> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    My Projects
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Recent ventures - click on the link to learn more.
                  </p>
                </div>
              </div>
              {/* <div className="grid gap-4 min-[400px]:grid-cols-2 lg:order-last"> */}
              <div className="grid gap-4 md:gap-y-4 place-items-start gap-y-6 grid-cols-1 md:grid-cols-2 lg:order-last">
                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">VeedoAI</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`VeedoAI is an AI-powered platform that provides deep insights for video content, using state of the art Generative AI and Large Language Models.`}
                  </p>
                </div> */}

                <DescriptionCard
                  title="VeedoAI"
                  role="Founder and Product Engineer"
                  link="https://veedo.ai"
                >
                  {`AI-powered insights for video content`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project Two</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`Description of project two. I worked with a great team to bring this project to life and we're
                    really proud of the result.`}
                  </p>
                </div> */}

                <DescriptionCard
                  title="Bible Links"
                  role="Creator; AI Engineer"
                  link="https://bible-links.vercel.app"
                >
                  {`AI-driven bible study guide and companion`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project Three</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of project three. This project allowed me to experiment with some new technologies and I
                    learned a lot in the process.
                  </p>
                </div> */}

                <DescriptionCard
                  title="Cayalx"
                  role="Product Engineer"
                  link="https://cayalx.com"
                >
                  {`Car hire and ride-share service that puts riders & drivers in control of their experience`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Project Four</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description of project four. I really enjoyed working on this project and I think it shows in the
                    final result.
                  </p>
                </div> */}

                <DescriptionCard
                  title="Goldmine"
                  role="Creator"
                  link="https://goldmine-ai.vercel.app"
                >
                  {`Relevant daily news and newsletters, adapated AI`}
                </DescriptionCard>

                <DescriptionCard
                  title="Ex: Latitude+Lumiere"
                  role="Staff Software Engineer"
                  link="https://latd.com"
                >
                  {`AI-propelled viewer feedback, advanced analytics and human-generated intelligence company`}
                </DescriptionCard>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Hobbies and Interests
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {`Things I do when I'm not building or experimenting with new technologies.`}
                  </p>
                </div>
              </div>
              {/* <div className="grid gap-4 min-[400px]:grid-cols-2 lg:order-last"> */}
              <div className="grid gap-4 md:gapy-4 place-items-start gap-y-6 grid-cols-1 md:grid-cols-2 lg:order-last">
                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">HTML/CSS</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`I'm a master of the fundamentals. I can write clean, semantic HTML and style it with beautiful,
                    responsive CSS.`}
                  </p>
                </div> */}

                <DescriptionCard
                  title="Technical Articles"
                  link="https://medium.com/@c.nwaugha"
                >
                  {`I love to share my knowledge and experiences with others. You can find my posts & articles on Medium and Notion`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">JavaScript</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {`I love working with JavaScript to create interactive and dynamic user experiences. I'm comfortable
                    with frameworks like React and Vue.`}
                  </p>
                </div> */}

                <DescriptionCard title="Hiking">
                  {`I love to hike and explore the outdoors. I find it's a great way to clear my mind and get some exercise.`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Accessibility</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I believe the web should be accessible to all. I make sure my sites are keyboard navigable, screen
                    reader friendly, and have high contrast modes.
                  </p>
                </div> */}

                <DescriptionCard title="Prayer & Meditation">
                  {`I'm a Christian and Catholic. I love to pray and meditate to keep God's words close to mind.`}
                </DescriptionCard>

                {/* <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Performance</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I know the importance of a fast website. I optimize my assets, lazy load images, and use performance
                    budgets to keep my sites running smoothly.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
