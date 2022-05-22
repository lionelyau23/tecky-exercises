/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let result = 0
  const records = {}

  for(let email of emails) {
    const domain = email.slice(email.indexOf('@'))
    let local = email.slice(0, email.indexOf('@'))
    local = local.slice(0, local.indexOf('+') == -1 ? local.length : local.indexOf('+'))
    local = local.replaceAll('.','')

    const unique = local.concat(domain)

    if (!(unique in records)) {
      result += 1
    }
    records[unique] = 0
  }
  return result
}

console.log(numUniqueEmails(['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com']))
console.log(numUniqueEmails(['a@leetcode.com','b@leetcode.com','c@leetcode.com']))
