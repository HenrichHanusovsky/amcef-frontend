import { useEffect, useState } from "react";

export default function useFetch(url: string, isReady: boolean = true) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isReady) {
            return;
        }
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Could not fetch data");
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
                setData(null);
            });
    }, [url, isReady]);

    return { data, error, loading };
}
