import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { MdDelete } from 'react-icons/md'

import ActionBtn from '../ActionBtn'
import { AddBrandDiaglog } from '../Dialog'
import brandApi from '@/apis/brandApi'

interface ManageBannerClientProps {
  banners: Banner[]
}

const ManageBannerClient: React.FC<ManageBannerClientProps> = ({ banners }) => {
  let rows: any = []

  const handleDelete = (id: string) => {
    console.log('id: ', id)
    brandApi.delete(id)
    window.location.reload()
  }

  if (banners) {
    rows = banners.map((banner) => {
      return {
        id: banner.id,
        name: banner.name,
        imageUrl: banner.imageUrl
      }
    })
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 200 },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 420,
      renderCell: (param) => {
        return (
          <div className='w-16 h-9 rounded-lg overflow-hidden'>
            <img key={param.row.imageUrl} src={param.row.imageUrl} />
          </div>
        )
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (param) => {
        return (
          <div className='flex justify-between gap-4 w-full'>
            <AddBrandDiaglog varient='EDIT' dataProps={param.row} />
            <ActionBtn icon={MdDelete} onClick={() => handleDelete(param.row.id)} />
          </div>
        )
      }
    }
  ]

  return (
    <div className=' mx-auto text-xl'>
      <div className='bg-white rounded-xl overflow-auto'>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  )
}

export default ManageBannerClient
