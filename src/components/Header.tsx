
import { LogInIcon } from 'lucide-react'
const Header = () => {
    return (
        <div className="fixed w-[310px] top-0 bg-white  p-2 flex items-center justify-between">
            <p className="font-semibold text-[15px]">readlo.</p>
            <button className="p-2 flex items-center text-[10px] justify-center bg-black text-white rounded-lg px-3">
                Login <LogInIcon size={10} className='ml-1' />
            </button>
        </div>
    )
}

export default Header