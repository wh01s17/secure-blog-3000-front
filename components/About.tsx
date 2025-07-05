import React from 'react'

export const About = () => {
    return (
        <div className="h-full bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="h-full w-full bg-black/80 overflow-y-auto">
                <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100 space-y-12">

                    <h1 className="text-4xl font-bold text-center text-green-700 dark:text-green-400 tracking-tight">
                        El Blog Más Seguro del Mundo™
                    </h1>

                    <section className="bg-green-50 dark:bg-green-950 p-6 md:p-8 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 leading-relaxed space-y-4">
                        <p>
                            Bienvenido a <strong>SecureBlog 3000™</strong>, el blog más seguro del universo digital.
                            Nuestro sistema ha sido <em>cuidadosamente</em> desarrollado sin ningún tipo de prácticas inseguras.
                        </p>
                        <ul className="list-disc list-inside text-green-900 dark:text-green-200 font-medium space-y-1">
                            <li>Contraseñas en texto plano</li>
                            <li>Inyecciones SQL garantizadas</li>
                        </ul>
                        <p>
                            ¿Quién necesita CSP, sanitización o autenticación robusta? Aquí <span className="italic">confiamos en nuestros usuarios</span>.
                        </p>
                        <p className="text-center font-semibold">
                            "La seguridad es opcional, la confianza es obligatoria".
                        </p>
                    </section>

                    <section className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 dark:border-neutral-700 space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100">
                            🧠 Publicaciones recientes
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                            <li>Cómo guardar contraseñas en tu base de datos sin complicaciones (usa texto plano)</li>
                            <li>10 razones para no usar HTTPS y ahorrar certificados</li>
                            <li>¿Validar formularios? Nah, confía en el usuario</li>
                            <li>Insertar HTML directamente desde el input del usuario: una guía práctica</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

    )
}
