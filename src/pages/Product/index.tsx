'use client'

import brandApi from '@/apis/brandApi'
import categoryApi from '@/apis/categoryApi'
import { AddProductDialog, CardItem, FilterListBox } from '@/components'
import Search from '@/components/Search'
import { Flex, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { BsCpu } from 'react-icons/bs'

const Product = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  console.log(categories)

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

  const handleChangeFilter = (filterData: string) => {
    console.log('filter', filterData)
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
            <div className='p-2 bg-[#263E7B] rounded-lg'>
              <BsCpu />
            </div>
            <Text as={'p'} size={'5'} weight={'bold'}>
              CPU
            </Text>
          </Flex>
          <div className='flex gap-2.5 sm:gap-[26px] '>
            <FilterListBox onChange={handleChangeFilter} datas={categories} name='Cateegory' />
            <FilterListBox onChange={handleChangeFilter} datas={brands} name='Brand' />
          </div>
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
