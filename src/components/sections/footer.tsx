import React from 'react'
import {LinkedinIcon, Github } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Chukwuma Nwaugha. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-850"
            href="#"
          >
            <LinkedinIcon />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-850"
            href="#"
          >
            <Github />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-850"
            href="#"
          >
            <TwitterIcon width={18} />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </footer>
    )
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 1227"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path
				d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
				fill="currentColor"
			></path>
		</svg>
	)
}
