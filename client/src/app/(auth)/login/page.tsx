import React from "react";
import LoginForm from "../components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen bg-gray-100">
      <div className="root-container flex justify-center items-center h-full">
        <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center gap-5 w-full">
            <Image
              src="/logo/logo.svg"
              alt="Huddle Logo"
              width={100}
              height={100}
              className="size-10"
            />
            <h2 className="text-2xl font-semibold text-gray-800 font-viga mb-6">
              Welcome to Hudle!
            </h2>
            <LoginForm />
            <p className="mt-4 text-center text-sm text-gray-500">
              New to Hudle?&nbsp;
              <Link href="/signup" className="text-primary underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
