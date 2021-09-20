const headTag = document.getElementById("head-tag");
const tags = ["Full Stack Developer", "Student", "Tech Enthusiast"];

var typewriter = new Typewriter(headTag, {
   loop: true,
});

typewriter.typeString("Full Stack Developer").pauseFor(2500).deleteAll().typeString("Student at NITT").pauseFor(2500).deleteAll().typeString("Tech Enthusiast").pauseFor(2500).start();

const sendEmail = () => {
   if (document.getElementById("name").value == "" || document.getElementById("email").value == "") {
      window.alert("Enter Details");
      return;
   }
   const templateParams = {
      from_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      to_name: "Suhail Ahmed",
   };
   console.log("sksksk");
   emailjs.init("user_wn5rGaQFPMeSxFScs789F");
   const serviceID = "service_6fnzb9c";
   const templateID = "template_61guy5s";

   emailjs.send(serviceID, templateID, templateParams);

   window.alert("You will be Contacted Soon");
};
