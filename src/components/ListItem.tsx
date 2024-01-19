import { ListItemProps } from '../types/ListItemProps'
import { openURL } from '../utils/open-link';

const ListItem = (props: ListItemProps) => {
    const {
        name,
        url,
    } = props;
    return (
        <div className='p-3 border-2 border-black rounded-lg mb-3 flex items-center justify-between'>
            <h3 className='font-semibold'>{name}</h3>
            <button className='p-2 bg-violet-600 text-white rounded-md' onClick={() => {
                openURL(url)
            }}>Open</button>
        </div>
    )
}

export default ListItem