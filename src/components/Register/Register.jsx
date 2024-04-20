import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://pablo.byethost11.com/?i=1")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 w-full p-5 "
      style={{zIndex:1}}
    >
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex flex-col gap-3 items-center">
        <h3 className="capitalize text-neutral-200 font-semibold text-4xl">
          Sign Up
        </h3>
        <p className="text-base text-neutral-400">
          Sign up and start interacting with other developers
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <input
          {...register("name", { required: true })}
          className="bg-dark-grays outline-none placeholder:text-neutral-600 transition-all focus:ring-2 focus:ring-green-300/50 focus:border-green-500 border border-neutral-700 px-5 py-3 rounded-md text-sm text-neutral-200"
          type="text"
          placeholder="name"
        />
        <input
          {...register("username", { required: true })}
          className="bg-dark-grays outline-none placeholder:text-neutral-600 transition-all focus:ring-2 focus:ring-green-300/50 focus:border-green-500 border border-neutral-700 px-5 py-3 rounded-md text-sm text-neutral-200"
          type="text"
          placeholder="username"
        />
        <input
          {...register("email", { required: true })}
          className="bg-dark-grays outline-none placeholder:text-neutral-600 transition-all focus:ring-2 focus:ring-green-300/50 focus:border-green-500 border border-neutral-700 px-5 py-3 rounded-md text-sm text-neutral-200"
          type="text"
          placeholder="email"
        />
        <input
          {...register("password", { required: true })}
          className="bg-dark-grays outline-none placeholder:text-neutral-600 transition-all focus:ring-2 focus:ring-green-300/50 focus:border-green-500 border border-neutral-700 px-5 py-3 rounded-md text-sm text-neutral-200"
          type="text"
          placeholder="password"
        />

        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center gap-1">
            <label
              className="text-base capitalize text-neutral-400"
              htmlFor="male"
            >
              Male
            </label>
            <input
              {...register("gender", { required: false })}
              defaultChecked
              type="radio"
              value="male"
              id="male"
              name="gender"
            />
          </div>

          <div className="flex items-center gap-1">
            <label
              className="text-base capitalize text-neutral-400"
              htmlFor="female"
            >
              Female
            </label>
            <input
              {...register("gender", { required: false })}
              type="radio"
              value="female"
              id="female"
              name="gender"
            />
          </div>

          <div className="flex items-center gap-1">
            <label
              className="text-base capitalize text-neutral-400"
              htmlFor="other"
            >
              Other
            </label>
            <input
              {...register("gender", { required: false })}
              type="radio"
              value="other"
              id="other"
              name="gender"
            />
          </div>
        </div>
      </div>

      <button
        className="bg-green-500 text-white capitalize text-sm font-semibold rounded-md py-3"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};
