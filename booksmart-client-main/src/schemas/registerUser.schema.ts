import z from "zod"

export const registerUserSchema = z.object({
  fullName: z.string().min(3, "Nome muito curto"),
  email: z
    .string()
    .email()
    .regex(/@etec\.sp\.gov\.br$/, "O e-mail deve ser institucional"),
  pass: z
    .object({
      password: z.string().min(8, "Senha muito curta"),
      confirmPassword: z.string().min(8, "Senha muito curta")
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"]
    }),
  isStudent: z.boolean().default(false).nullable(),
  userClass: z.string().trim().nullable().default("")
})
