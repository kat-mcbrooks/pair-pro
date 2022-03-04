import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Me = () => {
  const [me, setMe] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/me`)
      .then(res => {
        const me = res.data;
        setMe(me);
      })
  }, [])

  return (
    <ul>
      {
        me
          .map(my =>
            <>
              <li key={`${my._id}N`}>Name: {my.name}</li>
              <li key={`${my._id}L`}>Languages: {my.languages}</li>
              <li key={`${my._id}B`}>Bio: {my.bio}</li>
              <br></br>
            </>
          )
      }
    </ul>
  )
}

export default Me
