import * as React from 'react';
import { getHistory } from "../api/api";
import { SharedHistory } from "../shared/shareddtypes";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function History() {
    const [history, setHistory] = React.useState<SharedHistory[]>([]);
    const [pageSize, setPageSize] = React.useState<number>(5);

    let columns: GridColDef[] = [
        { field: 'product_name', headerName: 'Product', flex: 1 },
        { field: 'product_type', headerName: 'Type', flex: 1 },
        { field: 'product_price', headerName: 'Price', flex: 1 },
        { field: 'amount', headerName: 'Amount', flex: 1 },
        { field: 'order_id', headerName: 'Order', flex: 1 },
        { field: 'state', headerName: 'State', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
      ];

    const refreshHistory = async () => {
        setHistory(await getHistory());
    }

    React.useEffect(()=>{
        refreshHistory();
      });

    return (
        <body>
            <h1 id="titleHistory">History</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    columns={columns}
                    rows={history} 
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                />
            </div>
        </body>
    );
}