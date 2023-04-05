Using render.com…


Backend (render):

1. Dashboard
2. New Web Service
3. Connect GitHub
4. Only select repository and find your project repository
5. Install
6. Connect

7. Give it any name (ex: blog-backend)
8. Type backend for root directory (or whatever you called the folder with backend code)
9. Type npm install for build command
10. Type node server for start command
11. Click Advanced 
12. Click Add Environment Variable (add one for each variable in your .env file in the backend folder)
13. Create Web Service

It should show a green Live next to the date and time. Copy the on onrender.com link above.


Frontend (render):

1. New
2. Static Site
3. Click Connect next to the repository (which should already be configured)
4. Give it any name (ex: blog-frontend)
5. Type client for root directory (or whatever you called the folder with frontend code)
6. Type npm run build for build command
7. Type build for publish directory
8. Click Advanced
9. Click Add Environment Variable (add REACT_APP_BASE_URL as a key and the render.com link just created for the backend as its value)
10. Click Create Static Site
11. Click Redirects/Rewrites
12. Add Rule
13. Under Source type /* and under Destination type /index.html and under Action select Rewrite
14. Save Changes

It should show a green Live next to the date and time. Copy the on onrender.com link above.





If you’d prefer a deploying the frontend with Netlify… 


Frontend (Netlify)

1. Add new site
2. Import an existing project
3. Connect to Git provider aka GitHub
4. Select the repository
5. Base directory is client, build command is npm run build, and publish directory is client/build
6. Show advanced
7. Add your environment variables. Remember to add REACT_APP_BASE_URL = your render backend link and another of CI = false
8. Add a _redirects file in the public folder of your client and add the line: /* /index.html 200 

OPTIONAL (make URL shorter with subdomain): 

9. Make URL shorter by going to Site Settings, Domain management, and under Production domains click on Options and Edit site name. Change it and save



