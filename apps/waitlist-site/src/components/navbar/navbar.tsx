import Link from 'next/link';
import Logo from '../logo/logo';

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <nav className="firefox:bg-opacity-90 sticky top-0 z-30  bg-opacity-50 px-10 backdrop-blur backdrop-filter">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between border-b border-gray-100 py-5">
        <span>
          <Logo />
        </span>
        <div className="space-x-4">
          <a
            target="_blank"
            href="https://twitter.com/mahadwar_sahil"
            rel="noreferrer"
          >
            <button
              type="button"
              className="duration-0.15 flex select-none items-center rounded-lg bg-brand-600 px-6 py-2.5 text-center text-sm font-medium text-white transition ease-in hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-1 mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                />
              </svg>
              Follow On Twitter
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
