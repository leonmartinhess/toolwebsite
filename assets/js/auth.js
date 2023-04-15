            userbase.init({ appId: 'ec3faec9-0cad-43cf-a1f2-5b625a23ea59' })

    		function handleLogin(e) {
    			e.preventDefault()

				const username = document.getElementById('login-username').value
				const password = document.getElementById('login-password').value

    			userbase.signIn({ username, password, rememberMe: 'none' })
    				  .then((user) => showTodos(user.username))
    				  .catch((e) => document.getElementById('login-error').innerHTML = e)
  			}

  			function handleSignUp(e) {
   				 e.preventDefault()

    			const username = document.getElementById('signup-username').value
    			const password = document.getElementById('signup-password').value

    			userbase.signUp({ username, password, rememberMe: 'none' })
      				.then((user) => showTodos(user.username))
      				.catch((e) => document.getElementById('signup-error').innerHTML = e)
  			}

            function handleLogout() {
                 userbase.signOut()
                    .then(() => showAuth())
                    .catch((e) => document.getElementById('logout-error').innerText = e)
            }

  			function showTodos(username) {
    			document.getElementById('auth-view').style.display = 'none'
    			document.getElementById('todo-view').style.display = 'block'
    			document.getElementById('sidebar').style.visibility = 'visible'
    			document.getElementById('footer').style.display = 'block'
    			document.getElementById('username').innerHTML = username

  			}

  			function showAuth() {
                document.getElementById('todo-view').style.display = 'none'
                document.getElementById('auth-view').style.display = 'block'
                document.getElementById('sidebar').style.visibility = 'hidden'
                document.getElementById('footer').style.display = 'none'
                document.getElementById('login-username').value = ''
                document.getElementById('login-password').value = ''
                document.getElementById('login-error').innerText = ''
                document.getElementById('signup-username').value = ''
                document.getElementById('signup-password').value = ''
                document.getElementById('signup-error').innerText = ''
            }

			document.getElementById('login-form').addEventListener('submit', handleLogin)
  			document.getElementById('signup-form').addEventListener('submit', handleSignUp)
  			document.getElementById('logout-button').addEventListener('click', handleLogout)
			document.getElementById('todo-view').style.display = 'none'
			document.getElementById('sidebar').style.visibility = 'hidden'
			document.getElementById('footer').style.display = 'none'



			document.getElementById('login').style.display = 'none'
            function showSignup() {
                document.getElementById('signup-button').className = 'button fit primary'
                document.getElementById('login-button').className = 'button fit'
                document.getElementById('signup').style.display = 'block'
                document.getElementById('login').style.display = 'none'
            }

            function showLogin() {
                document.getElementById('signup-button').className = 'button fit'
                document.getElementById('login-button').className = 'button fit primary'
                document.getElementById('login').style.display = 'block'
                document.getElementById('signup').style.display = 'none'
            }