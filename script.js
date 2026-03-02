
// button  toggling script
function currentState(id) {
   const states = ['all', 'interview', 'rejected'];

   for (const state of states) {
      const filter = document.getElementById(state);
      if (state == id) {
         filter.classList.remove("bg-[#FFFFFF]", "text-[#64748B]");
         filter.classList.add("bg-blue-500", "text-white");
      }
      else {
         filter.classList.remove("bg-blue-500", "text-white");
         filter.classList.add("bg-[#FFFFFF]", "text-[#64748B]");
      }
   }
}