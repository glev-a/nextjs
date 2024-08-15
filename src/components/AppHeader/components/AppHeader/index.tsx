'use client';

import Routes from '@/constants/routes';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import AppHeaderItem from '../AppHeaderItem';
import MenuIcon from '../MenuIcon';

type Props = {
  isMobileMenuVisible: boolean;
  onToggleMobileMenu: () => void;
};

function AppHeader({ isMobileMenuVisible, onToggleMobileMenu }: Props) {
  return (
    <nav className="pin-t fixed z-10 flex w-full flex-wrap items-center justify-between bg-gray-900 p-6">
      <Link className="text-2xl text-white" href="/">
        Cool name
      </Link>

      <button
        id="nav-toggle"
        className="flex items-center rounded border px-3 py-2 hover:border-white md:hidden"
        onClick={onToggleMobileMenu}
      >
        <MenuIcon />
      </button>

      <div
        className={`w-full flex-grow pt-6 md:block md:flex md:w-auto md:items-center md:pt-0 ${!isMobileMenuVisible && 'hidden'}`}
        id="nav-content"
      >
        <ul className="list-reset flex-1 items-center justify-end md:flex">
          <AppHeaderItem title="Link 1" path={Routes.Main} />
          <AppHeaderItem title="Link 2" path={Routes.Main} />
          <AppHeaderItem title="Link 3" path={Routes.Main} />
        </ul>
      </div>
    </nav>
  );
}

export default AppHeader;
