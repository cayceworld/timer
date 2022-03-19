import { useEffect, useState } from 'react';
import FormattedTime from './components/FormatedTime/FormattedTime';
import Container from './components/Container/Container';
import Button from './components/Button/Button';

const App = () => {


  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);


  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 0.01);
    }, 10))
  };


  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);



  return (
    <Container>
      <FormattedTime>{time}</FormattedTime>
      <Button value={start}>start</Button>
      <Button value={stop}>stop</Button>
      <Button value={reset}>reset</Button>
    </Container>
  );
}

export default App;