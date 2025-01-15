// import { triggerToast } from "@/lib/data/showToast";
// import { fetcher } from "@/utils/fetcher";
// import Label from "@/utils/Label";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const CategoryModal = ({ setIsModalOpen }) => {
//   const [newCategory, setNewCategory] = useState({
//     name: "",
//     description: "",
//   });
//   const router  = useRouter()
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const handleAddCategory = async () => {
//     if (
//       newCategory.name.trim() !== "" &&
//       newCategory.description.trim() !== ""
//     ) {
//       try {
//         const formData = {
//           name: newCategory.name,
//           description: newCategory.description,
//         };

//         const res = await fetcher(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/categories`,
//           "POST",
//           formData
//         );

//         if (res.success) {
//           router.refresh();
//           triggerToast("Add category success!");
//         } else {
//           triggerToast("Already exists!", "failed");
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsModalOpen(false);
//       }
//     }
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCategory((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
    // <div className="px-6 pt-4">
    //   <div className="flex flex-col">
    //     <Label text="Category Name*" />
    //     <input
    //       className="border border-black-30 rounded w-[592px] h-9 outline-none px-[10px] py-[7px] placeholder:text-silver 
    //       placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px]"
    //       type="text"
    //       name="name"
    //       value={newCategory.name}
    //       onChange={handleInputChange}
    //       placeholder="Enter category name"
    //     />
    //   </div>
    //   <div className="flex flex-col mt-4">
    //     <Label text="Description" />
    //     <textarea
    //       className="border border-black-30 rounded w-[592px] h-[90px] outline-none px-[10px] py-[7px] placeholder:text-silver 
    //       placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px] resize-none overflow-hidden"
    //       name="description"
    //       value={newCategory.description}
    //       onChange={handleInputChange}
    //       id=""
    //       placeholder="Description"
    //     />
    //   </div>
    //   <div className="flex justify-end gap-[15px] py-6">
    //     <button
    //       className="border border-black-30 text-gray-900 text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
    //       onClick={handleCloseModal}
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       onClick={handleAddCategory}
    //       className="bg-blue-100 text-white text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
    //     >
    //       Add Category
    //     </button>
    //   </div>
    // </div>
//     <div className="px-6 pt-4">
//     <form onSubmit={handleSubmit(handleAddCategory)}>
//       <div className="flex flex-col">
//         <Label text="Category Name*" />
//         <input
//           className={`border rounded w-[592px] h-9 outline-none px-[10px] py-[7px] placeholder:text-silver 
//           placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px]  ${errors.name ? "border-red-500" : "border-black-30 focus:border-blue-100"}`}
//           type="text"
//           name="name"
//           {...register('name', { required: 'Category Name is required' })}
//           placeholder="Enter category name"
//         />
//         {errors.name && <p className="text-red-500 text-xs pt-0.5">{errors.name.message}</p>}
//       </div>
//       <div className="flex flex-col mt-4">
//         <Label text="Description" />
//         <textarea
//           className={`border rounded w-[592px] h-[90px] outline-none px-[10px] py-[7px] placeholder:text-silver 
//           placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px] resize-none overflow-hidden ${errors.description ? "border-red-500" : "border-black-30 focus:border-blue-100"}`}
//           name="description"
//           {...register('description',{ required: 'description  is required' })}
//           placeholder="Description"
//         />
//         {errors.description && <p className="text-red-500 text-xs pt-0.5">{errors.description.message}</p>}
//       </div>
//       <div className="flex justify-end gap-[15px] py-6">
//         <button
//           type="button"
//           className="border border-black-30 text-gray-900 text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
//           onClick={handleCloseModal}
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="bg-blue-100 text-white text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
//         >
//           Add Category
//         </button>
//       </div>
//     </form>
//   </div>

//   );
// };

// export default CategoryModal;      

// "use server"
// import { cookies } from "next/headers";
// export async function fetcher(url, method = "GET", form = null) {
//   const formData = form ? JSON.stringify(form) : null
//   const cookieStore = cookies();
//   const res = await fetch(url, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `Bearer ${cookieStore.get("auth_token")?.value}`,
//     },
//     body: formData,
//     cache: "no-store"
//   });
//   try {
//     return await res.json();
//   } catch (e) {
//     console.log(e);
//     return {};
//   }
// }







// import { triggerToast } from "@/lib/data/showToast";
// import { fetcher } from "@/utils/fetcher";
// import Label from "@/utils/Label";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";

// const CategoryModal = ({ setIsModalOpen }) => {
//   const router = useRouter();
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const handleAddCategory = async (data) => {
//     try {
//       const formData = {
//         name: data.name,
//         description: data.description,
//       };

//       const res = await fetcher(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/categories`,
//         "POST",
//         formData
//       );

//       if (res.success) {
//         router.refresh();
//         triggerToast("Add category success!");
//       } else {
//         triggerToast("Already exists!", "failed");
//       }
//     } catch (error) {
//       console.log(error); 
//     } finally {
//       setIsModalOpen(false);
//     }
//   };

//   return (
//     <div className="px-6 pt-4">
//       <form onSubmit={handleSubmit(handleAddCategory)}>
//         <div className="flex flex-col">
//           <Label text="Category Name*" />
//           <input
//             className={`border rounded w-[592px] h-9 outline-none px-[10px] py-[7px] placeholder:text-silver 
//             placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px]  ${errors.name ? "border-red-500" : "border-black-30 focus:border-blue-100"}`}
//             type="text"
//             name="name"
//             {...register('name', { required: 'Category Name is required' })}
//             placeholder="Enter category name"
//           />
//           {errors.name && <p className="text-red-500 text-xs pt-0.5">{errors.name.message}</p>}
//         </div>
//         <div className="flex flex-col mt-4">
//           <Label text="Description" />
//           <textarea
//             className={`border rounded w-[592px] h-[90px] outline-none px-[10px] py-[7px] placeholder:text-silver 
//             placeholder:text-xs placeholder:font-normal placeholder:leading-[15.6px] resize-none overflow-hidden ${errors.description ? "border-red-500" : "border-black-30 focus:border-blue-100"}`}
//             name="description"
//             {...register('description',{ required: 'Description is required' })}
//             placeholder="Description"
//           />
//           {errors.description && <p className="text-red-500 text-xs pt-0.5">{errors.description.message}</p>}
//         </div>
//         <div className="flex justify-end gap-[15px] py-6">
//           <button
//             type="button"
//             className="border border-black-30 text-gray-900 text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
//             onClick={handleCloseModal}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-100 text-white text-sm font-medium leading-[18.2px] rounded w-[136.5px] h-9"
//           >
//             Add Category
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CategoryModal;
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//     setModalContent(React.cloneElement(<CategoryModal setIsModalOpen={setIsModalOpen} router={router}/>,{key:new Date().getTime()}))

//   };
