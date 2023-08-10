// url: http://localhost:3000/api/user

import { createUser, deleteUser, getAllUser } from "@/prisma/user";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

interface QueryParams {
  id?: string;
}

export default async function handler(req: Request) {
  try {
    const router = useRouter();
    const { id } = router.query as QueryParams;

    switch (req.method) {
      case "POST": {
        const body = await req.json();

        const {
          name,
          email,
          password,
          phone,
          role,
          address,
          avatar,
          username,
        } = body;

        const newUser = await createUser({
          name,
          email,
          password,
          phone,
          role,
          address,
          avatar,
          username,
        });

        return NextResponse.json({ newUser }, { status: 200 });
      }
      case "GET": {
        const products = await getAllUser();

        return NextResponse.json({ products }, { status: 200 });
      }

      case "DELETE": {
        if (id) {
          // Check if id is defined
          await deleteUser(id); // Call deleteUser only if id is defined
          return NextResponse.json(
            { message: "User Delete Successful" },
            { status: 200 }
          );
        } else {
          return NextResponse.json(
            { message: "User ID is not provided" },
            { status: 400 }
          );
        }
      }

      default:
        break;
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "User Create Error", err },
      { status: 500 }
    );
  }
}

// export const POST = async (request: Request) => {
//   try {
//     const body = await request.json();
//     const { name, phone, email, username, password, avatar, role, address } =
//       body;
//     const newUser = await createUser({
//       name,
//       phone,
//       email,
//       username,
//       password,
//       role,
//       address,
//       avatar,
//     });

//     return NextResponse.json({ newUser }, { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       { message: "User Create Error", err },
//       { status: 500 }
//     );
//   }
// };
