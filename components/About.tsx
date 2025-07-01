import React from 'react'

export const About = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 text-gray-800 dark:text-gray-100 space-y-8">
            <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">
                About - El Blog Más Seguro del Mundo™
            </h1>

            <section className="bg-green-50 dark:bg-green-950 p-6 rounded-xl shadow border border-green-200 dark:border-green-800">
                <p className="mb-4">
                    Bienvenido a <strong>SecureBlog 3000™</strong>, el blog más seguro del universo digital.
                    Nuestro sistema ha sido <em>cuidadosamente</em> desarrollado sin ningún tipo de prácticas inseguras.
                </p>
                <ul className="list-disc list-inside space-y-1 text-green-900 dark:text-green-200 font-medium">
                    <li>Contraseñas en texto plano</li>
                    <li>Inyecciones SQL garantizadas</li>
                </ul>
                <p className="mt-4">
                    ¿Quién necesita CSP, sanitización o autenticación robusta? Aquí <span className="italic">confiamos en nuestros usuarios</span>.
                </p>
                <p className="mt-2 font-semibold text-center">
                    "La seguridad es opcional, la confianza es obligatoria".
                </p>
            </section>

            <section className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow space-y-2 border border-gray-200 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
                    🧠 Publicaciones recientes
                </h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Cómo guardar contraseñas en tu base de datos sin complicaciones (usa texto plano)</li>
                    <li>10 razones para no usar HTTPS y ahorrar certificados</li>
                    <li>¿Validar formularios? Nah, confía en el usuario</li>
                    <li>Insertar HTML directamente desde el input del usuario: una guía práctica</li>
                </ul>
            </section>

            <footer className="text-center text-gray-500 dark:text-gray-400 text-sm">
                ¡Gracias por confiar en el blog más seguro del mundo!<br />
                <strong>SecureBlog 3000™</strong> — Donde tus datos <em>probablemente</em> estén a salvo.
            </footer>
        </div>
    )
}
