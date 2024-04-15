// const Banner = () => {
//     return (
//       <div className="flex items-end">
//       <div
//         className="sm:h-[70vh] h-[50vh] bg-cover  bg-center w-full flex items-end"
//         style={{
//           backgroundImage: `url(https://npr.brightspotcdn.com/legacy/sites/ketr/files/201904/avengers_endgame_-_facebook.jpg)`,
//         }}
//       >
//         <div className="text-2xl text-white bg-gray-900/60 text-center w-full pt-2 pb-2 font-sans font-serif">
//           Avengers Endgame
//         </div>
//       </div>
//       </div>
//     );
//   };
  
//   export default Banner;
  
const Banner = () => {
    return (
      <div className="relative">
        <div
          className="sm:h-[70vh] h-[40vh] bg-cover bg-center w-full"
          style={{
            backgroundImage: `url(https://npr.brightspotcdn.com/legacy/sites/ketr/files/201904/avengers_endgame_-_facebook.jpg)`,
          }}
        >
          <div className="absolute inset-0 flex justify-center items-end">
            <div className="text-2xl text-white bg-gray-900/60 text-center p-2 font-sans font-serif">
              Avengers Endgame
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  