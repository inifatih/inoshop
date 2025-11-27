"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

import { getAllInnovations } from "@/app/admin/innovation/action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface InnovationItem {
  id: string | number;
  nama_inovasi: string;
  deskripsi_inovasi?: string;
  asal_inovasi?: string;
  created_at: string;
  profiles?: { id: string; nama: string } | null;
}

export default function TableInnovation() {
  const [data, setData] = useState<InnovationItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const innovations = await getAllInnovations();
      setData(innovations);
    } catch (err) {
      console.error("Error fetching innovations:", err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card className="w-full border rounded-xl shadow-sm bg-white mt-6">
      <CardHeader className="bg-orange-50 border-b">
        <CardTitle className="text-xl font-semibold text-orange-600">
          Daftar Inovasi
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 mx-4">
        {loading ? (
          <div className="text-center py-6 text-gray-500">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-6 text-gray-500 italic">Belum ada data inovasi.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="text-gray-700">Nama Inovasi</TableHead>
                <TableHead className="text-gray-700">Deskripsi</TableHead>
                <TableHead className="text-gray-700">Asal</TableHead>
                <TableHead className="text-gray-700">Inovator</TableHead>
                <TableHead className="text-gray-700">Tanggal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} className="hover:bg-orange-50/40">
                  <TableCell className="text-gray-800">{item.nama_inovasi}</TableCell>
                  <TableCell className="text-gray-700">{item.deskripsi_inovasi ?? "—"}</TableCell>
                  <TableCell className="text-gray-700">{item.asal_inovasi ?? "—"}</TableCell>
                  <TableCell className="text-gray-700">
                    {item.profiles?.nama ?? "—"}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {item.created_at
                      ? new Date(item.created_at).toLocaleDateString("id-ID")
                      : "—"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
