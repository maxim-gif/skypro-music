// import {baseUrl} from './baseURL.js'
// export async function getRefreshToken() {
//     fetch(`${baseUrl}user/token/`, {
//         method: "POST",
//         body: JSON.stringify({
//           email: "test@test.test",
//           password: "test@test.test",
//         }),
//         headers: {
//           "content-type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => {
//             localStorage.setItem('refreshToken', json.refresh)
//             console.log(json.refresh);
//         });
// }
