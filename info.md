1. create a local git repository named e-shop---
  - done

2. create/switch to a local branch called "dev": which will hold the development version of your project
  - done

3. create 2 folders: client, server, copy what you have done so far in react - to the client folder, copy what you have done lastly for the backed in the server folder
  - done

4. add a single .gitignore to the root of your project and make sure that NONE of the node_modules make it to the staging
  - done
  - using vscode terminal, navigate to your path, then to create the -gitignore file write : code .gitignore. 
  - to make sure than node modules don't make it to the staging,we need to add the following lines to the .gitignore file to exclude the node_modules directory
  - after saving the file, we need to return to the terminal and add commit the .gitignore file to exclude git repository, writing : git add .gitignore
git commit -m "Add .gitignore to exclude node_modules"

5. add a remote to your repository and push everything you have to github, send the link to your mentor
  - git remote add origin https://github.com/corinahincu/PROJECT-E-SHOP---.git
  - git push -u origin dev
