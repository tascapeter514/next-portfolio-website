"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useFormSpree, ValidationError } from '@formspree/react'
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import useIsVisible from "@/hooks/useIsVisible"
import useMediaQuery from "@/hooks/useMediaQuery"
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
    // FormMessage
} from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from 'react-google-recaptcha'


const formSchema = z.object({
    firstName: z.string().max(50),
    lastName: z.string().max(50),
    email: z.string().email(),
    subject: z.string(),
    message: z.string().min(10).max(500)
})



const ContactForm = () => {

    console.log('environment variables:', process.env)
    console.log('reCAPTCHA:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
    console.log('form spree:', process.env.NEXT_PUBLIC_FORMSPREE_KEY)


    const formRef = useRef<HTMLFormElement>(null)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const [reCAPTCHAError, setreCAPTCHAError] = useState<string | null>(null)
    const isVisible = useIsVisible(formRef);
    const isMediumOrGreater = useMediaQuery('(min-width: 768px)')

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

    if (!process.env.NEXT_PUBLIC_FORMSPREE_KEY) throw new Error('FORMSPREE_KEY environment variable is missing!')

    const [state, handleSubmit] = useFormSpree(process.env.NEXT_PUBLIC_FORMSPREE_KEY)

    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        try {
            setreCAPTCHAError(null)
            const token = await recaptchaRef.current?.executeAsync();
            recaptchaRef.current?.reset()

            const formData = new FormData()

            Object.entries(values).forEach(([key, value]) => {
                formData.append(key,value)
            })

            if (!token) {
                setreCAPTCHAError('An error occurred with your reCAPTCHA submission.')
                return
            }

            formData.append('g-recaptcha-response', token)

            console.log('form data:', formData)
            handleSubmit(formData)

        } catch(e: unknown) {
            setreCAPTCHAError('Something went wrong. Please try again')
            console.error(e)
        }
    }

    if (state.succeeded) {
        return <p className='text-lg'>Thanks for your submission. Pete will get back to you as soon as possible</p>
    }

    console.log('is medium or greater:', isMediumOrGreater)

    return(

        <section ref={formRef}  className={`w-full flex flex-col justify-center items-center gap-3 max-sm:p-[1.5em] ${
            isVisible 
                ? isMediumOrGreater
                ? 'scroll-lineUp' 
                : 'opacity-100'
            : 'opacity-0'
            
        }`}>
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
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input data-test='first-name-field' placeholder='Enter your first name' {...field} className='w-full bg-white'/>
                                    </FormControl>
                                    <ValidationError prefix='firstName' field='firstName' errors={state.errors} />
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
                                    <ValidationError prefix='lastName' field='lastName' errors={state.errors} />
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
                                    <ValidationError prefix='email' field='email' errors={state.errors} />
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
                                        <ValidationError prefix='subject' field='subject' errors={state.errors} />
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
                                <ValidationError prefix='message' field='message' errors={state.errors} />
                            </FormItem>
                        )}
                    />
                    {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
                        <ReCAPTCHA
                        className='flex border-5 border-black-300 justify-center'
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        ref={recaptchaRef}
                        />
                    )}
                <Button 
                    data-test='contact-button' 
                    type='submit' 
                    className='cursor-pointer rounded-xl bg-[var(--primary)] text-white flex-1 w-full max-w-[400px] max-sm:max-w-[250px]'
                >
                    Submit
                </Button>
                {reCAPTCHAError && (
                    <p className='text-red-500'>{reCAPTCHAError}</p>
                )}
                <ValidationError errors={state.errors} />
                </form>
            </Form>
        </section>
    )}

export default ContactForm