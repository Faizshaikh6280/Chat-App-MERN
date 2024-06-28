import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async function ({ username, password }) {
    const isValid = handleValidation({
      username,
      password,
    });

    if (!isValid) return;
    // call to api
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      // update in local storage
      if (data.status === "success") {
        localStorage.setItem("chat-user", JSON.stringify(data.user));
        // update the Auth context.
        setAuthUser(data.user);
        return data.user;
      } else {
        // it's an error
        throw data;
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

function handleValidation({ username, password }) {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters long.");
    return false;
  }
  return true;
}

export default useLogin;
