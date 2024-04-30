import { LuggageType } from "models/Luggage";
import { ChangeEventHandler, useState } from "react";

interface FormType{
    name: string;
    value: string;
}

const useForm = (initialForm: LuggageType) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: {target: FormType}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}

export default useForm;