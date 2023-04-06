userbase.init({ appId: '929c2cdf-7773-41aa-94bb-f16f01283581' })
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

  			function showTodos(username) {
    			document.getElementById('auth-view').style.display = 'none'

    			document.getElementById('todo-view').style.display = 'block'
    			document.getElementById('sidebar').style.display = 'block'
    			document.getElementById('footer').style.display = 'block'
    			document.getElementById('username').innerHTML = username

  			}

			document.getElementById('login-form').addEventListener('submit', handleLogin)
  			document.getElementById('signup-form').addEventListener('submit', handleSignUp)


			document.getElementById('todo-view').style.display = 'none'
			document.getElementById('sidebar').style.display = 'none'
			document.getElementById('footer').style.display = 'none'
