import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/request";

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({
        last: true,
        totalElements: 0,
        totalPages: 0,
        number: 0,
        first: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?size=10&page=1&sort=date,desc`)
            .then(
                response => {
                    setPage(response.data);
                }
            )
    }, []
    )

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        page.content?.map(x => (
                            <tr key={x.id}>
                            <td>{ formatLocalDate(x.date, 'dd/MM/yyyy')}</td>
                            <td>{x.seller.name}</td>
                            <td>{x.visited}</td>
                            <td>{x.deals}</td>
                            <td>{x.amount.toFixed(2)}</td>
                        </tr>
    
                        ))
                    } 
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;