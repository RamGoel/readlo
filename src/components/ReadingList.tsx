import { links } from '../data/data';
import { ListItemProps } from '../types/ListItemProps';
import ListItem from './ListItem';

const ReadlingList = () => {
  return (
      <div>
          {
              links.map((item:ListItemProps) => {
                return <ListItem {...item} /> 
              })
          }
    </div>
  )
}

export default ReadlingList