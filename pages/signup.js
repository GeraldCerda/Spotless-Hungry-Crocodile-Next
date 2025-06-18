import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Signup() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleSignup = async () => {
    try {
      setError(null);
      await signIn("google");
    } catch (err) {
      setError("Failed to sign up. Please try again.");
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
        <h2 style={{ textAlign: "center" }}>You're already signed in!</h2>
        <button
          onClick={() => router.push("/dashboard")}
          style={{ width: "100%", padding: 12, borderRadius: 6, background: "#22c55e", color: "#fff", fontWeight: 600, border: "none", marginTop: 24 }}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 400, margin: "80px auto", padding: 24, border: "1px solid #eee", borderRadius: 12 }}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <p style={{ textAlign: "center" }}>Create your account using Google</p>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <button
        onClick={handleSignup}
        style={{ width: "100%", padding: 12, borderRadius: 6, background: "#34A853", color: "#fff", fontWeight: 600, border: "none", marginTop: 24 }}
      >
        Sign up with Google
      </button>
    </div>
  );
}
