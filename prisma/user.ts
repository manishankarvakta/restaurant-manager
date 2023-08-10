import prismadb from "@/lib/prismadb";
import { $Enums } from "@prisma/client";

interface UserType {
  name: string;
  email: string;
  password: string;
  username: string;
  phone: string;
  role: $Enums.Role; // Referencing the Prisma schema's Role enum
  address: string;
  avatar: string;
}

// CREATE USER
export const createUser = async (data: UserType) => {
  const { name, email, password, phone, role, address, avatar, username } =
    data;

  const newUser = await prismadb.user.create({
    data: {
      name,
      email,
      password,
      username,
      phone,
      role,
      address,
      avatar,
    },
  });

  return newUser;
};

// GET ALL USER
export const getAllUser = async () => {
  const users = await prismadb.user.findMany();

  return users;
};

// GET ALL USER
export const deleteUser = async (id: string) => {
  const users = await prismadb.user.delete({
    where: {
      id: id,
    },
  });

  return users;
};
