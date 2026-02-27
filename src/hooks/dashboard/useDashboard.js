import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../auth/useAxiosSecure";

export const useDashboard = () => {
  const axiosSecure = useAxiosSecure();
  // Query configuration shared object
  const dashboardOptions = {
    queryKey: ["overview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/dashboard");
      return res?.data;
    },
  };
  // Overview data extraction
  const { data: overview = {} } = useQuery({
    ...dashboardOptions,
    select: (data) => data?.overview || {},
  });

  // 2. Analytics data extraction
  const { data: analytics = [] } = useQuery({
    ...dashboardOptions,
    select: (data) => data?.analytics || [],
  });

  // 3. User data extraction
  const { data: users = [] } = useQuery({
    ...dashboardOptions,
    select: (data) => data?.users || [],
  });

  // 4. Products data extraction
  const { data: products = [] } = useQuery({
    ...dashboardOptions,
    select: (data) => data?.products || [],
  });

  // main query for Loading and Error state manage
  const { isLoading: oLoading, isError: oError } = useQuery(dashboardOptions);
  return { overview, analytics, users, products, oLoading, oError };
};
