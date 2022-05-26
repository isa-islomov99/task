import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveDataToStore, setLoading } from "../redux/item/itemAction";
import ErrorHandler from "../components/error/ErrorHandler";

export default async function useFetch(url) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        dispatch(saveDataToStore(response.data));
      } catch (err) {
        ErrorHandler("Something went wrong");
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, [url]);
}
