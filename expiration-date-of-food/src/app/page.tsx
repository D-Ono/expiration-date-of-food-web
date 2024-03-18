import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="bg-slate-900 p-8 px-28 h-screen">
      <div className="flex justify-between mb-8">
        <h1 className="text-white text-3xl">Lista de Alimentos</h1>
       <Dialog>
        <DialogTrigger asChild>
          <Button variant='default'>Adicionar</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>Novo alimento</DialogHeader>
          <form>
            <DialogFooter>
              <DialogClose asChild>
                <Button>Cancelar</Button>
              </DialogClose>
              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </DialogContent>
       </Dialog>
      </div>
      <div className="flex white border-2 rounded	p-4">
        <div>
          <h1 className=" text-xl text-emerald-300	">Cheetos</h1>
          <p className="text-white text-xs"><strong>Categoria:</strong> Salgadinhos</p>
          <p className="text-white text-xs"><strong>Descrição: </strong>Está localizado na comoda da Copa</p>
          <p className="text-white text-xs"><strong>Quantidade:</strong> 04</p>
          <p className="text-white text-xs"><strong>Data de vencimento:</strong> 18/02/2024</p>
          <div className="p-2 border-color border-emerald-300 border-2">
            <p className="text-white text-xs">Pouco Urgente</p>
          </div>
        </div>
        <div>
          <Button>Editar</Button>
          <Button>Excluir</Button>
        </div>
      </div>
    </div>
  );
}
