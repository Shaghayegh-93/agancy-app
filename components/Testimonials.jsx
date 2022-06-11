import Image from "next/image";
import React from "react";
import Circle from "./Circle";

const Testimonials = ({ usersItem }) => {
  return (
    <div className="h-[100vh] relative overflow-hidden flex flex-col items-center space-around pb-[100px]">
      <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
      <h2 className="font-extrabold tracking-wider text-lg mt-14 ">
        Testimonilas
      </h2>

      <div className="flex mt-[120px] items-center space-around flex-wrap">
        {usersItem.map((user) => (
          <div key={user.id} className="flex-1 mx-5">
            <Image
              width="30"
              height="30"
              alt="mediaLogo"
              src={`/img/${user.logo}`}
            />

            <p className="text-xl font-light text-gray-600">{user.comment}</p>

            <div className="flex items-center mt-3 ">
              <Image
                alt="avatar"
                src={`/img/${user.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                className="rounded-full   "
              />

              <div className="ml-5">
                <p className="font-bold text-gray-800">{user.name}</p>
                <p className="text-sm">{user.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
