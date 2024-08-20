import { ContactFormData } from "@/app/components/contact/contact";

export function sendEmail(data: ContactFormData) {
  const apiEndpoint = '/api/email/';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response.message)
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}