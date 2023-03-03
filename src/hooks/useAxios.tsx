import { useEffect, useState } from "react";

const useAxios = (configObj: any) => {

    const {
        axiosInstance, 
        method, 
        url, 
        requestConfig = {}
    } = configObj; 

    const [res, setRes] = useState([]); 
    const [err, setErr] = useState(``); 
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const controller = new AbortController(); 

        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig, 
                    signal: controller.signal
                }); 
                console.log(res); 
                setRes(res.data); 
            } catch (err: any) {
                console.log(err.message); 
                setErr(err.message); 
            } finally {
                setLoading(false); 
            }
        }

        fetchData(); 

        //cleanUp function 

        return () => controller.abort(); 

    }, []); 

    return [res, err, loading]; 

}

export default useAxios; 