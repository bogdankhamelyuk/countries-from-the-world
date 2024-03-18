import "./App.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getCountries } from "./utils";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [backup, setBackup] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.length === 0) {
      setData(backup);
    } else {
      // DOESNT WORK EVEN WITH SETTED STRING!!!
      const filteredData = backup.filter((item) => {
        item.name.common.toLowerCase().includes("cyprus");
      });
      console.log(filteredData);
      setData(filteredData);
    }
  };

  const sortName = (a, b) => {
    const valueA = a.name.common;
    const valueB = b.name.common;
    return valueA.localeCompare(valueB);
  };

  const handleCountryClick = (record) => {
    console.log(record);
    navigate("/country", { state: { record } });
  };

  const columns = [
    {
      title: "Country Name",
      dataIndex: "name",
      sorter: (a, b) => sortName(a, b),
      render: (name, record) => <a onClick={() => handleCountryClick(record)}>{name.common}</a>,
      width: "20%",
    },
    {
      title: "Region",
      dataIndex: "region",
      width: "20%",
      sorter: true,
    },
    {
      title: "Population",
      dataIndex: "population",
      sorter: true,
    },
    {
      title: "Flag",
      dataIndex: "flags",
      sorter: true,
      render: (flag) => <img src={flag.svg} alt="Flag" style={{ width: 25, height: 20 }} />,
    },
  ];

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
      setBackup(response);
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
      <div className="vert-container">
        <Input value={searchText} onChange={(e) => handleSearch(e.target.value)} />

        <Table
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
          rowKey={(record) => record.population.toString()}
        />
      </div>
    </div>
  );
}
