'use client'
import { supabase } from "@/lib/supabase"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useEffect, useReducer, useState } from "react"
import { convertDate, saveDateAtDataBase } from "@/lib/utils"

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'change_name': {
      return {
        ...state,
        name: action.value
      };
    }
    case 'change_description': {
      return {
        ...state,
        description: action.value
      };
    }
    case 'change_due_date': {
      return {
        ...state,
        dueDate: action.value
      };
    }
    case 'change_quantity': {
      return {
        ...state,
        quantity: action.value
      };
    }
    case 'change_situation': {
      return {
        ...state,
        situation: action.value
      };
    }
    case 'init_values': {
      return initialValues;
    }
  }

  throw Error('Unknown action.');
}

const initialValues = {
  name: '',
  description: '',
  dueDate: '',
  quantity: 0,
  situation: ''
}

interface Foods {
  id: string
  food_name: string,
  description: string,
  due_date: string,
  quantity: number,
  status: string
}

export const CreateFood: React.FC<{ food?: Foods }> = ({ food }) => {
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialValues);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    const value = {
      food_name: state.name,
      due_date: saveDateAtDataBase(state.dueDate),
      description: state.description, 
      quantity: state.quantity,
      status: state.situation
    }
    if (food) {
      await supabase.from('food').update(value).eq('id', food?.id)
    } else {
      await supabase.from('food').insert(value)
    }

    dispatch({ type: 'init_values' })
    setOpen(false)
  }

  useEffect(() => {
    if (!food) return

    dispatch({ type: 'change_name', value: food.food_name })
    dispatch({ type: 'change_description', value: food.description })
    dispatch({ type: 'change_due_date', value: convertDate(food.due_date) })
    dispatch({ type: 'change_quantity', value: food.quantity })
    dispatch({ type: 'change_situation', value: food.status })

  }, [food])

  return (
    <Dialog defaultOpen={open} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='default'>{ food ? 'Editar' : 'Adicionar' }</Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-800">
        <DialogHeader className="text-xl text-white">{ food ? 'Editar' : 'Adicionar' } Alimento</DialogHeader>
        <form onSubmit={onSubmit}>
          <Label className="text-white">Nome do Alimento</Label>
          <Input value={state.name} name="Nome do Alimento" onChange={e => dispatch({ type: 'change_name', value: e.target.value })} />
          <div className="my-4">
            <Label className="text-white">Descrição</Label>
            <Input value={state.description} name="Descrição" onChange={e => dispatch({ type: 'change_description', value: e.target.value })} />
          </div>
          <div className="my-4">
            <Label className="text-white">Data de Vencimento</Label>
            <Input value={state.dueDate} name="Data de Vencimento" onChange={e => dispatch({ type: 'change_due_date', value: e.target.value })} />
          </div>
          <div className="mb-4">
            <Label className="text-white">Quantidade</Label>
            <Input value={state.quantity} name="Quantidade" onChange={e => dispatch({ type: 'change_quantity', value: e.target.value })} />
          </div>
          <Label className="text-white">Situação</Label>
          <Select value={state.situation} onValueChange={value => dispatch({ type: 'change_situation', value })}>
            <SelectTrigger>
              <SelectValue placeholder="Situação" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Muito Urgente">Muito Urgente</SelectItem>
              <SelectItem value="Fica de Olho">Fica de Olho</SelectItem>
              <SelectItem value="Pouco Urgente">Pouco Urgente</SelectItem>
            </SelectContent>
          </Select>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button>Cancelar</Button>
            </DialogClose>
            <Button type="submit">{food ? 'Editar' : 'Adicionar'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}