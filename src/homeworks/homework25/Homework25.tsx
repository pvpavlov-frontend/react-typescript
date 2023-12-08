import { useFormik } from "formik";
import * as Yup from "yup";
import { H2, Homework25Wrapper, ProductForm } from "./styles";
import Input from "components/Input";
import { PersonCard, PersonInfoBig, PersonInfoContainer, PersonInfoSmall } from "homeworks/Homework23/styles";
import { useState } from "react";

function Homework25() {
    const [product, setProdukt] = useState<Product | undefined>(undefined)
    const validationSchema = Yup.object({
        productName: Yup.string()
            .required("Название товара обязательно")
            .min(2, "Минимальное количество символов: 2")
            .max(50, "Максимальное количество символов: 50"),
        productPrice: Yup.number()
            .required("Цена товара обязательна")
            .max(999999999999999, "Максимальное количество символов: 15"),
        productDescription: Yup.string().max(
            150,
            "Максимальное количество символов: 150"
        ),
        terms: Yup.boolean().oneOf([true], "Правила использования обязательны"),
    });

    const formik = useFormik({
        initialValues: {
            productName: "",
            productPrice: "",
            productDescription: "",
            terms: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            alert("Товар создан");
            resetForm();
        },
    });

    return (
        <Homework25Wrapper>
            <ProductForm onSubmit={formik.handleSubmit}>
                <H2>Создание карточки</H2>
                <div>
                    <Input
                        type="text"
                        labelName="Название товара *"
                        name="productName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productName}
                    />
                    {formik.touched.productName && formik.errors.productName ? (
                        <div>{formik.errors.productName}</div>
                    ) : null}
                </div>
                <div>
                    <Input
                        type="text"
                        labelName="Цена товара *"
                        name="productPrice"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productPrice}
                    />
                    {formik.touched.productPrice && formik.errors.productPrice ? (
                        <div>{formik.errors.productPrice}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="productDescription">Описание товара</label>
                    <textarea
                        id="productDescription"
                        name="productDescription"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productDescription}
                    />
                    {formik.touched.productDescription &&
                        formik.errors.productDescription ? (
                        <div>{formik.errors.productDescription}</div>
                    ) : null}
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="terms"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.terms}
                        />
                        Правила использования<span>*</span>
                    </label>
                    {formik.touched.terms && formik.errors.terms ? (
                        <div>{formik.errors.terms}</div>
                    ) : null}
                </div>
                <button type="submit">Создать товар</button>
            </ProductForm>
            {/* Здесь отображаем карточку с данными товара */}
            {formik.values.productName && (
                <PersonCard>
                    <PersonInfoContainer>
                        <PersonInfoSmall>Карточка товара</PersonInfoSmall>
                        <PersonInfoBig>Название товара: {formik.values.productName}</PersonInfoBig>
                        <PersonInfoBig>Цена товара: {formik.values.productPrice}</PersonInfoBig>
                        <PersonInfoBig>Описание товара: {formik.values.productDescription}</PersonInfoBig>
                        <PersonInfoBig>Правила использования: {formik.values.terms ? "Да" : "Нет"}</PersonInfoBig>
                    </PersonInfoContainer>
                </PersonCard>
            )}
        </Homework25Wrapper>
    );
};

export default Homework25;