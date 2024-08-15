'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import AppHeader from '../components/AppHeader';

function AppHeaderContainer() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false);

  const onToggleMobileMenu = useCallback(() => {
    setIsMobileMenuVisible((state) => !state);
  }, []);

  return (
    <AppHeader isMobileMenuVisible={isMobileMenuVisible} onToggleMobileMenu={onToggleMobileMenu} />
  );
}

export default AppHeaderContainer;
