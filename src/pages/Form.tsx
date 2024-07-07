// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { createAccount } from "../appwrite/authentication/authen";
import { useNavigate } from "react-router-dom";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "../hooks/mutationLogin";

type FormType = {
  name: string;
  email: string;
  password: string;
};

const schema: ZodType<FormType> = z.object({
  name: z.string().min(3).max(12),
  email: z.string().email(),
  password: z.string().min(5).max(10),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const { mutate,data } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const formHandle: SubmitHandler<FormType> = async (inputDet) => {
    // console.log(inputDet);
     mutate();
    if (inputDet) {
      const res = await createAccount(inputDet);
      console.log(res);
      res ? navigate("/") : null;
    }
  };

  const btnHandle = async () => {
  mutate();
  localStorage.setItem("guest_session_id",data.guest_session_id)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(formHandle)}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-2"
        >
          Name:
        </label>
        <input
          type="text"
          placeholder="Jhonny"
          {...register("name")}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        />

        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          placeholder="jhonny@gmail.com"
          {...register("email")}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        />

        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          {...register("password")}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
        >
          Submit
        </button>
        <button
          className=" mt-3 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-200"
          onClick={btnHandle}
        >
          Click Me
        </button>
      </form>
    </div>
  );
};

export default Form;
