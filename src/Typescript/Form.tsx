import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Form = () => {
  const AuthSchemaValidators = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 chars" }),
  });

  type TAuthSchemaValidators = z.infer<typeof AuthSchemaValidators>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthSchemaValidators>({
    resolver: zodResolver(AuthSchemaValidators),
  });

  const onSubmit = ({ email, password }: TAuthSchemaValidators) => {
    console.log({ email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col p-5 border rounded">
          <div className="text-sm flex flex-col items-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border rounded p-1 "
              placeholder="you@example.com"
              {...register("email")}
            />
          </div>
          <div className="text-sm flex flex-col items-start">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border rounded p-1"
              placeholder="********"
              min={8}
              {...register("password")}
            />
          </div>
        </div>
        <button className="bg-gray-600 text-white py-1">Sign up</button>
      </form>
    </div>
  );
};

export default Form;
