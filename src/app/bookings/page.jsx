"use client";

import {
  User,
  Table,
  Button,
  Tooltip,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableColumn,
} from "@nextui-org/react";

// ::::: UTILS :::::
import { columns } from "./utils/columns";

// ::::: MODALS :::::
import ModalAdd from "./(modals)/(add)";
import ModalEdit from "./(modals)/(edit)";
import ModalRemove from "./(modals)/(remove)";

// ::::: REACT / HOOKS :::::
import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

// ::::: ICONOS :::::
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BsPlusCircleDotted } from "react-icons/bs";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const Bookings = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {}, []);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "Nombre":
        return (
          <User description={user.nombre} name={cellValue}>
            {user.nombre}
          </User>
        );
      case "Edad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.edad}
            </p>
          </div>
        );
      case "Fecha inscripción":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.fecha_inscripcion}
            </p>
          </div>
        );
      case "opciones":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <BsPencilFill onClick={() => setEdit(true)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <BsFillTrash3Fill onClick={() => setRemove(true)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex gap-3">
            <Button
              color="primary"
              onClick={() => setCreate(true)}
              endContent={<BsPlusCircleDotted />}
            >
              AGREGAR NUEVA RESERVA
            </Button>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <NextUIProvider className="mt-2 mb-auto">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-white text-[30px] font-bold text-center mb-2">
          RESERVAS
        </h1>
        <Table
          aria-label="Example table with custom cells"
          topContent={topContent}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* ::::: MODALS ::::: */}
      <ModalAdd open={create} setOpen={setCreate} />
      <ModalEdit open={edit} setOpen={setEdit} />
      <ModalRemove open={remove} setOpen={setRemove} />
    </NextUIProvider>
  );
};

export default Bookings;
