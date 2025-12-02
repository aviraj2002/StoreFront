import PageHeader from "@/components/shared/page-header";
import { DataTable } from "@/components/shared/data-table";
import { userColumns } from "@/components/admin/user-columns";
import { getUsers } from "@/lib/data";
import { User } from "@/lib/types";

export default async function AdminUsersPage() {
  const users: User[] = await getUsers();

  return (
    <div>
      <PageHeader
        title="User Management"
        description="View, edit, and manage all users on the platform."
      />
      <DataTable columns={userColumns} data={users} filterColumn="email" />
    </div>
  );
}
