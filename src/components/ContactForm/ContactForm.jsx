import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const capitializedName = (name) => {
      return name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    const newContact = {
      id: nanoid(),
      name: capitializedName(values.name),
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  const feedBackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedBackSchema}
    >
      <Form className={s.form}>
        <div className={s.field}>
          <label className={s.label}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            placeholder="Enter name"
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.field}>
          <label className={s.label}>Number</label>
          <Field
            className={s.input}
            type="tel"
            name="number"
            placeholder="Enter phone number"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
