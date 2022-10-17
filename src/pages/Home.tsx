import React from 'react';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SubComponent1 from '../components/SubComponent1';
import SubComponent2 from '../components/SubComponent2';

interface IFormInputs {
  email: string;
  password: string;
}
// validation with yup
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(20).required(),
});

const Home = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <SubComponent1 />
          <br />
          <SubComponent2 />

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Home;
