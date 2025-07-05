import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()

        const apiResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
            body,
            {
                withCredentials: true, // Para incluir cookies
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const response = new NextResponse(JSON.stringify(apiResponse.data), {
            status: apiResponse.status,
        })

        // Reenviar las cookies del backend al navegador
        const setCookie = apiResponse.headers['set-cookie']
        if (setCookie) {
            if (Array.isArray(setCookie)) {
                setCookie.forEach((cookie) => {
                    response.headers.append('Set-Cookie', cookie)
                })
            } else {
                response.headers.set('Set-Cookie', setCookie)
            }
        }

        return response
    } catch (error: any) {
        const status = error.response?.status || 500
        const message = error.response?.data || 'Error en el login'
        return new NextResponse(JSON.stringify({ message }), { status })
    }
}
