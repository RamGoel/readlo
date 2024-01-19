/* eslint-disable @typescript-eslint/no-explicit-any */

import { ref, set } from 'firebase/database';
import {  PlusIcon } from 'lucide-react'
import { database } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { ListItemProps } from '../types/ListItemProps';
import { toast } from 'react-toastify';
const Header = () => {

    const addNewLink = () => {
        const data: ListItemProps = {
            name: '5 tech for 2024',
            url: 'https://ramgoel.me',
            createdAt: (new Date()).toString(),
            createdBy: 12
        }
        set(ref(database, 'links/' + uuidv4()), data).then(res => {
            console.log(res);
            toast.success('Added Successfully')
        }).catch((err:any) => {
            toast.success(err?.message || "Some error occured")
        })
    }
    return (
        <div className="fixed w-[310px] top-0 bg-white  p-2 flex items-center justify-between">
            <p className="font-semibold text-[15px]">readlo.</p>
            <button onClick={addNewLink} className="p-2 flex items-center text-[10px] justify-center bg-black text-white rounded-lg px-3">
                Add New <PlusIcon size={10} className='ml-1' />
            </button>
        </div>
    )
}

export default Header