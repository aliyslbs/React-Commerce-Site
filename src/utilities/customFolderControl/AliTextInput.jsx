import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function AliTextInput({...probs}) {
    const [field, meta] = useField(probs)
  return (
    <div>
        <FormField error={meta.touched && !! meta.error}>
            <input {...field} {...probs}/>
            {meta.touched && !! meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ): null}

        </FormField>
        
    </div>
  )
}
