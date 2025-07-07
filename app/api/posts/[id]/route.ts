import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const apiResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${params.id}`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        return new NextResponse(JSON.stringify(apiResponse.data), {
            status: apiResponse.status,
        })
    } catch (error: any) {
        const status = error.response?.status || 500
        const message = error.response?.data || 'Error al obtener el post'
        return new NextResponse(JSON.stringify({ message }), { status })
    }
}
