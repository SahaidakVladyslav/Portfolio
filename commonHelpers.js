import"./assets/mobile-menu-4c592b2c.js";import{i as r,l as c}from"./assets/vendor-c442766a.js";(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",l),e.closeModalBtn.addEventListener("click",l);function l(){e.modal.classList.toggle("is-hidden")}})();const o="feedback-form-state",s=document.querySelector("form"),n=document.querySelector("textarea"),t={name:Array.from(document.querySelectorAll(".backdrop__input"))[0],telephone:Array.from(document.querySelectorAll(".backdrop__input"))[1],email:Array.from(document.querySelectorAll(".backdrop__input"))[2]},m=document.querySelector("#signature");let a={name:"",telephone:"",email:"",message:""};const i=()=>{a.name=t.name.value,a.telephone=t.telephone.value,a.email=t.email.value,a.message=n.value,localStorage.setItem(o,JSON.stringify(a))},u=()=>{if(localStorage.getItem(o)){const e=JSON.parse(localStorage.getItem(o));t.name.value=e.name,t.telephone.value=e.telephone,t.email.value=e.email,n.value=e.message}};r.settings({position:"topRight"});u();localStorage.removeItem(o);s.addEventListener("input",c(function(l){if(l.target===n||Object.values(t).includes(l.target))i();else return},500));s.addEventListener("submit",e=>{if(e.preventDefault(),!t.name.value||!t.telephone.value||!t.email.value||!n.value)return r.error({title:"Error",message:"Please fill in the blank input fields"});if(!m.checked)return r.info({title:"Hello",message:"Please agree to the privacy policy!"});r.success({title:"Success",message:"Data sent successfully!"}),localStorage.removeItem(o),console.log(a),s.reset()});
//# sourceMappingURL=commonHelpers.js.map
