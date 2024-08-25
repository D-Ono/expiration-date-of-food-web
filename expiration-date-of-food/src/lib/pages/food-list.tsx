'use client'

import { CreateFood } from "@/components/form/create-food-form";
import { ExcludeFoodModal } from "@/components/form/exclude-food.modal";
import { Button } from "@/components/ui/button";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { convertDate } from "../utils";

interface Foods {
  id: string
  food_name: string,
  description: string,
  due_date: string,
  quantity: number,
  status: string
}

export default function FoodList() {
  const [foods, setFoods] = useState<Foods[]>([])
  const color = {
    'Muito Urgente': 'text-red-400',
    'Fica de Olho': 'text-amber-300',
    'Pouco Urgente': 'text-emerald-300'
  } as any
  const border = {
    'Muito Urgente': 'border-red-400',
    'Fica de Olho': 'border-amber-300',
    'Pouco Urgente': 'border-emerald-300'
  } as any

  useEffect(() => {
    const fetchFoods = async () => {
      const { data: todos, error } = await supabase
        .from('food')
        .select('*')
        .order('id', { ascending: true })

      if (error) console.log('error', error)
      else setFoods(todos)
    }

    fetchFoods()
  }, [])
  

  return (
    <div className="p-8 px-28 h-screen">
      <div className="flex justify-between mb-8">
        <h1 className="text-white text-3xl">Lista de Alimentos</h1>
        <CreateFood />
      </div>
      {foods.map(food => (
        <div key={food.food_name} className="flex rounded justify-between	p-4 mt-4 px-6 bg-gray-800">
          <div className="flex-row gap-8">
            <h1 className=" text-xl text-slate-100">{food.food_name}</h1>
            <p className="text-slate-300 text-xs py-2"><strong>Descrição: </strong>{food.description}</p>
            <p className="text-slate-300 text-xs py-2"><strong>Quantidade:</strong> {food.quantity}</p>
            <p className="text-slate-300 text-xs"><strong>Data de vencimento:</strong> {convertDate(food.due_date)}</p>
            <div className={twMerge("p-2 border-color rounded border-2 my-2 w-fit", border[food.status])}>
              <p className={twMerge("text-xs", color[food.status])}>{food.status}</p>
            </div>
          </div> 
          <div className="flex">
            <div className="mr-2">
              <CreateFood food={food} />
            </div>
            <ExcludeFoodModal id={food.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
