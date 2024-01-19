import { links } from '../data/data';
import { ListItemProps } from '../types/ListItemProps';
import ListItem from './ListItem';

const ReadlingList = () => {
  return (
      <div className='mt-[60px] h-[300px] overflow-y-scroll px-2'>
          {
              links.map((item:ListItemProps) => {
                return <ListItem {...item} /> 
              })
          }
    </div>
  )
}

export default ReadlingList