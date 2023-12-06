import * as yup from "yup";

export const drawerFormValidator = yup
  .object({
    name: yup.string().required("Name is required"),
    brand: yup.string().required("Brand is required"),
    price: yup
      .number()
      .typeError("Price must be a number")
      .integer()
      .positive()
      .required("Price is required"),
    size: yup
      .number()
      .typeError("Size must be a number")
      .positive()
      .required("Size is required"),
    year: yup
      .number()
      .typeError("Year must be a number")
      .integer()
      .positive()
      .max(
        new Date().getFullYear(),
        "Year must be current year or lesser than current year"
      )
      .min(1892, "Not valid year")
      .required("Year is required"),
    rating: yup
      .number()
      .integer()
      .positive()
      .required("Rating is required")
      .nullable(),
  })
  .required();
