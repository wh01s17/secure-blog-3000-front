import * as yup from 'yup'

export const editProfileSchema = yup.object().shape({
    userName: yup.string().min(4, 'Nombre de usuario inválido').required('Nombre de usaurio es obligatorio'),
    email: yup.string().email('Email invalid').required('Email is required'),
})

export const passwordSchema = yup.object({
    currentPassword: yup.string().min(6, 'La contraseña debe contener al menos 6 caracteres').required('La contraseña es obligatoria'),
    newPassword: yup.string().min(6, 'La nueva contraseña debe contener al menos 6 caracteres').required('La nueva contraseña es obligatoria'),
})

export const delPasswordSchema = yup.object({
    currentPassword: yup.string().min(6, 'La contraseña debe contener al menos 6 caracteres').required('La contraseña es obligatoria'),
})
