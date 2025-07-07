import { cookies } from "next/headers";

/////////////////////////////////////////// AUTH CHECK ////////////////////////////////////////////
export const authCheck = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    }).then((res) => res.json());

    if (!res.ok) return null;

    const user = res.json();
    return user?.id ? user : null;
  } catch {
    return null;
  }
};

