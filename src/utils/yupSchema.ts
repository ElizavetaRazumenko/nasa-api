import * as yup from "yup";


const yupSchema = yup.object().shape({
  date: yup.string().matches(
    /^(?:\d{4}-\d{2}-\d{2})$|^(?:\d{4}-\d{2}-\d{2} - \d{4}-\d{2}-\d{2})$/,
    'Enter the date in the format YYYY-MM-DD or YYYY-MM-DD - YYYY-MM-DD')

});

export default yupSchema;