/* export default function authHeader() {
  let tokens = localStorage.getItem("tokens") ?? "";
  tokens = tokens.replace('"', "");
  var token = tokens.replace('"', "");

  if (tokens && tokens.token) {
    const hd = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    return hd;
  } else {
    return {};
  }
}
 */
