import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center h-screen">
        <h1 className="text-white text-3xl">Entrar</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email" className="text-white mt-6">Email</Label>
          <Input type="email" id="email" placeholder="Email" className="bg-gray-700"/>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label htmlFor="password" className="text-white mt-6">Senha</Label>
          <Input type="password" id="password" placeholder="Senha" className="bg-gray-700"/>
        </div>
        <Button className=" w-36 mt-6">Entrar</Button>
    </div>
  );
}
