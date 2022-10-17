import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IFormInputs {
  email: string;
  password: string;
}

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<IFormInputs>();

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <input defaultValue="example@asd.com" {...register('email')} />
        <br />
        <br />
        <input type="password" {...register('password', {required: true})} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
