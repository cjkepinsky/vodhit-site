/*
  Waitlist integration — configure ONE method:

  1) Tally / MailerLite hosted form: set hostedWaitlistUrl to your public https form URL.
  2) Formspree or compatible POST service: set formEndpoint to its verified HTTPS endpoint.

  Leave both empty until you have a real provider and a complete privacy notice.
  The page will then honestly display "Waitlist opens soon" and WILL NOT store emails.
*/
window.VODHIT_CONFIG = {
  hostedWaitlistUrl: "",
  formEndpoint: ""
};