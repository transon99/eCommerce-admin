import { useState, useEffect } from 'react'
import Search from '@/components/Search'
import { Flex, Text } from '@radix-ui/themes'
import { ManageCategoryClient } from '@/components/Table'
import { AddCategoryDiaglog } from '@/components/Dialog'
import categoryApi from '@/apis/categoryApi'

const CategoryPage = () => {
  const [data, setData] = useState<Category[]>([])
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const param = {
          searchText: '',
          offset: 0,
          pageSize: 5,
          sortStr: ''
        }
        const response = await categoryApi.getAll(param)
        console.log(response.data.data.content)
        setData(response.data.data.content)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  // const [selectedCountry, setSelectedCountry] = useState('')

  // const handleListBoxChange = (value: string) => {
  //   setSelectedCountry(value)
  //   console.log(value)
  // }

  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div
        className='card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4 '
      >
        <h1 className='text-primary flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5'>
          Category Management
        </h1>
      </div>
      <div className='flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5 pt-0'>
        <Flex direction={'column'} gap={'3'}>
          <AddCategoryDiaglog varient='ADD' />
        </Flex>
        <div className='relative lg:w-[326px]'>
          <Search placeholder='Search Category ...' />
        </div>
      </div>
      <div className='flex flex-col flex-1 p-5 text-primary'>
        <div className='flex flex-wrap gap-2 mb-4 items-center justify-between'>
          <Text>
            Category:{' '}
            <Text weight={'bold'}>
              All <Text weight={'light'}>({data.length})</Text>
            </Text>
          </Text>
          {/* <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <FilterListBox onChange={handleListBoxChange} />
          </div> */}
        </div>
        <div className='mt-5 rounded-xl'>
          <ManageCategoryClient categories={data} />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
