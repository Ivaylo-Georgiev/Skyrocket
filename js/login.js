const STUDENT = "arya.stark@uni-sofia.bg";
const TEACHER = "syrio.forell@uni-sofia.bg";
const ADMINISTRATOR = "littlefinger@uni-sofia.bg";
const RECRUITER = "tywin.lannister@lanniscorp.com";


$("#login-form").submit(function( event ) {
  event.preventDefault();

  let email = $("#email").val();

  if(email === STUDENT) {
    redirectToStudent();
  }

  if(email === RECRUITER) {
    redirectToRecruiter();
  }

  if(email === TEACHER) {
    redirectToTeacher();
  }

  if (email === ADMINISTRATOR) {
    redirectToAdministrator();
  }

});
