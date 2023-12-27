import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import './DataTable.scss'
import { Link } from 'react-router-dom'
import ActionBtn from '../ActionBtn'
import { MdDelete } from 'react-icons/md'
import { AddBrandDiaglog } from '../Dialog'
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  columns: GridColDef[]
  rows: object[]
  slug?: string
}

const DataTable = (props: Props) => {
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number) => {
    //delete the item
    // mutation.mutate(id)
  }

  const actionColumn: GridColDef = {
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

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
