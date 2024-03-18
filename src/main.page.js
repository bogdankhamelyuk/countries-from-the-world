import "./App.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Spinner from "./spinner.comp";
import { getCountries } from "./utils";
import { columns } from "./utils";
export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getCountries().then((response) => {
      setData(response);
      console.log(response);
      setIsLoading(false);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: response.length,
        },
      });
    });
  }, [JSON.stringify(tableParams)]);
  //
  return (
    <div className="page-container">
      <Table
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={isLoading}
        onChange={handleTableChange}
        rowKey={(record) => record.population.toString()}
      />
    </div>
  );
}
