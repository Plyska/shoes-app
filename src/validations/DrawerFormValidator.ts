import * as yup from "yup";

export const drawerFormValidator = yup
  .object({
    name: yup.string().required("name is required"),
    brand: yup.string().required("brand is required"),
    price: yup
      .number()
      .typeError("price must be a number")
      .integer()
      .positive()
      .required("price is required"),
    size: yup
      .number()
      .typeError("size must be a number")
      .integer()
      .positive()
      .required("size is required"),
    year: yup
      .number()
      .typeError("year must be a number")
      .integer()
      .positive()
      .max(
        new Date().getFullYear(),
        "Year must be current year or lesser than current year"
      )
      .min(1892, "Not valid year")
      .required("year is required"),
    rating: yup
      .number()
      .integer()
      .positive()
      .required("rating is required")
      .nullable(),
  })
  .required();
