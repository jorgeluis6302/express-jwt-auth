localStorage.setItem('ACCESS_TOKEN', '')
let payload = {
  userName: '',
  password: '',
}
const host = 'http://localhost:3001'
const authLoginURI = 'auth/login'
const getUsersURI = 'users'

const loginRequest = async (payload) => {
  const response = await fetch(`${host}/${authLoginURI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.json()
}

const getUsersRequest = async () => {
  const response = await fetch(`${host}/${getUsersURI}`, {
    headers: {
      'authorization': localStorage.getItem('ACCESS_TOKEN') ?? '',
    },
  })
  return response.json()
}

document.querySelector("#username").addEventListener("change", (e) => {
  console.log(e.target.value)
  payload = {
    ...payload,
    userName: e.target.value,
  }
})

document.querySelector("#password").addEventListener("change", (e) => {
  console.log(e.target.value)
  payload = {
    ...payload,
    password: e.target.value,
  }
})

document.querySelector("#login-form").addEventListener("submit", (e) => {
  e.preventDefault()

  loginRequest(payload)
    .then(res => {
      const loginSection = document.querySelector("#login-result")
      if (res?.accessToken) {
        localStorage.setItem('ACCESS_TOKEN', res.accessToken)
        loginSection.innerHTML = `<div class="response success-response">Welcome <b>${res.userName}</b>!</div>`
      } else {
        loginSection.innerHTML = `<div class="response error-response">${res.error}</div>`
      }
    })
})

document.querySelector("#get-users-button").addEventListener("click", () => {
  getUsersRequest()
    .then(
      res => {
        const getUsersSection = document.querySelector("#get-users-result")

        getUsersSection.value = res?.error ?
          res.error :
          JSON.stringify(res)
      }
    )
})
