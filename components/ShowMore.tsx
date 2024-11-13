"use client";
import { ShowMoreProps } from '@/types';
 import {useRouter} from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';
const ShowMore = ({pageNumber , isNext,onShowMore} : ShowMoreProps) => {

  
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton title="Show More" btnType='button' containerStyles='bg-primary-blue rounded-full text-white'
        handleClick={onShowMore}/>
      )}
    </div>
  )
}

export default ShowMore


