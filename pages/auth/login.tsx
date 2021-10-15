import Link from "next/link";

const Login = () => (
  <main>
    <p>Log in to use</p>
    <p>
      <Link href="/api/auth/github">Sign in with github</Link>
      <Link href="/api/auth/arena">Sign in with are.na</Link>
    </p>
  </main>
);

export default Login;
