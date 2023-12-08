'use client'

import { Button } from '@radix-ui/themes'
import { PiPlusCircleBold } from 'react-icons/pi'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { FaEdit } from 'react-icons/fa'
import FileInput from '../Input/FileInput'

interface PropTypes {
  varient: string
  data?: TBrand
}

interface InputProps {
  textProps: string
}

const TextH = ({ textProps }: InputProps) => {
  return <p className='text-primary my-2'>{textProps}</p>
}

const AddBrandDiaglog = ({ varient, data }: PropTypes) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {varient === 'ADD' ? (
          <Button size='3' radius='full' className='w-full !cursor-pointer hover:bg-[#263E7B] bg-[#2f62ff3c] '>
            Add new brand
            <PiPlusCircleBold />
          </Button>
        ) : (
          <div className='p-2 hover:bg-gray-300 rounded-full cursor-pointer'>
            <FaEdit size={20} />
          </div>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#171F29] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-scroll no-scrollbar'>
          <Dialog.Title className='text-primary m-0 text-2xl font-bold'>
            {varient === 'ADD' ? 'Add barnd' : 'Edit brand'}
          </Dialog.Title>
          <Dialog.Description className='text-primary mt-[10px] mb-5 text-[15px] leading-normal'>
            Brand Setting
          </Dialog.Description>
          <div className='gap-5'>
            {/* Line 1 */}
            <div>
              <TextH textProps='Brand Name' />
              <div className='z-0'>
                <input
                  className='dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]'
                  id='name'
                  defaultValue={data?.brandName}
                />
              </div>
            </div>

            <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
              <FileInput imageUrl={data?.imageUrl} variant={varient} />
            </div>
          </div>
          <div className='mt-[25px] flex justify-end'>
            <Dialog.Close asChild>
              <button className='bg-[#263E7B] !cursor-pointer text-primary hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
                Save
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AddBrandDiaglog
