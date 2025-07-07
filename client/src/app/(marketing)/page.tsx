import React from "react";
import { authCheck } from "@/lib/auth";
import Dashboard from "../(protected)/dashboard";
import Landing from "./landing";

const App = async () => {
  const user = await authCheck();

  return user ? <Dashboard user={user} /> : <Landing />;
};

export default App;
