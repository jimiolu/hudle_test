"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/validations";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Logging in:", data);
    // Implement API call or auth logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <Input
        label="Username or email address"
        type="text"
        {...register("email")}
        error={errors.email?.message}
      />
      <div>
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        {errors.password && (
          <div className="text-right mt-1">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-primary transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        )}
      </div>
      <Button
        label={isSubmitting ? "Logging in..." : "Login"}
        disabled={isSubmitting}
      />
    </form>
  );
}
