import { Formik } from 'formik';

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.email = 'Required';
        } else if (!values.number) {
          errors.email = 'Required';
        } else if (
          !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
            values.name,
          )
        ) {
          errors.name = 'Invalid name';
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.number,
          )
        ) {
          errors.number = 'Invalid number';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ values, touched, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name}
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              onChange={handleChange}
              value={values.number}
            />
            {errors.number}
          </label>
          <button type="submit">Add contacts</button>
        </form>
      )}
    </Formik>
  );
}
