const Navbarr = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center gap-6 bg-slate-900/70 mb-4 p-3 font-bold w-fit px-8 rounded-3xl border border-white/20 shadow-md hover:shadow-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
      <a href="#home" className="text-white hover:underline text-sm">Home</a>
      <a href="#about" className="text-white hover:underline text-sm">About</a>
      <a href="#skills" className="text-white hover:underline text-sm">Skills</a>
       <a href="#cerificates" className="text-white hover:underline text-sm">Certificates</a>
      <a href="#projects" className="text-white hover:underline text-sm">Projects</a>
       <a href="#hobbies" className="text-white hover:underline text-sm">Hobbies</a>
     
    </div>
  );
};

export default Navbarr;
