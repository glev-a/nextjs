import { Input } from 'antd';

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-1 self-start">Email:</p>
        <div className="mb-4">
          <Input />
        </div>
      </div>
    </main>
  );
}
