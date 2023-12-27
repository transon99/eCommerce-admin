import DataTable from '@/components/Table/DataTable'
import { GridColDef } from '@mui/x-data-grid'
import { userRows } from '../../data'
import { Text } from '@radix-ui/themes'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt='' />
    }
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    width: 200
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    type: 'string'
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean'
  }
]

const UserPage = () => {
  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div
        className='card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4 '
      >
        <h1 className='text-primary flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5'>
          User Management
        </h1>
      </div>
      {/* <div className='flex flex-col-reverse gap-4  md:flex-col lg:flex-row lg:justify-between p-5 pt-0'>
        <Flex direction={'column'} gap={'3'}>
          <AddCategoryDiaglog varient='ADD' />
        </Flex>
      </div> */}
      <div className='flex flex-col flex-1 p-5 text-primary'>
        <div className='flex flex-wrap gap-2 mb-4 items-center justify-between'>
          <Text>
            User: <Text weight={'bold'}>{/* All <Text weight={'light'}>({data ? data.length : 0})</Text> */}</Text>
          </Text>
        </div>
        <div className='mt-5 rounded-xl'>
          <DataTable slug='users' columns={columns} rows={userRows} />
        </div>
      </div>
    </div>
  )
}

export default UserPage
