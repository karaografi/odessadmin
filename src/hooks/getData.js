import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const GetData = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [reset, setReset] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const result = await axios.get(url);
        setData(result.data);
        setLoading(false);
        setReset(false)
      } catch (error) {
        console.error(error);
        setError(error);
        setReset(false)
        setLoading(false);
      }
    }
    fetchData();
  }, [url, reset]);


  return { data, error, loading, setReset };
}

export default GetData