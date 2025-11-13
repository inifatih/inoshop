// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import Image
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { email, z } from "zod"

// const formSchema = z.object({
//   email: z.string().min(2, { message: "Minimal 2 karakter" }).max(50, { message: "Maksimal 50 karakter" }).email({ message: "Format email tidak valid" }),
//   namaLengkap: z.string().min(2, { message: "Minimal 2 karakter" }).max(50, { message: "Maksimal 50 karakter" }),
//   nomorTelepon: z.string().min(10, { message: "Minimal 10 karakter" }).max(15, { message: "Maksimal 15 karakter" }),
//   pesan: z.string().min(10, { message: "Minimal 10 karakter" }).max(500, { message: "Maksimal 500 karakter" }),
// })

// export default function InovationPage() {
//   return (
//     <main className="w-11/12 h-screen">
//       {/* Header */}
//       <h1 className="font-medium text-2xl">AI Assistant</h1>
//       <h2 className="font-medium text-lg">Technology</h2>

//       {/* Content */}
//       <div className="flex flex-col col-span-2 py-6 gap-3">

//         {/* Image */}
//         <div>
//           {/* <Image
//             src="/images/ai-assistant.jpg"
//             alt="AI Assistant"
//             width={800}
//             height={400}
//             className="w-full h-auto rounded-lg mt-4"
//           /> */}
//         </div>

//         {/* Information */}
//         <div>
//           <h2>Category: Technology</h2>
//           <h2>Author: John Doe</h2>
//           <h2>Date: June 15, 2024</h2>
          
//           <Button>
//             Buat Pesanan
//           </Button>
//         </div>
//       </div>

//       {/* Description/Overview */}
//       <div className="">

//       </div>

//     </main>
//   )
// }