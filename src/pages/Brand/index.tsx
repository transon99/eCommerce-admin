import { useState, useEffect } from 'react'
import { AddBrandDiaglog } from '@/components/Dialog'
import Search from '@/components/Search'
import ManageBrandClient from '@/components/Table/ManageBrandClient'
import { Flex, Text } from '@radix-ui/themes'
import brandApi from '@/apis/brandApi'

const LableTHeader: string[] = ['BRAND_ID', 'NAME', 'IMAGE']

const data = [
  {
    brandId: '1',
    name: 'Brand 1',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  },
  {
    brandId: '2',
    name: 'Brand 2',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
  }
]

const BrandPage = () => {
  const [data, setData] = useState<Brand[]>([])
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
        const response = await brandApi.getAll(param)
        console.log(response.data.data.content)
        setData(response.data.data.content)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div className='overflow-hidden'>
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
            <AddBrandDiaglog varient='ADD' />
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
                All <Text weight={'light'}>(16)</Text>
              </Text>
            </Text>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              {/* <ListBoxs /> */}
            </div>
          </div>
          <div className='mt-5 rounded-xl'>
            <ManageBrandClient brands={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandPage
