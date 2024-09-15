import React from 'react';

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const GITHUB_CALLBACK_URL = 'http://127.0.0.1:3000/bezoekers';
const githubOAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user&redirect_uri=${GITHUB_CALLBACK_URL}`;

const GitHubOAuth = () => {
    const handleLogin = async (code) => {
      try {
        console.log({
            client_id: GITHUB_CLIENT_ID,
            client_secret: GITHUB_CLIENT_SECRET,
            code,
            redirect_uri: GITHUB_CALLBACK_URL
      })
        // Exchange the code for an access token
        const data = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              client_id: GITHUB_CLIENT_ID,
              client_secret: GITHUB_CLIENT_SECRET,
              code,
            }),
          });
  
        const accessToken = data.access_token;
  
        // Fetch the user's GitHub profile
        const userProfile = await fetch('https://api.github.com/user', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'SanderSekreve.nl'
          }
        }).then(response => response.json());
  
        // Handle the user profile data (e.g., store it in your database and log the user in)
        console.log(`Welcome, ${userProfile.name}!`);
        localStorage.setItem("githubname", userProfile.name);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleGitHubCallback = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
        
      if (code) {
        handleLogin(code);
      }
    };
  
    React.useEffect(() => {
      handleGitHubCallback();
    }, []);
  
    return (
      <div className='w-44'>
        <a href={githubOAuthURL}>Sign in with GitHub</a>
      </div>
    );
  };
  
export default GitHubOAuth;
