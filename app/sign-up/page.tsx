import { Input } from 'antd';

export default function SignUp() {
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

        <p className="mb-1 self-start">Repeat password:</p>
        <div className="mb-6">
          <Input type="password" />
        </div>
      </div>
    </main>
  );
}
