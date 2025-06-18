import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleLogin = async () => {
    try {
      setError(null);
      await signIn("google");
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    }
  };

  if (status === "loading") {
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (session) {
    return (
      <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, border: "1px solid #eee", borderRadius: 12 }}>
        <h2 style={{ textAlign: "center" }}>Welcome!</h2>
        <p style={{ textAlign: "center" }}>Signed in as {session.user.email}</p>
        <button
          onClick={() => signOut()}
          style={{ width: "100%", padding: 12, borderRadius: 6, background: "#f87171", color: "#fff", fontWeight: 600, border: "none", marginTop: 24 }}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, border: "1px solid #eee", borderRadius: 12 }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: 12, borderRadius: 6, background: "#4285F4", color: "#fff", fontWeight: 600, border: "none", marginTop: 24 }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
