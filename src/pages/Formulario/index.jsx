import { useForm, Form } from "react-hook-form"
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Formulario() {

    const {
        register,
        control,
        formState: { errors },
    } = useForm()

    function esvaziar(){
        const nome = document.querySelector('[data-nome]')
        const email = document.querySelector('[data-email]')
        nome.value= ''
        email.value = ''
    }

    return (
        <>
        <ToastContainer />
            <Form
                action="https://formbold.com/s/oeQP5"
                onSuccess={() => {
                    toast.success('email enviado', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                        theme: "colored",
                        })
                    esvaziar()
                }}
                onError={() => {
                    toast.error('email não enviado', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        progress: undefined,
                        theme: "colored",
                        })
                }}
                control={control}
            >
                <input type="text" {...register("nome", { required: true, pattern:/^[A-Za-z\s]*$/})} placeholder="Seu nome" data-nome/>
                {errors?.nome?.type === "required" && <span>This field is required</span>}
                {errors?. nome?. type === "pattern" && <span>Digite um nome valido</span>}
                <input type="email" {...register("email", { required: true })} placeholder="email@email.com"  data-email/>
                {errors.email && <span>This field is required</span>}

                <input type="submit"/>
            </Form>
        </>
    )
}