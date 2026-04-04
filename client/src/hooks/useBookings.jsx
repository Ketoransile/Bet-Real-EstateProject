import { useAuth } from "../context/AuthContext.jsx";
import { useContext, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { getAllBookings } from "../utils/api";
import UserDetailContext from "../context/UserDetailContext";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.email, userDetails?.token),
    onSuccess: (data) => {
      if (data) {
        setUserDetails((prev) => ({ ...prev, bookings: data }));
      }
    },
    enabled: !!user?.email && !!userDetails?.token,
    staleTime: 30000,
  });

  queryRef.current = refetch;
  useEffect(() => {
    if (userDetails?.token && queryRef.current) {
      queryRef.current();
    }
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useBookings;
