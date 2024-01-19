/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { ListItemProps } from '../types/ListItemProps';
import ListItem from './ListItem';
import { onValue, ref } from 'firebase/database';
import { database } from '../firebase/config';
import { Loader2Icon } from 'lucide-react';

const ReadlingList = () => {
  const [data, setData] = useState<Array<ListItemProps> | null>(null);


  useEffect(() => {
    const linksRef = ref(database, '/links/');
    onValue(linksRef, (snapshot) => {
      if (snapshot.val()) {
        const response: any = Object.keys(snapshot.val()).map((item:any) => {
          return {
            id: item,
            ...snapshot.val()[item]
          }
        });
        console.log(response)
        setData(response)
      } else {
        setData([])
      }
      
    }, ()=>setData([]));
  }, [])

  if (!data) {
    return <div className='h-[300px] w-[310px] flex items-center justify-center'>
      <Loader2Icon className='animate-spin' />
    </div>
  }


  if (!data.length) {
    return <div className='h-[300px] w-[310px] flex items-center justify-center'>
      <p className='text-black mx-auto text-sm'>No Records found!</p>
    </div>
  }



  return (
    <div className='mt-[50px] h-[250px] overflow-y-scroll px-2'>
      {
        data.map((item: ListItemProps) => {
          return <ListItem key={item.id} {...item} />
        })
      }
    </div>
  )
}

export default ReadlingList