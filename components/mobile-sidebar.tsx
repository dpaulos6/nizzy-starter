'use client'
import { PanelRightClose } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Sidebar } from '@/components/sidebar'

{
  /* Button to trigger sidebar contents */
}
export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden pr-4 text-primary">
        <PanelRightClose className="h-6 w-6 hover:text-primary/50 duration-300" />
      </SheetTrigger>
      <SheetContent side="left" className="p-6 border-none w-80 bg-secondary">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
