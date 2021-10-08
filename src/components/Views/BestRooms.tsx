import Image from "next/image";
export default function BestRooms() {
  return (
    <section className="my-8 container">
      <h2 className="text-center text-3xl text-mainYello">Best Rooms</h2>
      <div className="flex mt-8 gap-5">
        <div className="w-1/2 ">
          <div className="relative h-96">
            <Image
              layout="fill"
              className=" rounded-t-md"
              alt="room"
              src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className=" p-4 shadow-md  ">
            <h3 className=" text-darkGray">Family Room</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vel molestie nisl. Duis ac mi leo.
            </p>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-5">
          <RoomImage src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80" />
          <RoomImage src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1121&q=80" />
          <RoomImage src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
          <RoomImage src="https://images.unsplash.com/photo-1519449556851-5720b33024e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
        </div>
      </div>
    </section>
  );
}

const RoomImage = ({ src }: { src: string }) => {
  return (
    <div className="relative ">
      <Image layout="fill" alt="room" src={src} className="rounded-md" />
      <p className="absolute bottom-0 left-4 text-white bg-mainYello p-1 rounded-md mb-2">
        Family room
      </p>
    </div>
  );
};
