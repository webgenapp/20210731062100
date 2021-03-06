import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Icecream } from '../types'

type CreateProps = {
  icecream?: Icecream
  onSubmit: (values: Icecream, helpers: FormikHelpers<Icecream>) => void
}

function IcecreamForm({ icecream, onSubmit }: CreateProps) {
  const initialValues: Icecream = {
    name: icecream ? icecream.name : '',
    flavour: icecream ? icecream.flavour : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='name' placeholder='Name' />

          <Field type='text' name='flavour' placeholder='Flavour' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default IcecreamForm
