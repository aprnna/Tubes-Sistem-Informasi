import React from 'react';

interface Column {
    key: string;
    label: string;
  }
  
  interface TableProps {
    columns: Column[];
    data: any[];
  }

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto px-12 py-4">
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
                  {row[column.key]}
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
