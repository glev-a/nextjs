import Routes from '@/constants/routes';
import Link from 'next/link';

type Props = {
  title: string;
  path: Routes;
};

function AppHeaderItem({ title, path }: Props) {
  return (
    <li className="mr-3">
      <Link className="inline-block px-4 py-2 text-white no-underline" href={path}>
        {title}
      </Link>
    </li>
  );
}

export default AppHeaderItem;
