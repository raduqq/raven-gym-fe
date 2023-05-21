import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function Students() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const token = sessionStorage.getItem("token")?.slice(1, -1);
      const authHeader = `Bearer ${token}`;
      const response = await fetch("http://localhost:8080/students", {
        method: "GET",
        headers: {
          Authorization: authHeader,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Process the received students data
        setStudents(data);
      } else {
        // Handle error response
        console.error("Failed to fetch students");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error occurred while fetching students", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 }
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = students.map((student) => ({
  id: student.id,
  name: student.name,
  email: student.email,
}));


  return (
    <div>
      <h1>Students</h1>
      <p>
        Here, you will find a comprehensive list of all the dedicated and
        talented students who are part of our academy. Our students come from
        various backgrounds and age groups, united by their passion for martial
        arts and their commitment to personal growth and self-student.
      </p>
      <h2>Enrolled Students</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[2, 5, 10]}
      />
      {/* TODO Table */}
      {/* {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
      ))} */}
    </div>
  );
}
