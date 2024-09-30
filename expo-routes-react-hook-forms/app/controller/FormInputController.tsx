import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, {FC} from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form'
import { KeyboardTypeOptions } from 'react-native'

interface FormInputControllerProps{
    control: Control<FieldValues>;
    errors?: FieldErrors<FieldValues>;
    name: string,
    placeholder: string;
    props?: TextInputProps;
    keyboardType: KeyboardTypeOptions;
}

const FormInputController: FC<FormInputControllerProps> = ({control, errors, name, placeholder, props, keyboardType}) => {
  return (
    <>
      <Controller name={name}
    control={control}
    render={({field: {onChange, onBlur, value}}) => (
        <TextInput 
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange} 
        {...props}
        keyboardType={keyboardType}
        />
    )}
    />

    {errors && errors[name] && <Text style={styles.textError}>{errors[name]?.message} </Text>}
  </>
  )
}

export default FormInputController

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        width: '90%',
        marginTop: 18,
        color: 'grey'
    },

    textError: {
        color: 'red',
    },
})