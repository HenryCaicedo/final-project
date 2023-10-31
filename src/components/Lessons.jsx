import React from "react";

function Lesson({ number }) {
  return (
    <div className="bg-bluen w-[10vh] h-[10vh] rounded-xl justify-center text-5xl flex justify-center items-center drop-shadow font-bold">
      {number}
    </div>
  );
}

export default Lesson;
