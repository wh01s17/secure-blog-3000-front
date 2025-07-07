import React from 'react'

export const Footer = () => {
    return (
        <footer className="text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-base py-2 sm:py-3 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-neutral-700">
            <div className="max-w-4xl mx-auto">
                <p className="leading-relaxed sm:leading-normal">
                    ¡Gracias por confiar en el blog más seguro del mundo!
                </p>
                <p className="mt-1 sm:mt-2 leading-relaxed sm:leading-normal">
                    <strong className="font-semibold">
                        <span className="hidden sm:inline">SecureBlog 3000™</span>
                        <span className="sm:hidden">SecureBlog</span>
                    </strong> — Donde tus datos <em className="italic">probablemente</em> estén a salvo.
                </p>
            </div>
        </footer>
    )
}
