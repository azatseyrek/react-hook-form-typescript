import React, {FC} from 'react';
import {useFormContext, Controller} from 'react-hook-form';
import {TextField} from '@mui/material';

const SubComponent1: FC = () => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <div>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({field}) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        )}
      />
    </div>
  );
};

export default SubComponent1;
