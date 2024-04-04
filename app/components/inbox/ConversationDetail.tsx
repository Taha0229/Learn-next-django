"use client";

import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Does</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            maxime ipsum architecto at est amet nostrum sapiente et quis
            aliquam, quos minima rerum exercitationem odit ipsa! Cum temporibus,
            velit minima harum, expedita magni distinctio fugit ea facere
            consequatur quo deserunt.
          </p>
        </div>
        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Jane Doe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            maxime ipsum architecto at est amet nostrum sapiente et quis
            aliquam, quos minima rerum exercitationem odit ipsa! Cum temporibus,
            velit minima harum, expedita magni distinctio fugit ea facere
            consequatur quo deserunt.
          </p>
        </div>
      </div>
      <div className="mt-5 py-3 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />
        <CustomButton label="send" className="w-[100px]" onClick={() => console.log("clicked")} />
      </div>
    </>
  );
};

export default ConversationDetail;
