import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async function ({
    name,
    username,
    password,
    confirmPassword,
    gender,
  }) {
    const isValid = handleValidation({
      name,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!isValid) return;
    // call to api
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: name,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      // update in local storage
      if (data.status === "success") {
        localStorage.setItem("chat-user", JSON.stringify(data.user));
        // update the Auth context.
        setAuthUser(data.user);
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

  return { loading, signup };
}

function handleValidation({
  name,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!name || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password is not matching");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters long.");
    return false;
  }
  return true;
}

export default useSignup;
