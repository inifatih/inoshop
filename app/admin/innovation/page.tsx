"use server";

import AddInnovation from "@/components/admin/AddInnovation";
import TableInnovation from "@/components/admin/TableInnovation";

export default async function AddInnovationPage() {
  
  return (
    <div className="p-6">
      <AddInnovation />
      <TableInnovation /> 
    </div>

  );
}