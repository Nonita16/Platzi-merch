import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState();
  let response = '';

  const API = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_API_KEY}&query=${address}&limit=1`;

  useEffect(async () => {
    response = await axios(API);
    setMap(response.data.data[0]);
  }, [response]);
  return map;
};

export default useGoogleAddress;
