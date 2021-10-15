import Link from "next/link";
import Footer from "../../lib/components/Footer";

const Login = () => (
  <>
    <main>
      <h1>Raycast to Are.na</h1>
      <p>post to are.na from raycast!</p>
      <p>
        <Link href="/api/auth/arena">get an access token</Link>
      </p>
    </main>
    <Footer />
  </>
);

export default Login;
