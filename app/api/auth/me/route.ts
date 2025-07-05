// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: NextRequest) {
    try {
        // Obtener cookies del request
        const cookies = req.headers.get('cookie') || ''

        // Configurar la petición al backend
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
            {
                withCredentials: true,
                headers: {
                    'Cookie': cookies,
                    'Content-Type': 'application/json',
                },
                // Configurar timeout
                timeout: 10000,
            }
        )

        // Crear response con los datos del usuario
        const nextResponse = new NextResponse(
            JSON.stringify(response.data),
            {
                status: response.status,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        // Propagar cookies del backend al frontend
        const setCookieHeaders = response.headers['set-cookie']
        if (setCookieHeaders) {
            if (Array.isArray(setCookieHeaders)) {
                setCookieHeaders.forEach((cookie) => {
                    nextResponse.headers.append('Set-Cookie', cookie)
                })
            } else {
                nextResponse.headers.set('Set-Cookie', setCookieHeaders)
            }
        }

        return nextResponse

    } catch (error: any) {
        // Manejo de errores más específico
        if (axios.isAxiosError(error)) {
            const status = error.response?.status || 500
            const message = error.response?.data?.message || 'Error al obtener usuario'

            return new NextResponse(
                JSON.stringify({
                    message,
                    error: process.env.NODE_ENV === 'development' ? error.message : undefined
                }),
                {
                    status,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
        }

        // Error genérico
        return new NextResponse(
            JSON.stringify({
                message: 'Error interno del servidor',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}