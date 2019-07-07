// contact message event
const contact = event => {
  event.preventDefault()

  let contactPage = document.body.querySelector('section.contact article')
  let errorElement = document.body.querySelector('#error')
  let name = document.body.querySelector('input[name=name]').value
  let email = document.body.querySelector('input[name=email]').value
  let subject = document.body.querySelector('input[name=subject]').value
  let message = document.body.querySelector('textarea[name=message]').value

  // validation
  let valid = (name.length > 1 && email.length > 1 && message.length > 1)

  if (!valid) {
    errorElement.textContent = 'Please fill in all required fields'
    return false
  } else {
    errorElement.textContent = ''
    let url = document.body.querySelector('form').action
    // let url = 'http://localhost:3232/'
    let data = { name, email, subject, message }

    // send POST request
    return window.fetch(url, {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: serialize(data)
    }).then(function (data) {
      console.log('Request success with response', data)
      contactPage.innerHTML = '<h2 class="center">Thank you for your message!</h2>'
    }).catch(function (error) {
      console.log('Request failed', error)
    })
  }
}

const serialize = (obj, out = '') => {
  if (typeof obj === 'string') return obj
  for (let key in obj) { out += key + '=' + obj[key] + '&' }
  return out.slice(0, -1)
}

// bind submit button event to custom event
const button = document.body.querySelector('#send')
button.addEventListener('click', event => contact(event))
