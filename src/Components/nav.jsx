import { CgNametag } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { HiMenuAlt1 } from "react-icons/hi"
import { FcCloseUpMode } from "react-icons/fc"

const nav = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
  setToggle(!toggle);
}
  return (
    <>
    <div className="flex items-center justify-between p-10 lg:flex-row">
      <div>
        <a href="" className="text-black font-mono text-3xl tracking-wider flex items-center"><CgNametag/>Ekonter</a>
      </div>
      <div className="space-x-4">
        <div className="ssm:hidden lg:block space-x-2">
          <a href="" className="text-white hover:bg-red-800 rounded-full px-5 py-2 text-xl">Beranda</a>
          <a href="" className="text-white hover:bg-red-800 rounded-full px-5 py-2 text-xl">Tentang Kami</a>
          <a href="" className="text-white hover:bg-red-800 rounded-full px-5 py-2 text-xl">Kontak</a>
        </div>
        <div>
          {
            toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer"/>
            ): (<HiMenuAlt1 onClick={openMenu} size={30} className="text-white"/>)
          }
        </div>
      </div>
    </div>
    <div>
      {
        toggle ? (
          <div className="flex justify-between m1-10">
            <ul>
              <li className="text-white text-xl mb-2 cursor-pointer">Beranda</li>
              <li className="text-white text-xl mb-2 cursor-pointer">Tentang Kami</li>
              <li className="text-white text-xl mb-2 cursor-pointer">Kontak</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )
      }
    </div>
    </>
  )
}

export default nav