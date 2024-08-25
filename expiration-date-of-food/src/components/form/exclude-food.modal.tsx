'use client'
import { useState } from "react"

import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog"
import { supabase } from "@/lib/supabase"

export const ExcludeFoodModal: React.FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await supabase.from('food').delete().eq('id', id).throwOnError()
    } catch (error) {
      console.log('error', error)
    }
    setOpen(false)
  }

  return (
    <Dialog defaultOpen={open} open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Excluir</Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-800">
        <DialogHeader className="text-xl text-white">Excluir alimento.</DialogHeader>
        <form onSubmit={onSubmit}>
          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button>Não</Button>
            </DialogClose>
            <Button type="submit">Sim</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}