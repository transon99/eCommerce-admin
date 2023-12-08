import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { MdDelete } from 'react-icons/md'

import ActionBtn from '../ActionBtn'
import { AddCategoryDiaglog } from '../Dialog'
import categoryApi from '@/apis/categoryApi'

interface ManageCategoryClientProps {
  categories: Category[]
}

const ManageCategoryClient: React.FC<ManageCategoryClientProps> = ({ categories }) => {
  let rows: any = []

  const handleDelete = (id: string) => {
    categoryApi.delete(id)
    window.location.reload()
  }

  if (categories) {
    rows = categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        imageUrls: category.imageUrls
      }
    })
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 220 },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 220,
      renderCell: (param) => {
        return (
          <div className='w-10 h-10 rounded-lg overflow-hidden'>
            {param.row.imageUrls.map((imageUrl: any) => (
              <img key={imageUrl.id} src={imageUrl.thumbnailUrl} />
            ))}
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
            <AddCategoryDiaglog varient='EDIT' dataProps={param.row} />
            <ActionBtn icon={MdDelete} onClick={() => handleDelete(param.row.id)} />
          </div>
        )
      }
    }
  ]
  // const [page, setPage] = React.useState(0)
  // const [rowsPerPage, setRowsPerPage] = React.useState(10)

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage)
  // }

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value)
  //   setPage(0)
  // }

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

export default ManageCategoryClient
