import Joi from "joi";

const registerFormSchema = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
}).with("password", "confirmPassword");

export default registerFormSchema;
