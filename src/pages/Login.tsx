import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        navigate("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        alert("Account created successfully.");
        setIsLogin(true);
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          SRIT Student Portal
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {isLogin ? "Sign in to continue" : "Create your account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="College Email"
            className="w-full border rounded-lg px-4 py-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 font-semibold transition"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Sign In"
              : "Create Account"}
          </button>

        </form>

        <div className="mt-6 text-center">

          <button
            onClick={()=>setIsLogin(!isLogin)}
            className="text-orange-600 hover:underline"
          >
            {isLogin
              ? "Create new account"
              : "Already have an account?"}
          </button>

        </div>

      </div>

    </div>
  );
}