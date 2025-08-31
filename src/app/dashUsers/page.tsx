import SideBar from "../../components/users/Cliente/sideBar";
import Header from "../../components/users/Cliente/header";
// import DataTable from "../../components/users/Cliente/DataTable/DataTable";

export default function Usuarios() {
  return (
    <div className="flex h-screen">
      {/* SIDEBAR */}
      <SideBar />

      {/* CONTENIDO (HEADER Y DEMÁS) */}
      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Header />
        {/* <DataTable /> */}
      </div>
    </div>
  );
}
