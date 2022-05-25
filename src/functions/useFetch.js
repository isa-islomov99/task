// // import axios from "axios";
// // // import { BaseUrl } from "../BaseUrl";

// // const fetchData = async (url, method = "GET", data = null, id = null) => {
// //   if (url) {
// //     try {
// //       await axios({
// //         url,
// //         method: method,
// //         // data: data,
// //       });
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   }
// // };

// // export default fetchData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { saveDataToStore } from "../redux/item/itemAction";
// import ErrorHandler from "../components/error/ErrorHandler";

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         console.log(response);
//         setData(response.data);
//         dispatch(saveDataToStore(response.data));
//       } catch (err) {
//         setError(err);
//         ErrorHandler("Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [url]);

//   return { data, error, loading };
// }

// import axios from "axios";
// // import { BaseUrl } from "../BaseUrl";

// const fetchData = async (url, method = "GET", data = null, id = null) => {
//   if (url) {
//     try {
//       await axios({
//         url,
//         method: method,
//         // data: data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }
// };

// export default fetchData;

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveDataToStore, setLoading } from "../redux/item/itemAction";
import ErrorHandler from "../components/error/ErrorHandler";

export default async function useFetch(url) {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        // setLoading(true);
        dispatch(setLoading(true));
        const response = await axios.get(url);
        dispatch(saveDataToStore(response.data));
      } catch (err) {
        ErrorHandler("Something went wrong");
      } finally {
        // setLoading(false);
        dispatch(setLoading(false));
      }
    })();
  }, [url]);

  return { loader };
}
