import useFormInput from "./useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Emrul Hassan");
  const lastNameProps = useFormInput("Biplob");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <hr />
      <br />
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <hr />
      <br />
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
