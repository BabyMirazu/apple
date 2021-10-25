import React, { FC} from 'react';
import Row from './Row';

const Table: FC = () => {
    return (
        <table className="main-table w-100">
            <thead>
                <tr>
                    <th>
                        <div>Order</div>
                    </th>
                    <th>
                        <div>Subnet</div>
                    </th>
                    <th>
                        <div>Valid until</div>
                    </th>
                    <th>
                        <div>User</div>
                    </th>
                    <th>
                        <div>Status</div>
                    </th>
                    <th>
                    </th>
                </tr>
                <tr className="devider">
                    <td colSpan={6}></td>
                </tr>
            </thead>
            <tbody>
                <Row />
                <Row />
            </tbody>
        </table>
    )
}

export default Table;
