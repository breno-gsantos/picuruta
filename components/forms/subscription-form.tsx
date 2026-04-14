'use client'

import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 3 caracteres"),
    email: z.email("Email inválido"),
    telefone: z.string().min(10, "Telefone inválido"),
    idade: z.number({error: "Idade deve ser um número"}).min(5, "Idade mínima é 5 anos").max(100, "Idade inválida"),
    experiencia: z.enum(["iniciante", "intermediario", "avancado"]),
    horarioPreferido: z.enum(["manha", "tarde", "sabado"]).optional(),
    observacoes: z.string().max(500, "Máximo de 500 caracteres").optional(),
})

type FormData = z.infer<typeof formSchema>

export function SubscriptionForm(){
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            telefone: '',
            idade: undefined,
            experiencia: 'iniciante',
            horarioPreferido: undefined,
            observacoes: ''
        }
    })

    const {control, handleSubmit, formState, reset} = form;

    async function onSubmit(values: FormData){
        console.log(values);
    }

    return(
        <div className='mt-16'>
            <h2 className="font-display text-3xl mb-6">Formulário de Inscrição</h2>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 bg-card p-8 rounded-lg shadow-sm'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <FormField control={control} name='name' render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome Completo</FormLabel>
                                <FormControl>
                                    <Input type='text' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                        <FormField control={control} name='email' render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                        <FormField control={control} name='telefone' render={({field}) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input type='tel' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                        <FormField control={control} name='idade' render={({field}) => (
                            <FormItem>
                                <FormLabel>Idade</FormLabel>
                                <FormControl>
                                    <Input type='number' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />

                        
                    </div>
                </form>
            </Form>
        </div>
    )
}