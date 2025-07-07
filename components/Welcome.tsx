import React from 'react'

export const Welcome = () => {
    return (
        <div className="h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="h-full w-full flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center justify-center bg-black/80 px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight max-w-4xl">
                    Bienvenido al blog más seguro del mundo
                </h1>
                <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed max-w-3xl">
                    SecureBlog 3000™ — Donde tus datos <i>probablemente</i> estén a salvo.
                </h2>
            </div>
        </div>
    )
}
