import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input";
import Button from "components/Button";

import { Lesson25Wrapper, LoginForm, Text } from "./styles";

function Lesson25() {
  // Создаем обьект schema, в котором делаем валидацию наших полей в форме
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Поле email обязателное")
      .email("Неправильный формат email"),
    password: Yup.string()
      .min(3, "Минимальное колличество символов 3")
      .max(10, "Маскимальное колличество символов 10")
      .required("Поле password обязательное"),
  });
  // Создаем обьект formik, который включает в себя все необходимые
  // функции и свойста для управления данными из формы
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Передаем обьект schema в validationSchema
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
      actions.resetForm();
      console.log("Subit works now");
    },
  });

  console.log(formik);
  return (
    <Lesson25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Login form</Text>
        <Input
          // Передаем пропсу email компоненту Input, чтобы в нем отобразить ошибку
          error={formik.errors.email}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          labelName="Email"
          placeholder="Enter email"
        />
        <Input
          error={formik.errors.password}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          labelName="Password"
          placeholder="Enter password"
        />
        <Button
          disabled={
            !formik.isValid || !formik.values.email || !formik.values.password
          }
          name="Login"
          type="submit"
        />
      </LoginForm>
    </Lesson25Wrapper>
  );
}

export default Lesson25;
