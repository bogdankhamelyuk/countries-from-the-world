import "./App.css";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Spinner from "./spinner.comp";
import { getCountries } from "./utils";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    getCountries().then((response) => {
      setData(response[0]);
      setIsLoading(false);
    });
  });
  if (!isLoading) {
    return <div>{data}</div>;
  } else {
    return <Spinner />;
  }
}
