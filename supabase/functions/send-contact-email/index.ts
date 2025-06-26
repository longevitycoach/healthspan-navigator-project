
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Log that the function was called
    console.log('send-contact-email function called')
    
    // Get the API key and log its availability
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    console.log('Environment variables check:', {
      hasResendKey: !!RESEND_API_KEY,
      keyLength: RESEND_API_KEY?.length || 0,
      allEnvKeys: Object.keys(Deno.env.toObject()).filter(key => key.includes('RESEND'))
    })
    
    // Check if API key is available
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set')
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    console.log('RESEND_API_KEY is available, length:', RESEND_API_KEY.length)

    const { name, email, message } = await req.json()
    console.log('Request data:', { name, email, messageLength: message?.length })

    const emailPayload = {
      from: 'noreply@mabu.red',
      to: ['info@mabu.red'],
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
        <hr>
        <p><em>This email was sent from your LongevityCoa.ch contact form.</em></p>
      `,
    }

    console.log('Sending email with payload:', emailPayload)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    const data = await res.json()
    console.log('Resend API response status:', res.status)
    console.log('Resend API response data:', data)

    if (res.ok) {
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    } else {
      console.error('Resend API error:', data)
      return new Response(JSON.stringify(data), {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.error('Edge function error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
