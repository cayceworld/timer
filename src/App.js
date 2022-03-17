import { useEffect, useState } from 'react';
import FormattedTime from './components/FormatedTime/FormattedTime';
import Container from './components/Container/Container';
import styles from './styles/app.scss';


const App = () => {


  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);


  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1000))
  };


  const stop = () => {
    clearInterval(timer);
  }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(time);
    };
  }, []);



  return (
    <Container>
      <FormattedTime>{time}</FormattedTime>
      
      <button className='button' onClick={start}>start</button>
      <button className='button' onClick={stop}>stop</button>
      <button className='button' onClick={reset}>reset</button>

    </Container>
  );
}

export default App;
