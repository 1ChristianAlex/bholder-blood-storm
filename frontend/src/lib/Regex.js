export class RegexRPG {
  static onlyText(text) {
    let regex = new RegExp(/^[a-zA-Z ]*$/, 'g');
    return regex.test(text);
  }

  static valEmail(email) {
    let regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      'g'
    );
    return regex.test(email);
  }

  static valUserName(username) {
    let regex = new RegExp(/^[a-zA-Z\d_?\-?]*$/, 'g');
    return regex.test(username);
  }
}
