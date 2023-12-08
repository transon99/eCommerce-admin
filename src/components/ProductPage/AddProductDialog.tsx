import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import { FaPencil } from 'react-icons/fa6'
import { PiPlusCircleBold } from 'react-icons/pi'
import FileInput from '../Input/FileInput'
import ListBoxs from '../Input/ListBox'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import ListBox from '../Input/ListBox'

interface PropTypes {
  varient: string
  data?: TAddProduct
}

interface InputProps {
  textProps: string
}

const TextH = ({ textProps }: InputProps) => {
  return <p className='text-primary my-2'>{textProps}</p>
}

const AddProductDiaLog = ({ varient, data }: PropTypes) => {
  const { register, handleSubmit, control } = useForm<TAddProduct>()

  const handleAddProduct = (data: any) => {
    console.log('data', data)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {varient === 'ADD' ? (
          <Button size='3' radius='full' className='w-full !cursor-pointer hover:bg-[#263E7B] bg-[#2f62ff3c] '>
            Add new product
            <PiPlusCircleBold />
          </Button>
        ) : (
          <Button
            variant='outline'
            color='indigo'
            radius='full'
            className='hover:cursor-pointer hover:bg-[#3E5093] hover:text-white col'
          >
            <FaPencil />
            Edit
          </Button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#171F29] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-scroll no-scrollbar'>
          <Dialog.Title className='text-primary m-0 text-2xl font-bold'>
            {varient === 'ADD' ? 'Add product' : 'Edit product'}
          </Dialog.Title>
          <Dialog.Description className='text-primary mt-[10px] mb-5 text-[15px] leading-normal'>
            Product Setting
          </Dialog.Description>
          <form className='' onSubmit={handleSubmit((data) => handleAddProduct(data))}>
            <div className='gap-5'>
              {/* Line 1 */}
              <div>
                <TextH textProps='Product Name' />
                <Input
                  name='productName'
                  register={register}
                  type='text'
                  // defaulValue={data?.categoryName}
                  placeholder='Enter product name...'
                />
              </div>
              <div>
                <TextH textProps='Description' />
                <textarea
                  id='message'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write description here...'
                ></textarea>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='w-full'>
                  <TextH textProps='Brand name' />
                  {/* <Controller name='brandName' control={control} render={({ field }) => <ListBox field={field} />} /> */}
                </div>
                <div className='w-full'>
                  <TextH textProps='Category' />
                  {/* <ListBoxs register={register} name='category' /> */}
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='w-full'>
                  <TextH textProps='Regular Price' />
                  <Input
                    name='price'
                    register={register}
                    type='number'
                    // defaulValue={data?.categoryName}
                    placeholder='Enter the price...'
                  />
                </div>
                <div className='w-full'>
                  <TextH textProps='Discount' />
                  <Input
                    name='price'
                    register={register}
                    type='number'
                    // defaulValue={data?.categoryName}
                    placeholder='Enter the discount...'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='w-full'>
                  <TextH textProps='SKU' />
                  <Input
                    name='sku'
                    register={register}
                    type='text'
                    // defaulValue={data?.categoryName}
                    placeholder='Enter the sku code...'
                  />
                </div>
                <div className='w-full'>
                  <TextH textProps='Quantity in Stock' />
                  <Input
                    name='price'
                    register={register}
                    type='number'
                    // defaulValue={data?.categoryName}
                    placeholder='Enter the quantity...'
                  />
                </div>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
              <FileInput register={register} variant={varient} name='imageUrl1' />
              <FileInput register={register} variant={varient} name='imageUrl2' />
              <FileInput register={register} variant={varient} name='imageUrl3' />
              <FileInput register={register} variant={varient} name='imageUrl4' />
            </div>
            <div className='mt-[25px] flex justify-end'>
              <button className='bg-[#263E7B] !cursor-pointer text-primary hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
                Save
              </button>
            </div>
          </form>
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

export default AddProductDiaLog
