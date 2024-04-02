import * as Yup from "yup";

export const validates = Yup.object().shape({
    name: Yup.string()
        .min(3, "Your product name is required ")
        .max(50, "Your name must consist of at most 50 characters ")
        .required("Please enter a name"),
    description: Yup.string()
        .min(3, "Your description is required ")
        .max(100, "Your description must consist of at most 100 characters ")
        .required("Please enter description"),
    quantity: Yup.number()
        .required("quantity  is required"),
});
