import { useStrongPassword } from "6pp";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useErrors = (errors = []) => {
  useEffect(() => {
    errors.forEach(({ isError, error, fallback }) => {
      if (isError) {
        if (fallback) fallback();
        else toast.error(error.data.message || "Something Went Wrong");
      }
    });
  }, [errors]);
};

const useAsyncMutation = (mutatationHook) => {
  const [isLoading, setisLoading] = useState(false);
  const [Data, setData] = useState(null);

  const [mutate] = mutatationHook();

  const executeMutation = async (toastMessage, ...args) => {
    setisLoading(true);
    const toastId = toast.loading(toastMessage || "Updating Data... ");
    try {
      const res = await mutate(...args);
      if (res.data) {
        toast.success(res.data.message || "Updated Data Successfully" , {id:toastId});
        setData(res.data)
      } else {
        toast.error(res.error.data.message || "Something Went Wrong" , {id:toastId});
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    } finally {
      setisLoading(false);
    }
  };

  return [ executeMutation, isLoading, Data ];
};

const useSocketEvents = (socket , handlers)=>{
  useEffect(()=>{
    Object.entries(handlers).forEach(([event,handler])=>{
      socket.on(event , handler)
    })
    return ()=>{
      Object.entries(handlers).forEach(([event,handler])=>{
        socket.off(event , handler)
      })
    }
  },[socket , handlers])
}
export { useErrors, useAsyncMutation , useSocketEvents};
