mkdir my-app
cd my-app
# The problem with running the shell script is that it ends up running this
# command in the same location as the shell script, whereas we want it to 
# run in the my-app directory created by the script.
npm i react react-dom next --save
mkdir pages
cd pages 
echo "import react from 'react';\n\nconst Page = () => {\n\treturn <div>Hello</div>;\n}\n\nexport default Page;" > index.js