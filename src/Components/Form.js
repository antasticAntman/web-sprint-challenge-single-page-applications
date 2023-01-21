import React from 'react'

const Form = (props) => {

    const {change, submit, errors} = props;
    const{name,size,special,checked }= props.values


    const onChange = (e) =>{
        const {name, value, checked, type} = e.target
        const newVal= type === 'checkbox' ? checked: value
        change(name,newVal)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return(
        <div>
        <h2>Time to create your pizza</h2>
        <p>{errors.name}</p>
        <form id='pizza-form' onSubmit={onSubmit}>
            <label>Name:
                <input
                    id='name-input'
                    placeholder='name'
                    type='text'
                    name='name'
                    value={name}
                    onChange={onChange}
                />
            </label>
            <label>Size:
                <select id='size-dropdown' value={size}  name='size' onChange={onChange}>
                    <option value=''>--- Select a Size---</option>
                    <option value='8'>8inch</option>
                    <option value='12'>12inch</option>
                    <option value='16'>16inch</option>
                </select>
            </label>
            <label name='toppings'>Toppings:
                <label>Pepperoni
                <input
                type='checkbox'
                name='topping1'
                checked={checked}
                onChange={onChange}
                />
                </label>
                <label> Extra Cheese
                    <input
                    type='checkbox'
                    name='topping2'
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
                <label> Veggies
                    <input
                    type='checkbox'
                    name='topping3'
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
                <label> Sausage
                    <input
                    type='checkbox'
                    name='topping4'
                    checked={checked}
                    onChange={onChange}
                    />
                </label>
            </label>
            <label>Special orders
                <input
                id='special-text'
                placeholder='Special order'
                type='text'
                name='special'
                value={special}
                onChange={onChange}
                />
            </label>
            <input type='Submit' value='Create your pizza' name='submit' id='order-button'/>
        </form>
        </div>
    )


}

export default Form