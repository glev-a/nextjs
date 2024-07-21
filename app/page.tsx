import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      <div className="mx-auto flex w-full flex-col items-center px-4 md:w-auto">
        <p className="mb-4">Cool text</p>
        <p className="mb-8">Cool image</p>
        <div className="flex w-full flex-col md:w-80 md:flex-row md:justify-between">
          <Link href={'/sign-in'}>
            <Button className="mx-auto mb-4 w-full md:mb-0 md:w-36" type="primary">
              Sign In
            </Button>
          </Link>

          <Link href={'/sign-up'}>
            <Button className="mx-auto w-full md:w-36" type="default">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
