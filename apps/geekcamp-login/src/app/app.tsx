
export function App() {
  return (
    <div className={'flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-200'}>
      <p className="text-3xl font-bold">Register for Geekcamp!</p>


      <form className={'flex flex-col gap-8 mx-auto max-w-md p-8 rounded-lg bg-gray-100 shadow-lg'}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className={'flex flex-col gap-1'}>Email:</label>
          <input type="text" placeholder={'john.doe@example.com'} id={'email'} name={'email'} className={'py-1 px-2'} />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className={'flex flex-col gap-1'}>Password:</label>
          <input type="text" placeholder={'••••••••'} id={'password'} name={'password'} className={'py-1 px-2'} />
        </div>
        <button className={'text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600 ring-offset-2 focus-visible:ring-2 py-2 rounded'}>Submit</button>
      </form>
    </div>
  );
}

export default App;
