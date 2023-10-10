import { FormEvent, useState } from 'react';

function getFormValues(e: FormEvent<HTMLFormElement>) {
  return Array.from<{ name: string; value: string }>(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    (e.target as any).elements
  )
    .filter((formItem) => formItem.name !== '')
    .reduce((acc, elt) => {
      return { ...acc, [elt.name]: elt.value };
    }, {});
}

export function App() {
  const [registered, setRegistered] = useState<boolean>(false);
  // const [emailError, setEmailError] = useState<string | undefined>(undefined);
  // const [passwordError, setPasswordError] = useState<string | undefined>(
  //   undefined
  // );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues = getFormValues(e);

    fetch('http://localhost:3333/signup', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((e) => {
      console.log('RECEIVED response', e);
      setRegistered(true);
    });
  };

  if (registered) {
    return (
      <div
        className={
          'flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-200'
        }
      >
        <p className="text-3xl font-bold text-center">You're in!</p>
      </div>
    );
  }

  return (
    <div
      className={
        'flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-200'
      }
    >
      <p className="text-3xl font-bold text-center">Register for Geekcamp!</p>

      <form
        onSubmit={handleSubmit}
        className={
          'flex flex-col gap-6 mx-auto max-w-md p-8 rounded-lg bg-gray-100 shadow-lg'
        }
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className={'flex flex-col gap-1'}>
            Email:
          </label>
          <input
            type="text"
            id={'email'}
            name={'email'}
            placeholder={'john.doe@example.com'}
            className={'py-1 px-2'}
          />
          <div className={'h-6'}>
            {/*{emailError && (*/}
            {/*  <p className="text-red-400">{emailError}</p>*/}
            {/*)}*/}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className={'flex flex-col gap-1'}>
            Password:
          </label>
          <input
            type="text"
            id={'password'}
            name={'password'}
            placeholder={'••••••••'}
            className={'py-1 px-2'}
          />
          <div className={'h-6'}>
            {/*{passwordError && (*/}
            {/*  <p className="text-red-400">{passwordError}</p>*/}
            {/*)}*/}
          </div>
        </div>
        <button
          className={
            'text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600 ring-offset-2 focus-visible:ring-2 py-2 rounded'
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
