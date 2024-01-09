import { CardOrder } from '@/components'
import { EditOrderDialog } from '@/components/Dialog'
import ListBoxs from '@/components/Input/ListBox'
import { DataTable } from '@/components/Table'
import { GridColDef } from '@mui/x-data-grid'
import { Flex, Text } from '@radix-ui/themes'
import { FaCheckToSlot } from 'react-icons/fa6'

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

const data = [{}]

const CardStatus: TCardOrderStatus[] = [
  { Icon: FaCheckToSlot, layble: 'Order Complete', quantity: 2322 },
  { Icon: FaCheckToSlot, layble: 'Order Complete', quantity: 2322 },
  { Icon: FaCheckToSlot, layble: 'Order Complete', quantity: 2322 },
  { Icon: FaCheckToSlot, layble: 'Order Complete', quantity: 2322 }
]

const LableTHeader: string[] = ['#ORDER', 'PRODUCT', 'SKU', 'CATEGORY', 'PAYMENT', 'ORDER STATUS', 'RATE', 'ACTION']

const TableOrder: TTableOrder[] = [
  {
    order: 'string',
    product: 'string',
    sku: 'string',
    category: 'string',
    payment: 'string',
    orderStatus: 'string',
    rate: 4
  }
]

const OrderPage = () => {
  const editOrder = (data: any) => <EditOrderDialog varient='EDIT' dataProps={data} />

  return (
    <div className='h-[calc(100vh-88px)] overflow-auto'>
      <div
        className='card no-hover flex flex-col gap-5 !p-5 md:!p-[26px] lg:!py-5 lg:flex-row
    lg:items-center lg:gap-4 '
      >
        <h1 className='text-white flex-1 text-center lg:text-left text-4xl font-bold bg-[#171F29] rounded-lg !p-5 md:!p-[26px] lg:!py-5'>
          Order Management
        </h1>
      </div>
      <div className='px-5'>
        <div>
          <Text weight={'medium'} size={'4'} className='text-primary'>
            Sort
          </Text>
          <div className='flex gap-2.5 sm:gap-[26px]'>
            {/* <ListBoxs />
            <ListBoxs /> */}
          </div>
        </div>
        <Flex className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4 gap-5'>
          {CardStatus.map((card) => (
            <CardOrder key={card.layble} Icon={card.Icon} layble={card.layble} quantity={card.quantity} />
          ))}
        </Flex>
        <div className='mt-5 rounded-xl'>
          <DataTable slug='orders' columns={columns} rows={data} editBtn={editOrder} />
        </div>
      </div>
    </div>
  )
}

export default OrderPage
