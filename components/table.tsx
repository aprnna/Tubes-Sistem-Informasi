import React from 'react';

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

function formatID(id: number): string {
  const prefix = "NT";
  const paddedID = id.toString().padStart(6, '0');

  return `${prefix}${paddedID}`;
}

function formatToDateTimeLocal(timestamp:string) {
  const parts = timestamp.split('T');
  
  const datePart = parts[0].split('-');
  const year = datePart[0];
  const month = datePart[1];
  const day = datePart[2];

  const timePart = parts[1].split('.')[0].split(':');

  const hour = timePart[0];
  const minute = timePart[1];
  const second = timePart[2];

  const formattedDateTimeLocal = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

  console.log(formattedDateTimeLocal)

  return formattedDateTimeLocal;
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto px-12 pb-4">
      <table className="min-w-full border-separate border-spacing-0 border-spacing-y-2">
        <thead className="bg-amber-900">
          <tr>
            <td
              className="px-6 py-3 text-center text-sm font-medium text-slate-50 tracking-wider border-b-2 border-gray-200 rounded-tl-xl rounded-bl-xl normal-case"
            >
              No.
            </td>
            {columns.map((column, index) => (
              <td
                key={column.key}
                className={`px-6 py-3 text-center text-sm font-medium text-slate-50 normal-case tracking-wider border-b-2 border-gray-200 ${
                  index === columns.length - 1 ? 'rounded-tr-xl rounded-br-xl' : ''
                }`}
              >
                {column.label}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-red-100">
              <td
                className={`px-6 py-3 text-center whitespace-nowrap text-xs font-medium text-gray-900 border-b border-gray-200 rounded-tl-xl rounded-bl-xl`}
              >
                {rowIndex + 1}
              </td>
              {columns.map((column, colIndex) => (
                <td
                  key={column.key}
                  className={`px-6 py-3 whitespace-nowrap text-center text-xs font-medium text-gray-900 border-b border-gray-200 ${
                    colIndex === columns.length - 1
                      ? 'rounded-tr-xl rounded-br-xl'
                      : ''
                  }`}
                >
                  {column.key === 'id' ? formatID(row[column.key]) : column.key === 'created_at' ? formatToDateTimeLocal(row[column.key]) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
