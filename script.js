

const sections = {
   allSection: document.getElementById('all-section'),
   interviewSection: document.getElementById('interview-section'),
   rejectedSection: document.getElementById('rejected-section')
};
let cState = 'all';
// button  toggling script

function currentState(id) {
   const states = ['all', 'interview', 'rejected'];
   cState = id;
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


   for (const section in sections) {
      sections[section].classList.add('hidden');
   }
   if (id === 'all') {
      sections.allSection.classList.remove('hidden');
   }
   else if (id === 'interview') {
      sections.interviewSection.classList.remove('hidden');
   }
   else {
      sections.rejectedSection.classList.remove('hidden');
   }
}

const totalJob=document.getElementById('total-job');
const interviewedJob=document.getElementById('interviewed-job');
const rejectedJob=document.getElementById('rejected-job');

function count(){
   totalJob.innerText=sections.allSection.children.length;
interviewedJob.innerText=sections.interviewSection.children.length;
rejectedJob.innerText=sections.rejectedSection.children.length;

}
currentState('all');

const buttons=document.querySelectorAll('.interview-btn,.rejected-btn,.delete-btn');
for (const btn of buttons) {
   btn.addEventListener('click',function(event){
      
      const clickedBtn=event.target;
      const card=clickedBtn.closest('.card');
      const statusBox=card.querySelector('.status-box');

      // console.log(card);
      if(clickedBtn.classList.contains('interview-btn')){
         sections.interviewSection.appendChild(card);
         statusBox.classList.remove('text-[#002C5C]','bg-[#EEF4FF]');
         statusBox.classList.add('border','border-green-600','bg-green-300','text-white');
         statusBox.innerText='Interview';
         card.classList.add('border-l-5','border-green-500');
         count();
      }
      else if(clickedBtn.classList.contains('rejected-btn')){
         sections.rejectedSection.appendChild(card);
         statusBox.classList.remove('text-[#002C5C]','bg-[#EEF4FF]');
         statusBox.classList.add('border','border-red-600','bg-red-400','text-white');
         statusBox.innerText='Rejected';
         card.classList.add('border-l-5','border-red-500');
         count();
      }
      else if(clickedBtn.classList.contains('delete-btn')){
         card.remove();
         count();
      }

   })
}

