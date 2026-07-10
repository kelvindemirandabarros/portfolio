import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export interface NavLinkInterface {
  href: string;
  title: string;
}

export function NavLink({ href, title }: NavLinkInterface) {
  const router = useRouter();
  const pathname = usePathname();

  const handle_click = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    const target_id = href.replace(/^\/?#/, '');
    const target_element = document.getElementById(target_id);

    if (target_element) {
      target_element.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', href);
    } else {
      console.warn(`Elemento com id="${target_id}" não encontrado na página.`);
    }
  };

  return (
    <Link
      href={pathname === '/' ? href : `/${href}`}
      onClick={handle_click}
      className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounder md:p-0 hover:text-white'
    >
      {title}
    </Link>
  );
}
