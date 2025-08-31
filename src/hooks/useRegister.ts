import { useState } from "react";

export function useRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 Estado de carga

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true); // 🔹 Activa el estado de carga

    if (!email || !password || !user || !phone) {
      setError("Por favor llena todos los datos");
      setLoading(false); // 🔹 Asegura que loading se desactive
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          email,
          phone,
          password,
        }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Error al registrar usuario");

      console.log("Usuario registrado:", data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false); // 🔹 Desactiva el loading
    }
  };

  return {
    showPassword,
    togglePassword,
    user,
    setUser,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    loading, // 🔹 Devuelve loading para deshabilitar botones si es necesario
  };
}
