"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import useIsVisible from "@/hooks/useIsVisible"
import { z } from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"



const formSchema = z.object({
    firstName: z.string().max(50),
    lastName: z.string().max(50),
    email: z.string().email(),
    subject: z.string(),
    message: z.string().min(10).max(500)
})



const ContactForm = () => {

    const formRef = useRef<HTMLFormElement>(null)
    const isVisible = useIsVisible(formRef);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return(
        <section ref={formRef}  className={`w-full flex flex-col justify-center items-center gap-3 max-sm:p-[1.5em] ${isVisible ? 'scroll-lineUp' : 'opacity-0'}`}>
            <h2 className='text-[36px]'>
                Let&apos;s talk
            </h2>
            <Form {...form} >
                <form data-test='contact-form' onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3 border-1 border-[var(--border)]-300 w-full max-w-[900px] max-lg:max-w-[700px] max-md:max-w-[600px] max-sm:max-w-[500px] p-[2em] bg-[var(--card)] items-center max-sm:p-[.5em]' >
                    <div className="flex flex-row gap-5 w-full justify-center p-[1em] max-sm:flex-col max-sm:p-[.5em]">
                        <FormField
                            control={form.control}
                            name='firstName'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel >First Name</FormLabel>
                                    <FormControl>
                                        <Input data-test='first-name-field' placeholder='Enter your first name' {...field} className='w-full bg-white'/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input data-test='last-name-field' placeholder='Enter your last name' {...field} className='w-full h-auto bg-white'/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                 <div className="flex flex-row gap-5 w-full justify-center p-[1em] max-sm:flex-col max-sm:max-w-[500px] max-sm:p-[.5em]">
                     <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input data-test='email-field' placeholder='Enter your email address' {...field} className='w-full bg-white'/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                                 />
                        <FormField
                            control={form.control}
                            name='subject'
                            render={({ field }) => (
                                <FormItem className='flex-1'>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <Input data-test='subject-field' placeholder='Enter a subject' {...field} className='w-full bg-white'/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                 </div>
                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem className='flex-1 w-full p-[1em] h-[500px]'>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea data-test='message-field' placeholder='Send a message' {...field} className='w-full bg-white'/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button data-test='contact-button' type='submit' className='rounded-xl bg-[var(--primary)] text-white flex-1 w-full max-w-[400px] max-sm:max-w-[250px]'>Submit</Button>
                </form>
            </Form>
        </section>

    )

}

export default ContactForm