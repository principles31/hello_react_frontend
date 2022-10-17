import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/ReducerFunction';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  const hundleGreetings = () => {
    dispatch(fetchGreetings());
  };

  const { greeting } = useSelector((state) => state.greetings);

  return (
    <>
      <p>{greeting}</p>
      <button type="button" onClick={hundleGreetings}>Random Greeting</button>
    </>
  );
};

export default Greeting;
