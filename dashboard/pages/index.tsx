import type { NextPage } from "next";
import { useAppDispatch } from "@/src/hooks";
import AdminsDashboard from "@/src/admins/AdminsDashboard";
import { useEffect } from "react";
import { set } from "@/src/admins/thunks";

const Index: NextPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(set());
  });
  return <AdminsDashboard />;
};

export default Index;
