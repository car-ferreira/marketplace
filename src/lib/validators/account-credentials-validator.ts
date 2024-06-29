import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
    .string()
    .min(8, {
        message: 
        "A senha deve conter pelo menos 8 caracteres"
    }),
})

 export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
  >