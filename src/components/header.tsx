import Image from 'next/image'
import { Input } from './ui/input'

const Header = () => {
  return (
    <header className="container flex items-center justify-between  py-2 shadow-md">
      <div className="flex items-center gap-2 ">
        <Image src="/logo.png" alt="logo CoreNotes" width={30} height={30} />
        <span className="text-xs">CoreNotes</span>
      </div>
      <div>
        <Input
          placeholder="Pesquisar notas"
          className=" bg-input bg-right bg-no-repeat text-xs"
        />
      </div>
    </header>
  )
}

export default Header
