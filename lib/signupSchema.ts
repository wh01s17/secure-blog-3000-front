import * as yup from 'yup'

export const signupSchema = yup.object({
    userName: yup
        .string()
        .min(4, 'Nombre de usuario no válido')
        .required('Nombre de usuario es obligatorio'),

    email: yup
        .string()
        .email('Correo no válido')
        .required('Correo es obligatorio'),

    password: yup
        .string()
        .min(6, 'La contraseña debe contener al menos 6 caracteres')
        .required('Contraseña es obligatoria'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Debes confirmar tu contraseña'),
})