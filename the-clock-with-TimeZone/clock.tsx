import { FC, constructor, useEffect, useState } from 'react'

interface ITimeBarProps {
}


const clockTimeBar: FC<ITimeBarProps> = (props) => {

  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
      const date = new Date();
      const h = date.getUTCHours() + 4; // For Tehran Time Zone
      const m = date.getUTCMinutes() - 30;
      const s = date.getUTCSeconds();

      return `${zeroPad(h, 2)}:${zeroPad(m, 2)}:${zeroPad(s, 2)}`;
  }

  function zeroPad(num, places) {
      const zero = places - num.toString().length + 1;
      return Array(+(zero > 0 && zero)).join("0") + num;
  }

  useEffect(() => {
      const intervalID = setInterval(
          () => setTime(getCurrentTime()),
          1000
      );

      return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
        {time}
    </div>
  )
}

export default clockTimeBar
