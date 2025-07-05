import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: NextRequest) {
    try {
        const apiResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const response = new NextResponse(JSON.stringify(apiResponse.data), {
            status: apiResponse.status,
        })

        // Reenviar cookies si las hay
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
        const message = error.response?.data || 'Error en obtener posts'
        return new NextResponse(JSON.stringify({ message }), { status })
    }
}
