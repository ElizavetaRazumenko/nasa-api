import { Form, useForm } from "react-hook-form";
import styles from "./searchForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import yupSchema from "@/utils/yupSchema";

interface SearchFormProps {
  setInputDate: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchForm = ({ setInputDate }: SearchFormProps) => {
  const { register, handleSubmit, getValues, setValue, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      date: "",
    },
    resolver: yupResolver(yupSchema),
  });

  const { errors } = formState;

  const submitForm = () => {
    setInputDate(getValues("date") || null);
    setValue("date", "");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          {...register("date")}
          className={styles.search_input}
        />
        <button className={styles.btn_get}>Get</button>
      </form>
      <p className={styles.error_message}>{errors.date?.message}</p>
    </>
  );
};

export default SearchForm;
