import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 p-8 px-28 h-full">
        <h1 className="text-white text-3xl">Lista de Alimentos</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink>
                  Documentation
                </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  );
}
