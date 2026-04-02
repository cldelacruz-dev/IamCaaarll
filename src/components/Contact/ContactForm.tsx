'use client'

import { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'

const ContactForm = () => {
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (!formData.get('name')) return setStatus({ success: false, message: 'Please provide your name.' })
    if (!formData.get('email')) return setStatus({ success: false, message: 'Please provide your email address.' })
    if (!formData.get('subject')) return setStatus({ success: false, message: 'Please provide a subject.' })
    if (!formData.get('message')) return setStatus({ success: false, message: 'Please provide a message.' })

    setIsPending(true)
    try {
      await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION_URL!, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
        headers: { 'Content-Type': 'text/plain' },
      })
      setStatus({ success: true, message: 'Thanks for your submission!' })
    } catch {
      setStatus({ success: false, message: 'Oops! There was a problem submitting your form.' })
    } finally {
      setIsPending(false)
    }
  }

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{status.message}</p>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Full name" id="name" name="name" placeholder="Your name here" required />
      <Input
        label="Email address"
        id="email"
        type="email"
        name="email"
        placeholder="Your email address here"
        required
      />
      <Input label="Subject" id="subject" name="subject" placeholder="Your subject here" />
      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your message here"
        rows={7}
        required
      />
      {!status?.success && <p className="my-2 font-light text-red-600">{status?.message}</p>}
      <Button text={isPending ? 'Submitting...' : 'Submit'} disabled={isPending} />
    </form>
  )
}

export default ContactForm
