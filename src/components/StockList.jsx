import { useEffect , useState} from "react";
import { getAllStock} from "../api/base.api"

export function StockList() {
        const [stock, setStock]=useState([]); 
    useEffect(() => {
        
        async function loadStock() {
            const res = await getAllStock()
            setStock(res.data)
        };
        loadStock()
} ,[]); 
    return <div>
            <table>
                <thead>
                    <tr>
                        <th>categoria</th>
                        <th>Name</th>
                        <th>Codigo interno</th>
                        <th>proveedor</th>
                    </tr>
                </thead>
                <tbody>
                    {stock.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.categoria.nombre}</td>
                            <td>{stock.nombre}</td>
                            <td>{stock.codigo_interno}</td>
                            <td>{stock.proveedor.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
}