'use client'

import brandApi from '@/apis/brandApi'
import categoryApi from '@/apis/categoryApi'
import { AddProductDialog, CardItem, ListBox } from '@/components'
import Search from '@/components/Search'
import { CustomButton } from '@/components/common'
import { Flex, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsCpu } from 'react-icons/bs'

const Product = () => {
  const { handleSubmit, control } = useForm()
  const [categoryId, setCategoryId] = useState<string>('')
  const [brandId, setBrandId] = useState<string>('')

  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesEesponse = await categoryApi.getAll()
        setCategories(categoriesEesponse.data)
        const brandResponse = await brandApi.getAll()
        setBrands(brandResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  const handleFilter = (data: any) => {
    console.log('filter', data)
  }

  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div
        className='card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4 '
      >
        <h1 className='text-primary flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5'>
          Products Management
        </h1>
      </div>
      <div className='flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5 pt-0'>
        <Flex direction={'column'} gap={'3'}>
          <AddProductDialog varient='ADD' categoriesData={categories} />
        </Flex>
        <div className='relative lg:w-[326px]'>
          <Search placeholder='Search Product ...' />
        </div>
      </div>
      <div className='flex flex-col flex-1 p-5 text-primary'>
        <div className='flex flex-wrap gap-2 mb-4 items-center justify-between'>
          <Text>
            Products:{' '}
            <Text weight={'bold'}>
              All <Text weight={'light'}>(16)</Text>
            </Text>
          </Text>
        </div>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <Flex
            align={'center'}
            gap={'3'}
            className=' bg-secondary card !p-5  items-center gap-4 min-w-[218px] rounded-xl'
          >
            {categoryId ? (
              <>
                <div className='p-2 bg-[#263E7B] rounded-lg'>
                  <img src='' alt='' />
                </div>
                <Text as={'p'} size={'5'} weight={'bold'}>
                  CPU
                </Text>
              </>
            ) : null}
          </Flex>
          <form
            className='flex justify-center items-center gap-2.5 sm:gap-[26px] '
            onSubmit={handleSubmit((data) => {
              handleFilter(data)
            })}
          >
            {/* <FilterListBox onChange={handleChangeFilter} datas={categories} name='Category' />
            <FilterListBox onChange={handleChangeFilter} datas={brands} name='Brand' /> */}
            <Controller
              name='category'
              control={control}
              render={({ field }) => <ListBox field={field} data={categories} name='Category' />}
            />

            <Controller
              name='brand'
              control={control}
              render={({ field }) => <ListBox field={field} data={brands} name='Brand' />}
            />
            <CustomButton className='bg-[#263E7B] !cursor-pointer text-primary hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'>
              Search
            </CustomButton>
          </form>
        </div>
      </div>
      <div
        className='grid flex-1 items-start gap-[26px] mb-[30px] sm:  md:grid-cols-2
                 lg:grid-cols-3 2xl:grid-cols-4 p-5'
      >
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  )
}

export default Product
