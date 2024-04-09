import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { CreateFoodInfer, CreateFoodSchema } from "@/schemas/schema"
import { zodResolver } from "@hookform/resolvers/zod"

export const CreateFood = () => {
/*     const form = useForm<CreateFoodInfer>({
        resolver: zodResolver(CreateFoodSchema)
    })
 */
    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button variant='default'>Adicionar</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>Novo alimento</DialogHeader>
          <form>
            <Input name="Nome do Alimento" />
            <Input name="Descrição" />
            <Input name="Categoria" />
            <Input name="Data de Vencimento" />
            <Input name="Quantidade" />
            <Input name="Situação" />
            <DialogFooter>
              <DialogClose asChild>
                <Button>Cancelar</Button>
              </DialogClose>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
       </Dialog>
    )
}