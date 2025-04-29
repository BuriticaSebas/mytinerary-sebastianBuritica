import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [countryOptions, setCountryOptions] = useState([]);

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/americas")
      .then((res) => res.json())
      .then((data) => {
        const countries = data
          .map((c) => ({
            value: c.name.common,
            label: c.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountryOptions(countries);
      });
  }, []);

  useEffect(() => {
    register("country", { required: "Este campo es obligatorio" });
  }, [register]);

  const handleCountryChange = (selectedOption) => {
    setValue("country", selectedOption?.value, { shouldValidate: true });
  };

  return (
    <div className="min-h-screen p-3 flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <input
            type="text"
            placeholder="Nombre"
            {...register("name", { required: "Este campo es obligatorio" })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="text"
            placeholder="Apellido"
            {...register("lastname", { required: "Este campo es obligatorio" })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Este campo es obligatorio" })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                message:
                  "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número",
              },
            })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="url"
            placeholder="URL de Foto"
            {...register("urlPhoto", { required: "Este campo es obligatorio" })}
            className="w-full p-2 border rounded-md border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.urlPhoto && (
            <p className="text-red-500 text-sm">{errors.urlPhoto.message}</p>
          )}

         
          <div>
            <Select
              options={countryOptions}
              onChange={handleCountryChange}
              placeholder="Selecciona un país..."
              className="text-sm"
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-1/2 m-auto bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
           <Link to = "/">Submit</Link>
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="font-bold text-gray-600">
            ¿Are you already registered?
          </p>
          <p className="text-gray-300 hover:text-gray-400 cursor-pointer">
          <Link to = "/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
