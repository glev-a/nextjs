import { Input } from 'antd';
import Link from 'next/link';

export default function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-1 self-start">Email:</p>
        <div className="mb-4">
          <Input />
        </div>

        <p className="mb-1 self-start">Password:</p>
        <div className="mb-6">
          <Input type="password" />
        </div>

        <Link href={'/forgot-password'}>
          <p className="text-xs text-cyan-200">Forgot password?</p>
        </Link>
      </div>
    </main>
  );
}
