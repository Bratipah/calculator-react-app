import React, {useState} from 'react'


const Calc = () => {
    const [display, setDisplay] = useState("");
    const [expression, setExpression] = useState([]); 

    const handleClick = value => {
        setDisplay(value);
        setExpression([...expression, value]);
    };
      
    const handleResult = () => {
        const result = expression
          .join("")
          .split(/(\D)/g)
          .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
          .reduce((acc, value, index, array) => {
            switch (value) {
              case "+":
                return (acc = acc + array[index + 1]);
              case "-":
                return (acc = acc - array[index + 1]);
              case "x":
                return (acc = acc * array[index + 1]);
              case "÷":
                return (acc = acc / array[index + 1]);
            case ".":
                return (acc = acc . array[index + '.']);
            case "!":
                return (0);
                
              default:
                return acc;
            }
          });
        setDisplay(result);
        setExpression("");
      }
    
    

  return (
    <>
    <div class="min-h-max bg-white-200 flex items-center justify-center">

{/*calculator*/}

<div class="bg-black -400 border-1 border-black -900 shadow-2xl rounded">

  {/*form goes here*/}
  <div class=" p-8 pb-0 rounded-t-lg outline-none text-white text-right text-xl bg-purple-800"><span class="text-orange-500">{expression}</span></div>
      <div class="p-8 text-white text-right text-xl bg-purple-800 font-mono">= <span class="text-orange-500">{display}</span></div>
      {/* <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6"/> */}

  {/* <form class="border-b-2 border-gray-900">
    <input type="number" class="bg-transparent p-8 rounded-t-lg outline-none focus:bg-purple-400 text-3xl text-right text-white font-mono"/>
  </form> */}

  {/*buttons*/}

  <div class="p-6 text-black-800 grid grid-cols-4 gap-3 text-xl">
  <button onClick={() => handleClick('error!')} class="font-mono bg-neutral-500 hover:bg-gray-400 rounded-full p-5">C</button>
    <button onClick={() => handleClick('+/-')} class="font-mono bg-neutral-500 hover:bg-gray-400 rounded-full p-5">/</button>
    <button onClick={() => handleClick('%')}  class="font-mono bg-neutral-500 hover:bg-gray-400 rounded-full p-5">%</button>
    <button onClick={() => handleClick('÷')}  class="font-mono bg-fuchsia-950 hover:bg-purple-400 rounded-full p-5">&divide;</button>

    <button onClick={() => handleClick(1)} class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">1</button>
    <button onClick={() => handleClick(2)} class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">2</button>
    <button onClick={() => handleClick(3)} class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">3</button>
    <button onClick={() => handleClick('x')} class="font-mono bg-fuchsia-950 hover:bg-purple-400 rounded-full p-5">x</button>

    <button onClick={() => handleClick(4)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">4</button>
    <button onClick={() => handleClick(5)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">5</button>
    <button onClick={() => handleClick(6)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-5">6</button>
    <button onClick={() => handleClick('-')}class="font-mono bg-fuchsia-950 hover:bg-purple-400 rounded-full p-5">-</button>

    <button onClick={() => handleClick(7)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-3">7</button>
    <button onClick={() => handleClick(8)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-3">8</button>
    <button onClick={() => handleClick(9)}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-3">9</button>
    <button onClick={() => handleClick('+')}class="font-mono bg-fuchsia-950 hover:bg-purple-400 rounded-full p-5">+</button>

    <button onClick={() => handleClick(0)}class="font-mono col-span-2 bg-zinc-900 hover:bg-gray-400 rounded-full p-5">0</button>
    <button onClick={() => handleClick('.')}class="font-mono bg-zinc-900 hover:bg-gray-400 rounded-full p-3">.</button>
    <button onClick={() => handleResult()}class="font-mono bg-fuchsia-950 hover:bg-purple-400 rounded-full p-5">=</button>
  </div>
</div>

</div>
</>
    
  )
}

export default Calc;
