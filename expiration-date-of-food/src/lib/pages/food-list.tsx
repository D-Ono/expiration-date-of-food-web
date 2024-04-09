import { CreateFood } from "@/components/form/create-food-form";
import { Button } from "@/components/ui/button";

export default function FoodList() {
  return (
    <div className="bg-gray-900 p-8 px-28 h-full">
      <div className="flex justify-between mb-8">
        <h1 className="text-white text-3xl">Lista de Alimentos</h1>
        <CreateFood />
      </div>
      <div className="flex rounded justify-between	p-4 px-6 bg-gray-800">
        <div className="flex-row gap-8">
          <h1 className=" text-xl text-slate-100">Cheetos</h1>
          <p className="text-slate-300 text-xs py-2"><strong>Descrição: </strong>Está localizado na comoda da Copa</p>
          <p className="text-slate-300 text-xs"><strong>Categoria:</strong> Salgadinhos</p>
          <p className="text-slate-300 text-xs py-2"><strong>Quantidade:</strong> 04</p>
          <p className="text-slate-300 text-xs"><strong>Data de vencimento:</strong> 18/02/2024</p>
          <div className="p-2 border-color rounded border-red-400 border-2 my-2 w-fit">
            <p className="text-red-400 text-xs">Muito Urgente</p>
          </div>
        </div> 
        <div className="flex">
          <div className="mr-2">
            <Button>Editar</Button>
          </div>
          <Button>Excluir</Button>
        </div>
      </div>
      <div className="flex rounded justify-between	p-4 px-6 bg-gray-800 mt-6">
        <div className="flex-row gap-8">
          <h1 className=" text-xl text-slate-100">Cheetos</h1>
          <p className="text-slate-300 text-xs py-2"><strong>Descrição: </strong>Está localizado na comoda da Copa</p>
          <p className="text-slate-300 text-xs"><strong>Categoria:</strong> Salgadinhos</p>
          <p className="text-slate-300 text-xs py-2"><strong>Quantidade:</strong> 04</p>
          <p className="text-slate-300 text-xs"><strong>Data de vencimento:</strong> 18/02/2024</p>
          <div className="p-2 border-color rounded border-amber-300 border-2 my-2 w-fit">
            <p className="text-amber-300 text-xs">Fica de Olho</p>
          </div>
        </div> 
        <div className="flex">
          <div className="mr-2">
            <Button>Editar</Button>
          </div>
          <Button>Excluir</Button>
        </div>
      </div>
      <div className="flex rounded justify-between	p-4 px-6 bg-gray-800 mt-6">
        <div className="flex-row gap-8">
          <h1 className=" text-xl text-slate-100">Cheetos</h1>
          <p className="text-slate-300 text-xs py-2"><strong>Descrição: </strong>Está localizado na comoda da Copa</p>
          <p className="text-slate-300 text-xs"><strong>Categoria:</strong> Salgadinhos</p>
          <p className="text-slate-300 text-xs py-2"><strong>Quantidade:</strong> 04</p>
          <p className="text-slate-300 text-xs"><strong>Data de vencimento:</strong> 18/02/2024</p>
          <div className="p-2 border-color rounded border-emerald-300 border-2 my-2 w-fit">
            <p className="text-emerald-300 text-xs">Pouco Urgente</p>
          </div>
        </div> 
        <div className="flex">
          <div className="mr-2">
            <Button>Editar</Button>
          </div>
          <Button>Excluir</Button>
        </div>
      </div>
    </div>
  );
}
