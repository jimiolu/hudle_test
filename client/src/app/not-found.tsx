import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = async () => {
  return (
    <div className="root-container h-[calc(100vh-64px)]">
      <div className="flex flex-col gap-5 items-center justify-center h-full">
        <Image src="/404/not-found.svg" alt="404" width={500} height={500} />
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-extrabold text-2xl md:text-3xl">
            We can&apos;t find that page.
          </h2>
          <p className="text-gray-500 font-medium">
            Could not find requested resource on Hudle&nbsp;
          </p>
          <Link href="/" className="underline text-gray-800">
            view homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
