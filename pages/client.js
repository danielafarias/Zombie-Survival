import ClientList from "../components/ClientList";
import Header from "../components/Header";
import { Typography } from "@material-ui/core";
import { getClients } from "../api/Api";
import Head from "next/head";
import React from "react";

export default function Client() {
  const [clients, setClients] = React.useState("");

  if (!clients) {
    getClients().then((res) => setClients(res));
  }
  const data = Array.from(clients);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Zombie Survival</title>
      </Head>
      <Header title="Your future neighbors" />

      <br />
      <Typography variant="h5">
        Click on row to see more information about a client:
      </Typography>
      <br />
      {data.map((data) => (
        <ClientList
          key={data._id}
          name={data.name}
          lastname={data.lastname}
          email={data.email}
          number={data.number}
          zip={data.zip}
          address1={data.address1}
          address2={data.address2}
          CPF={data.CPF}
          birthday={data.birthday}
          income={data.income}
        />
      ))}
    </div>
  );
}
