import * as yup from "yup";


const yupSchema = yup.object().shape({
  date: yup.string().matches(
    /^(?:\d{4}-\d{2}-\d{2})$|^(?:\d{4}-\d{2}-\d{2} - \d{4}-\d{2}-\d{2})$/,
    'Enter the date in the format YYYY-MM-DD or YYYY-MM-DD - YYYY-MM-DD')  
    .test('isValidDate', 'Enter a date between 1995 and the current date', function (value) {
      const startDate = new Date('1995-01-16');
      const currentDate = new Date();
  
      if (!value) {
        return true;
      }
  
      if (value.includes(' - ')) {
        const [start, end] = value.split(' - ');
        const startDateValid = new Date(start);
        const endDateValid = new Date(end);
  
        return startDateValid >= startDate && endDateValid <= currentDate;
      } else {
        const singleDate = new Date(value);
        return singleDate >= startDate && singleDate <= currentDate;
      }
    })

});

export default yupSchema;