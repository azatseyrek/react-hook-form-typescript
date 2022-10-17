import React, {FC} from 'react';
import {useFormContext, Controller} from 'react-hook-form';
import {TextField} from '@mui/material';

const SubComponent2: FC = () => {
  const {
    control,
    formState: {errors},
  } = useFormContext();
  return (
    <div>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({field}) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
        )}
      />
    </div>
  );
};

export default SubComponent2;
