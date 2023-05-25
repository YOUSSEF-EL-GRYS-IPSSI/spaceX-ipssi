import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/loaders/Loader";
import { toast } from "react-toastify";

export const Histoire = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/histry")
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Une erreur est survenue");
        console.log(err);
      });
  }, []);

  return <>{isLoading ? <Loader /> : <div>History</div>}</>;
};
