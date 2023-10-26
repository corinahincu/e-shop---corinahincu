# SETUP
1. create a local git repository named e-shop---
  - done

2. create/switch to a local branch called "dev": which will hold the development version of your project
  - done

3. create 2 folders: client, server, copy what you have done so far in react - to the client folder, copy what you have done lastly for the backed in the server folder
  - done

4. add a single .gitignore to the root of your project and make sure that NONE of the node_modules make it to the staging
  - done
  - using vscode terminal, navigate to your path, then to create the -gitignore file write : code .gitignore or touch .gitignore
  - in the file you can add what you want to ignore

5. add a remote to your repository and push everything you have to github, send the link to your mentor
  - git remote add origin https://github.com/corinahincu/e-shop---corinahincu.git
  - git push -u origin dev
  - done 
  
# FRONTEND

1. start by re-factoring the code: all of your components will be in src/components
  - done

2. rename the Product.js to model.js inside your src/components/product folder, why do you think this is a better approach?
  - done

3. add Money { id, amount, currency } model - which represents money amounts
  - done

4. update the Product model - add id, add image (string) - price will hold Money {} object
  - done








//////////////////////////////////
throw error : Execution of the  function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.