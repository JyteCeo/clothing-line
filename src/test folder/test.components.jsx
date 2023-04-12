import { useState , useEffect } from 'react';

// function Counter() {
//   const [count, setCount] = useState(1);

//   function handleClick() {
//     setCount(count + 1);
//     console.log(count)
//   }

//   return (
//     <div>
//       <p>You clicked the button {count} times.</p>
//       <button onClick={handleClick}>Click me!</button>
//     </div>
//   );
// }
function Counter() {
  const [quote, setQuote] = useState('');
  // const [data, setData] = useState('');

  const getData = () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => setQuote(data.content));
  }

  // useEffect(() => {
  //   fetch('https://api.quotable.io/random')
  //     .then(response => response.json())
  //     .then(data => setQuote(data.content));
  // }, []);

  return (
    <div>
      <i>{quote}</i>
      <button onClick={getData}>Get Quote</button>
    </div>
  );
}


export default Counter;