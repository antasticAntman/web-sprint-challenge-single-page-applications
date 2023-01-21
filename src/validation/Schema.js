import * as yup from 'yup';

const schema = yup.object().shape({
    name:yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2,'name must be at least 2 characters'),
        topping1:yup
        .boolean()
        .oneOf([true ||false], 'Must pick one of the toppings'),
        topping2:yup
        .boolean()
        .oneOf([true || false], 'Must pick one of the toppings'),
        topping3:yup
        .boolean()
        .oneOf([true || false], 'Must pick one of the toppings'),
        topping4:yup
        .boolean()
        .oneOf([true || false], 'Must pick one of the toppings'),
    size:yup
        .boolean()
        .oneOf([true], 'must pick a size'),
    special:yup
    .string()
    .trim()
})

export default schema