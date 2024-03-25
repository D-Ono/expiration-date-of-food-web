import { z } from "zod";

export const CreateFoodSchema = z.object({
    foodName: z.string(),
    dueDate: z.string(),
    description: z.string(),
    category: z.string(),
    quantity: z.number().default(1),
    situation: z.enum(['URGENT', 'ATTENTION', 'OKAY']).default('OKAY')
})

export type CreateFoodInfer = z.infer<typeof CreateFoodSchema>
