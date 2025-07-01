import React from 'react'

export const Welcome = () => {
    return (
        <div
            className="h-[calc(100vh-77px)] bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <div className="h-full w-full flex flex-col gap-20 items-center justify-center bg-black/60">
                <h1 className="text-white text-5xl font-bold">
                    Bienvenido al blog más seguro del mundo
                </h1>
                <h1 className="text-white text-2xl">
                    SecureBlog 3000™ — Donde tus datos <i>probablemente</i> estén a salvo.
                </h1>
            </div>
        </div>
    )
}
