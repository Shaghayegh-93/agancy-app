import Image from "next/image";
import React from "react";
import Circle from "./Circle";

const Testimonials = ({ usersItem }) => {
  //   console.log("users:", users);
  console.log("usersItem:", usersItem);
  return (
    <div className="h-[100vh] relative overflow-hidden">
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      {/* <div className="w-[400px] h-[200px] bg-slate-300 rounded-br-full rounded-bl-full flex items-center justify-center mx-auto font-semibold"> */}
      <h2 className="font-extrabold tracking-wider text-lg ">Testimonilas</h2>

      <div className="flex">
        {usersItem.map((user) => (
          <div key={user.id} className="flex-1">
            <Image
              width="30"
              height="30"
              // layout="fill"
              // objectFit="cover"
              alt="mediaLogo"
              src={`/img/${user.logo}`}
            />

            <p>{user.comment}</p>

            <div className="flex items-center ">
              <Image
                alt="avatar"
                src={`/img/${user.avatar}`}
                width="45"
                height="45"
                //   layout="fill"
                objectFit="contain"
                className="rounded-full   "
              />

              <div>
                <p>{user.name}</p>
                <p>{user.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
