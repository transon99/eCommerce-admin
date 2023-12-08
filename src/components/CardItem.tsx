import { Button, Card, Flex, Heading, Text } from '@radix-ui/themes'
import { FaPencil } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AddProductDialog } from '.'

const CardItem = () => {
  return (
    <div className='bg-secondary'>
      <Card size='2' className='!bg-secondary text-primary'>
        <Flex direction={'column'} gap={'3'}>
          <img
            src='https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
            alt='Bold typography'
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 140,
              backgroundColor: 'var(--gray-5)'
            }}
            className='rounded-lg'
          />
          <Flex direction={'column'} gap={'2'}>
            <Link to='/'>
              <Heading as='h3' className='text-base'>
                PlayStation 5 Gaming Console
              </Heading>
            </Link>

            <Text as='p' size='3' weight={'medium'} className='text-[#00BA9D] leading-[1.4]'>
              Available : 200
            </Text>
            <Text as='p' size='3' weight={'medium'} className='text-[#4F89FC] leading-[1.4]'>
              Already sold : 158
            </Text>
            <Text as='p' size='3' weight={'medium'} className='text-white leading-[1.4]'>
              Regular price : $199
            </Text>
            <Text as='p' size='3' weight={'medium'} className='text-white leading-[1.4]'>
              Sale price : $199
            </Text>
          </Flex>
        </Flex>
        <div className='grid grid-cols-2 gap-1.5 mt-4'>
          <AddProductDialog varient='EDIT' />

          <Button
            variant='outline'
            color='red'
            radius='full'
            className='hover:cursor-pointer hover:bg-[#FF5470] hover:text-white col'
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default CardItem
