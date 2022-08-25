
import { useEffect, MutableRefObject } from 'react';
import { useState } from 'react';
import axios, { Axios, } from 'axios';

// interface http { get, post, delete, patch, put }
// enum CardinalDirections {
//     update,
//     get,
//     post,
//     delete
// }
const useIsMounted = (URL: string, method: string) => {
    // const param: any = methods
    const [datos, setdatos] = useState<any>();
    const [isloading, setisloading] = useState(false);
    const [err, seterr] = useState<any>();
    // const [cancelToken,] = useState(axios.CancelToken.source());
    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        setisloading(true);
        const getData = () => {
            axios(URL, {
                cancelToken: cancelToken.token,
                method: method
            })
                .then(({ data }) => {
                    setdatos(data);
                    // console.log("montado", data);
                    // setisloading(false);
                })
                .catch((err) => {
                    seterr(err)
                    // console.log("es este error : ", err)
                })
        }
        getData()

        return () => cancelToken.cancel();
    }, []);
    return { datos, isloading, err };
};

export default useIsMounted;