import styles from "../styles/searchForm.module.css";

const SearchForm = () => {
  return (
    <>
      <form className={styles.form}>
        <input type="text" className={styles.search_input} />
        <button className={styles.btn_get}>Get</button>
      </form>
    </>
  );
};

export default SearchForm;
