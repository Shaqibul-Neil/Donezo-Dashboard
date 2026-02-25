import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../auth/useAxiosSecure";

export const useDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: dashboard = [],
    isLoading: oLoading,
    isError: oError,
  } = useQuery({
    queryKey: ["overview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/dashboard");
      return res?.data;
    },
  });
  return { dashboard, oLoading, oError };
};
