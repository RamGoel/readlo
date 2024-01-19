import { Clock10, CopyIcon, ExternalLinkIcon } from 'lucide-react';
import { ListItemProps } from '../types/ListItemProps'
import { openURL } from '../utils/open-link';
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ListItem = (props: ListItemProps) => {
    const {
        name,
        url,
        createdAt
    } = props;
    return (
        <div className='p-3 border-2 border-gray-300 rounded-lg mb-3 flex items-center justify-between'>
            <ToastContainer />
            <p className='font-semibold text-[10px] w-[100px] overflow-hidden block whitespace-nowrap text-ellipsis'>{name}</p>
            <div className='ml-auto w-[100px] text-left mx-3 flex items-center'>
                <Clock10 size={10} className='mr-1 text-gray-600'/>
                <p className='my-0 -mt-0.5 text-[10px]'>{moment(createdAt).fromNow()}</p>
            </div>
            <button className='p-2 bg-violet-600 text-white rounded-md' onClick={() => {
                openURL(url)
            }}>
                <ExternalLinkIcon size={10} />
            </button>
            <button className='p-2 ml-1 bg-violet-600 text-white rounded-md' onClick={() => {
                navigator.clipboard.writeText(url)
                toast.success("Copied to clipboard");
            }}>
                <CopyIcon size={10} className='' />
            </button>
        </div>
    )
}

export default ListItem